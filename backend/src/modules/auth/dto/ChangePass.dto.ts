import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';

export class ChangepasswordDto {
    @ApiProperty({
        description: 'Current password',
        example: 'OldPassword123!',
        minLength: 8,
    })
    @IsString({ message: 'Old password must be a string' })
    @IsNotEmpty({ message: 'Old password is required' })
    @Length(8, 100, { message: 'Old password must be at least 8 characters long' })
    oldPassword: string;

    @ApiProperty({
        description: 'New password (min 8 characters, must include uppercase, lowercase, number, and special character)',
        example: 'NewPassword123!',
        minLength: 8,
    })
    @IsString({ message: 'New password must be a string' })
    @IsNotEmpty({ message: 'New password is required' })
    @Length(8, 100, { message: 'New password must be at least 8 characters long' })
    @Matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        {
            message: 'New password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
        }
    )
    newPassword: string;
}