import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CustomCacheService } from "../custom-cache/custom-cache.service";
import { USER_CONSTANTS } from "./user.constants";
@Injectable()
export class UserService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly customCacheService: CustomCacheService
    ) { }

    // find user 
    async findUserByName(name: string) {
        // middleware find
        if (!name || name.trim() === '') {
            return {
                success: true,
                users: []
            }
        }

        // transform input data
        const searchTerm = name.trim().toLowerCase()

        const exitingListUsers = await this.customCacheService.getListUserInCache(searchTerm)

        // fall back
        if (!exitingListUsers) {
            const key = USER_CONSTANTS.CACHE_KEYS.KeyUserWithName(name)
            await this.customCacheService.setCacheTempObject(key, null)
            throw new NotFoundException("User not found")
        }

        return {
            success: true,
            user: exitingListUsers
        }
    }

}