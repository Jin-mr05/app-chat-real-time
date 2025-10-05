import { BadRequestException, CanActivate, ExecutionContext, Injectable, NotFoundException } from "@nestjs/common";
import { Observable } from "rxjs";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class IsAuthorAccount implements CanActivate {

	constructor(
		private readonly prismaService: PrismaService
	) { }

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest()
		const user = request.user
		const userId: string = request.query?.userId || request.params?.userId || request.body?.userId

		if (!user || !user.id) {
			throw new BadRequestException("User not authenticated")
		}

		if (!userId) {
			throw new BadRequestException("Account ID is required")
		}

		// check available Account
		const availableAccount = await this.prismaService.user.findUnique({
			where: { id: userId }
		})

		if (!availableAccount) {
			throw new NotFoundException("Account not found")
		}

		// check if the authenticated user is the owner of the account
		return availableAccount.id === user.id
	}
}