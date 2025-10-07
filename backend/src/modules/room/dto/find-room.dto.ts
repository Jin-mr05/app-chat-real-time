export class FindRoomDto {
	nameRoom: string
	page?: number = 1
	limit?: number = 10
	cursor?: string
	nextCursor?: string
	hasNext?: boolean
	hasPrev?: number
	take?: number = 10
	skip?: number
}