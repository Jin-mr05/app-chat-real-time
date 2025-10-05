import { Body, Controller, Put, Query, Req, UseGuards } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import express from 'express'
import { PrismaService } from "src/prisma/prisma.service";
import { RoomService } from "../room/room.service";
import { EditDetailDto } from "./dto/EditDetail.dto";
import { UserService } from "./services/user.service";
import { IsAuthorAccount } from "./isAuthorAccount.guard";

@ApiTags('User')
@Controller('user')
export class UserController {

    constructor(
        private readonly roomService: RoomService,
        private readonly userService: UserService,
        private readonly prismaService: PrismaService
    ) { }

    @Put('edit-detail')
    @UseGuards(IsAuthorAccount)
    @ApiOperation({
        summary: 'Edit user details',
        description: 'Update user profile information'
    })
    @ApiBody({
        type: EditDetailDto,
        description: 'Updated user details'
    })
    @ApiResponse({
        status: 200,
        description: 'User details updated successfully',
        schema: {
            example: {
                success: true,
                message: 'User details updated successfully',
                data: {
                    id: 'user-id',
                    email: 'user@example.com',
                    userName: 'newusername',
                    fullName: 'Full Name'
                }
            }
        }
    })
    async changeDetailUser(@Body() data: EditDetailDto, @Query('userId') userId: string, @Req() req: express.Request) {
        return this.userService.editDetailAccount(data, userId, req)
    }

    // @Public()
    // @Get('find-user-by-name')
    // @ApiOperation({
    //     summary: 'Find user by name',
    //     description: 'Search for users by their username or display name'
    // })
    // @ApiQuery({
    //     name: 'name',
    //     type: String,
    //     required: true,
    //     description: 'Username or display name to search for',
    //     example: 'john_doe'
    // })
    // @ApiResponse({
    //     status: 200,
    //     description: 'Users found successfully',
    //     schema: {
    //         example: {
    //             success: true,
    //             message: 'Users found',
    //             data: [
    //                 {
    //                     id: 'user-id',
    //                     userName: 'john_doe',
    //                     email: 'john@example.com',
    //                     fullName: 'John Doe',
    //                     avatar: 'avatar-url'
    //                 }
    //             ]
    //         }
    //     }
    // })
    // @ApiResponse({ status: 400, description: 'Bad request - Invalid search parameter' })
    // @ApiResponse({ status: 401, description: 'Unauthorized - Invalid token' })
    // @ApiResponse({ status: 404, description: 'No users found' })
    // async findUserByName(@Query('name') name: string, @Body() data: FinduserBynameDto) {
    //     return this.userService.searchUserByName(name, data)
    // }

    // @Post('create-room')
    // @ApiOperation({
    //     summary: 'Create a new chat room',
    //     description: 'Create a new chat room with the authenticated user as owner'
    // })
    // @ApiQuery({
    //     name: 'addressId',
    //     type: String,
    //     required: true,
    //     description: 'Address ID for the room location',
    //     example: 'address-123'
    // })
    // @ApiResponse({
    //     status: 201,
    //     description: 'Room created successfully',
    //     schema: {
    //         example: {
    //             success: true,
    //             message: 'Room created successfully',
    //             data: {
    //                 id: 'room-id',
    //                 name: 'Room Name',
    //                 ownerId: 'user-id',
    //                 addressId: 'address-123',
    //                 createdAt: '2025-08-19T10:00:00Z'
    //             }
    //         }
    //     }
    // })
    // @ApiResponse({ status: 400, description: 'Bad request - Invalid address ID' })
    // @ApiResponse({ status: 401, description: 'Unauthorized - Invalid token' })
    // @ApiResponse({ status: 403, description: 'Forbidden - User cannot create room' })
    // async createRoom(@Req() req: Request, @Query('addressId') addressId: string) {
    //     return this.roomService.createRoom(req, addressId)
    // }

    // @Post('add-member')
    // @ApiOperation({
    //     summary: 'Add member to room',
    //     description: 'Add a user to an existing chat room'
    // })
    // @ApiQuery({
    //     name: 'userName',
    //     type: String,
    //     required: true,
    //     description: 'Username of the user to add to the room',
    //     example: 'john_doe'
    // })
    // @ApiQuery({
    //     name: 'roomId',
    //     type: String,
    //     required: true,
    //     description: 'ID of the room to add the member to',
    //     example: 'room-123'
    // })
    // @ApiResponse({
    //     status: 200,
    //     description: 'Member added successfully',
    //     schema: {
    //         example: {
    //             success: true,
    //             message: 'Member added to room successfully',
    //             data: {
    //                 roomId: 'room-123',
    //                 memberId: 'user-id',
    //                 userName: 'john_doe',
    //                 addedAt: '2025-08-19T10:00:00Z'
    //             }
    //         }
    //     }
    // })
    // @ApiResponse({ status: 400, description: 'Bad request - Invalid parameters' })
    // @ApiResponse({ status: 401, description: 'Unauthorized - Invalid token' })
    // @ApiResponse({ status: 403, description: 'Forbidden - No permission to add members' })
    // @ApiResponse({ status: 404, description: 'Room or user not found' })
    // @ApiResponse({ status: 409, description: 'Conflict - User already in room' })
    // async addMember(@Req() req: Request, @Query('userName') userName: string, @Query('roomId') roomId: string) {
    //     return this.roomService.addMember(req, userName, roomId)
    // }

    // @Delete('remove-member')
    // @ApiOperation({
    //     summary: 'Remove member from room',
    //     description: 'Remove a user from a chat room'
    // })
    // @ApiQuery({
    //     name: 'userId',
    //     type: String,
    //     required: true,
    //     description: 'ID of the user to remove from the room',
    //     example: 'user-123'
    // })
    // @ApiResponse({
    //     status: 200,
    //     description: 'Member removed successfully',
    //     schema: {
    //         example: {
    //             success: true,
    //             message: 'Member removed from room successfully'
    //         }
    //     }
    // })
    // @ApiResponse({ status: 400, description: 'Bad request - Invalid user ID' })
    // @ApiResponse({ status: 401, description: 'Unauthorized - Invalid token' })
    // @ApiResponse({ status: 403, description: 'Forbidden - No permission to remove members' })
    // @ApiResponse({ status: 404, description: 'User or room not found' })
    // async removeMember(@Req() req: Request, @Query('roomId') roomId: string, @Query('userId') userId: string) {
    //     return this.roomService.removeMember(req, roomId, userId)
    // }

    // @Get('/chat/user-rooms')
    // @ApiOperation({
    //     summary: 'Get user chat rooms',
    //     description: 'Retrieve all chat rooms that the authenticated user is a member of'
    // })
    // @ApiResponse({
    //     status: 200,
    //     description: 'User rooms retrieved successfully',
    //     schema: {
    //         example: {
    //             success: true,
    //             message: 'User rooms retrieved successfully',
    //             data: [
    //                 {
    //                     id: 'room-id',
    //                     name: 'Room Name',
    //                     description: 'Room description',
    //                     ownerId: 'owner-id',
    //                     memberCount: 5,
    //                     lastMessage: {
    //                         content: 'Hello everyone!',
    //                         senderId: 'user-id',
    //                         timestamp: '2025-08-19T10:00:00Z'
    //                     },
    //                     createdAt: '2025-08-19T09:00:00Z'
    //                 }
    //             ]
    //         }
    //     }
    // })
    // @ApiResponse({ status: 401, description: 'Unauthorized - Invalid token' })
    // @ApiResponse({ status: 404, description: 'No rooms found for user' })
    // async getUserRooms(@Req() req: Request) {
    //     return this.roomService.getUserRooms(req)
    // }

    // @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
    // @ApiResponse({ status: 401, description: 'Unauthorized - Invalid token' })
    // @ApiResponse({ status: 404, description: 'User not found' })
    // @ApiResponse({ status: 409, description: 'Conflict - Username already exists' })
    // async editDetail(@Body() data: EditDetailDto, @Req() req: Request) {
    //     return this.userService.editDetailAccount(data, req)
    // }

    // @Public()
    // @Get('load-all-user')
    // async loadingAll() {
    //     return await this.prismaService.user.findMany()
    // }
}
