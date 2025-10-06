import { BadRequestException, CanActivate, ExecutionContext, Injectable, NotFoundException } from "@nestjs/common";
import { Observable } from "rxjs";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class IsAuthotRoom implements CanActivate {

	constructor(
		private readonly prismnaService: PrismaService
	) { }

	async canActivate(context: ExecutionContext) {
		// get request
		const request = context.switchToHttp().getRequest()

		// get data in request
		const user = request.user
		const roomId = request.params?.roomId || request.query?.roomId

		if (!user || !roomId) {
			throw new BadRequestException("Data is missing")
		}

		// finding room
		const roomUser = await this.prismnaService.room.findUnique({
			where: { id: roomId }
		})
		if (!roomUser) throw new NotFoundException("Room is not found")

		return (roomUser.authorId === user.id) ? true : false
	}

}