import { IsString, IsNotEmpty, IsUUID, IsOptional, IsEnum, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { MessageType } from 'prisma/generated/prisma';

export class CreatePrivateMessageDto {
  @ApiProperty({ description: 'Message content', maxLength: 2000 })
  @IsString()
  @IsNotEmpty()
  @MaxLength(2000, { message: 'Message content cannot exceed 2000 characters' })
  content: string;

  @ApiProperty({ description: 'Chat ID' })
  @IsUUID(4, { message: 'Invalid chat ID format' })
  chatId: string;

  @ApiProperty({ description: 'Message type', enum: MessageType, default: MessageType.TEXT })
  @IsOptional()
  @IsEnum(MessageType)
  type?: MessageType = MessageType.TEXT;
}