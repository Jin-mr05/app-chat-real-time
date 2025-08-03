import { Module, NotFoundException } from '@nestjs/common';
import { GroupService } from './group.service';
import { Request } from 'express'
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
    providers: [GroupService],
    exports: [GroupService]
})
export class GroupModule {

    constructor(
        private readonly prismaService: PrismaService
    ) { }

    // generate link group
    async generateLinkGroup(groupId: string, authorId: string) {

        // find user
        const exitedUser = await this.prismaService.user.findUnique({
            where: { id: authorId },
            select: { groups: true }
        })

        // count the groups
        const countGroup = exitedUser?.groups?.length

        const linkGroup = `${groupId}-${authorId} + ${countGroup}`

        return linkGroup
    }

    // create group 
    async createGroup(req: Request, nameGroup: string) {
        const exitedUser = await this.prismaService.user.findUnique({
            where: { id: req.user?.id }
        })

        // check exiteduser
        if (!exitedUser) {
            throw new NotFoundException('user not found')
        }   

        // generate link group
        const linkGroup = await this.generateLinkGroup(exitedUser?.id, req.user?.id)

        const newGroup = await this.prismaService.group.create({
            data: {
                name: nameGroup,
                authorId: req.user?.id,
                linkGroup: linkGroup
            }
        })

        return newGroup
    }

}
