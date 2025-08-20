import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CustomCacheService } from "../custom-cache/custom-cache.service";
import { USER_CONSTANTS } from "./user.constants";
import { EditDetailDto } from "./dto/EditDetail.dto";
import { Request } from 'express'
import { AUTH_CONSTANTS } from "../auth/auth.constants";
@Injectable()
export class UserService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly customCacheService: CustomCacheService,
        private readonly customCache: CustomCacheService
    ) { }

    // Parse date string with improved validation
    private parseDateString(dateStr: string): Date | null {
        if (!dateStr) return null;

        // Support multiple date formats: yyyy/MM/dd, yyyy-MM-dd
        const match = dateStr.match(/^(\d{4})[\/\-](\d{2})[\/\-](\d{2})$/)
        if (!match) return null

        const [_, year, month, day] = match
        const date = new Date(Number(year), Number(month) - 1, Number(day))

        // Validate the date is valid and not in the future
        if (isNaN(date.getTime()) || date > new Date()) return null

        return date;
    }

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

    // edit user account details
    public async editDetailAccount(data: EditDetailDto, req: Request) {
        // get user from request
        const userId = req.user?.id;

        if (!userId) throw new UnauthorizedException('User not authenticated')

        const existingUser = await this.customCache.getUserByIdInCache(userId);

        if (!existingUser) {
            const key = AUTH_CONSTANTS.CACHE_KEYS.KeyUserWithId(userId)
            await this.customCache.setCacheTempObject(key, null)
            throw new NotFoundException('User not found');
        }

        // prepare update data
        const updateData: any = {};
        if (data.name !== undefined) updateData.name = data.name;
        if (data.birthDay !== undefined) updateData.birthday = this.parseDateString(data.birthDay);
        if (data.gender !== undefined) updateData.gender = data.gender;

        // update user details
        const updatedUser = await this.prismaService.user.update({
            where: { id: existingUser.id },
            data: updateData,
        });

        // update cache
        await this.customCache.updateUserCache(userId, updatedUser);

        // return user without password
        const { hashedPassword, ...userWithoutPassword } = updatedUser;
        return userWithoutPassword;
    }

}