import { Inject, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { FinduserBynameDto } from "../dto/find-user-by-name.dto";
import { REDIS_CONSTANTS } from "src/modules/redis/redis.constants";
import { User } from "prisma/generated/prisma";
import Redis from "ioredis";

@Injectable()
export class UserSearchService {
	constructor(
		private readonly prismaService: PrismaService,
		@Inject("REDIS_CLIENT") private readonly redisClient: Redis
	) { }

	async findUserByName(name: string, data: FinduserBynameDto) {
		// middleware find
		if (!name || name.trim() === '') {
			return {
				success: true,
				data: {
					users: [],
					pagination: null
				}
			}
		}

		// transform input data
		const searchTerm = name.trim().toLowerCase()

		// checking cache
		const key = REDIS_CONSTANTS.ACCOUNTS_LIKE_NAME_KEY(searchTerm)
		const cache = await this.redisClient.get(key)
		if (cache) {
			return {
				success: true,
				data: JSON.parse(cache)
			}
		}

		// construct queriesOptions
		const take = data?.take || 10
		const queryOptions: any = {
			where: {
				OR: [
					{
						fullname: {
							contains: searchTerm, // sửa lỗi chính tả "constains"
							mode: "insensitive"
						}
					},
					{
						username: {
							contains: searchTerm, // sửa lỗi chính tả "constains" và "insentitive"
							mode: "insensitive"
						}
					}
				],
			},
			take: take + 1
		}

		// pagination
		if (data?.cursor) {
			queryOptions.cursor = { id: data.cursor }
			queryOptions.skip = 1
		} else if (data?.page && data?.skip !== undefined) {
			queryOptions.skip = data.skip
			queryOptions.take = take
		}

		const users = await this.prismaService.user.findMany(queryOptions)

		// check hasmore
		const hasMore = users.length > take
		if (hasMore) users.pop()
		const nextCursor = hasMore && users.length > 0 ? users[users.length - 1].id : null

		const result = {
			users,
			pagination: data?.cursor ?
				{
					limit: take,
					hasNext: hasMore,
					nextCursor,
					cursor: data.cursor
				} :
				{
					page: data?.page || 1,
					limit: data?.take || 10,
					hasNext: hasMore,
					hasPrev: (data?.page || 1) > 1
				}
		}

		// save data in cache (TTL 5 phút)
		await this.redisClient.setex(key, 300, JSON.stringify(result))

		return {
			success: true,
			data: result
		}
	}
}