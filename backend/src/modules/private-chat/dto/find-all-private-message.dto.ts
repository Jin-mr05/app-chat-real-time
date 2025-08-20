import { IsOptional, IsNumber, Min, Max, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class FindAllPrivateMessageDto {
  @ApiProperty({ description: 'Page number', minimum: 1, default: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page?: number = 1;

  @ApiProperty({ description: 'Items per page', minimum: 1, maximum: 100, default: 20 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(100)
  limit?: number = 20;

  @ApiProperty({ description: 'Cursor for pagination', required: false })
  @IsOptional()
  @IsString()
  cursor?: string;

  @ApiProperty({ description: 'Search term', required: false })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiProperty({ description: 'User ID filter', required: false })
  @IsOptional()
  @IsString()
  userId?: string;
}