import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginDto {
    @ApiProperty({
        description: 'User email address',
        example: 'user@example.com',
        format: 'email',
    })
    @IsEmail({}, { message: 'Invalid email format' })
    @IsNotEmpty({ message: 'Email is required' })
    email: string;

    @ApiProperty({
        description: 'User password',
        example: 'Password123!',
        minLength: 8,
    })
    @IsString({ message: 'Password must be a string' })
    @IsNotEmpty({ message: 'Password is required' })
    @Length(8, 100, { message: 'Password must be at least 8 characters long' })
    password: string;

    @ApiProperty({
        description: 'HMAC signature for session verification',
        example: 'a1b2c3d4e5f6...',
    })
    @IsString({ message: 'HMAC must be a string' })
    @IsNotEmpty({ message: 'HMAC is required' })
    hmac: string;
}