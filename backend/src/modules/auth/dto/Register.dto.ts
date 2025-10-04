import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length, Matches } from 'class-validator';

export class RegisterDto {
    @ApiProperty({
        description: 'Username (3-30 characters, letters, numbers, underscores, hyphens)',
        example: 'john_doe',
        minLength: 3,
        maxLength: 30,
    })
    @IsString({ message: 'Username must be a string' })
    @IsNotEmpty({ message: 'Username is required' })
    @Length(3, 30, { message: 'Username must be between 3 and 30 characters' })
    @Matches(/^[a-zA-Z0-9_-]+$/, {
        message: 'Username can only contain letters, numbers, underscores, and hyphens',
    })
    name: string;

    @ApiProperty({
        description: 'Valid email address',
        example: 'user@example.com',
        format: 'email',
    })
    @IsEmail({}, { message: 'Invalid email format' })
    @IsNotEmpty({ message: 'Email is required' })
    email: string;

    @ApiProperty({
        description: 'Password (min 8 characters, must include uppercase, lowercase, number, and special character)',
        example: 'Password123!',
        minLength: 8,
    })
    @IsString({ message: 'Password must be a string' })
    @IsNotEmpty({ message: 'Password is required' })
    @Length(8, 100, { message: 'Password must be at least 8 characters long' })
    @Matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        {
            message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
        }
    )
    password: string;
}