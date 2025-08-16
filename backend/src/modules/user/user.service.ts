import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Request } from 'express'
import { ChangeDetailDto } from "./dto/Change-detail.dto";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Cache } from 'cache-manager';
import { CustomCacheService } from "../custom-cache/custom-cache.service";
@Injectable()
export class UserService {
    constructor(
        private readonly prismaService: PrismaService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
        private readonly customCacheService: CustomCacheService
    ) { }

    // change basic detail
    async changeBasicDetail(req: Request, data: ChangeDetailDto) {
        const exitedUser = await this.prismaService.user.findUnique({
            where: { id: req.user?.id }
        })

        if (!exitedUser) {
            throw new NotFoundException("user not found")
        }

        const newUser = await this.prismaService.user.update({
            where: { id: req.user?.id },
            data: {
                name: data.name || undefined,
                birthday: data.birthday ? new Date(data.birthday) : undefined,
                gender: data.gender || undefined
            }
        })

        // find cache 
        // key
        const key = `cache-user${req.user?.id}`

        const cached = await this.cacheManager.get(key)

        if (cached) {
            // clear cache
            await this.cacheManager.del(key)
        }

        // save new cache 
        await this.cacheManager.set(key, newUser)

        const { hashedPassword, ...userWithoutPassword } = newUser
        return {
            success: true,
            user: userWithoutPassword
        }
    }

    // find user 
    async findUserByName(nameUser: string) {
        // find user
        const key = `user-${name}`
        const exitedUser = await this.customCacheService.getOrSet(key, async () => {
            this.prismaService.user.findFirst({
                where: { name: name }
            })
        })

        if (exitedUser === null || exitedUser === undefined) {
            throw new NotFoundException('No user found')
        }

        return {
            success: true,
            user: exitedUser
        }
    }

    async searchUsers(query: string) {
        if (!query || query.trim() === '') {
            return {
                success: true,
                users: []
            }
        }

        const searchTerm = query.trim().toLowerCase();
        
        const users = await this.prismaService.user.findMany({
            where: {
                OR: [
                    {
                        name: {
                            contains: searchTerm,
                            mode: 'insensitive'
                        }
                    },
                    {
                        email: {
                            contains: searchTerm,
                            mode: 'insensitive'
                        }
                    }
                ],
                AND: {
                    idDelete: false,
                    isActive: true
                }
            },
            select: {
                id: true,
                name: true,
                email: true,
                birthday: true,
                gender: true,
                createAt: true
            },
            take: 20
        })

        return {
            success: true,
            users
        }
    }

}