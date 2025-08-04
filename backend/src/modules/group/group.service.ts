import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Request } from 'express'
import { RoleInGroup } from "prisma/generated/prisma";

@Injectable()
export class GroupService {
    constructor(
        private readonly prismaService: PrismaService
    ) { }

    // generate link group
    async generateLinkGroup(groupId: string, authorId: string) {

        // find user
        const exitedUser = await this.prismaService.user.findUnique({
            where: { id: authorId },
            select: { createdGroups: true }
        })

        // count the groups
        const countGroup = exitedUser?.createdGroups?.length ?? 0

        const linkGroup = `${groupId}-${authorId} + ${countGroup+1}`

        return linkGroup
    }

    // create group 
    async createGroup(userId: string, nameGroup: string) {
        const exitedUser = await this.prismaService.user.findUnique({
            where: { id: userId }
        })

        // check exiteduser
        if (!exitedUser) {
            throw new NotFoundException('user not found')
        }

        // generate link group
        const linkGroup = await this.generateLinkGroup(exitedUser?.id, userId)

        const newGroup = await this.prismaService.group.create({
            data: {
                name: nameGroup || exitedUser?.name || '',
                authorId: userId,
                linkGroup: linkGroup
            }
        })

        // create permission 
        await this.prismaService.groupMember.create({
            data: {
                groupId: newGroup.id,
                userId: userId,
                role: RoleInGroup.ADMIN
            }
        })

        return newGroup
    }

    // add member
    async addMember(req: Request, nameUser: string, groupId: string) {
        // find author
        const author = await this.prismaService.user.findUnique({
            where: { id: req.user?.id }
        })

        if(!author) {
            throw new NotFoundException('user not found')
        }

        // find group
        const exitedGroup = await this.prismaService.group.findUnique({
            where: { id: groupId }
        })

        if(!exitedGroup) {
            throw new NotFoundException('group not found')
        }


        if(author.id !== exitedGroup.authorId ) {
            throw new UnauthorizedException('You are not author')
        }

        // add member
        const newMember = await this.prismaService.groupMember.create({
            data: {
                groupId: groupId,
                userId: author.id,
                role: RoleInGroup.MEMBER
            }
        })

        return newMember
    }
}