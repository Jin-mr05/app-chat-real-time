import { Injectable, NotFoundException } from "@nestjs/common";
import { Request } from 'express';
import { CommonService } from "src/common/service/common.service";
import { PrismaService } from "src/prisma/prisma.service";
import { EditDetailDto } from "../dto/EditDetail.dto";
import { UserSearchService } from "./user.search.service";
import { FinduserBynameDto } from "../dto/find-user-by-name.dto";
@Injectable()
export class UserService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly commonService: CommonService,
        private readonly userSearchService: UserSearchService
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

    // edit user account details
    async editDetailAccount(data: EditDetailDto, req: Request) {
        const user = await this.commonService.checkingAvailableUser(req.user?.id)
        if (!user) throw new NotFoundException("User not found")

        // prepare update data
        const updateData: any = {};
        if (data.name !== undefined) updateData.name = data.name;
        if (data.birthDay !== undefined) updateData.birthday = this.parseDateString(data.birthDay);
        if (data.gender !== undefined) updateData.gender = data.gender;

        // update user details
        const updatedUser = await this.prismaService.user.update({
            where: { id: user.id },
            data: updateData,
        })

        // return user without password
        const { hashedPassword, ...userWithoutPassword } = updatedUser
        return {
            success: true,
            data: {
                userWithoutPassword
            }
        }
    }

    // search user 
    async searchUserByName(name: string, data: FinduserBynameDto) {
        return this.userSearchService.findUserByName(name, data)
    }

}