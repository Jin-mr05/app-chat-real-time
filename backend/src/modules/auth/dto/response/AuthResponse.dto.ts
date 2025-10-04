import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
	@ApiProperty({ example: 'user-id-123' })
	id: string;

	@ApiProperty({ example: 'john_doe' })
	name: string;

	@ApiProperty({ example: 'user@example.com' })
	email: string;

	@ApiProperty({ example: true })
	isActive: boolean;

	@ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
	createdAt: Date;

	@ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
	updateAt: Date;
}

export class LoginResponseDto {
	@ApiProperty({ example: true })
	success: boolean;

	@ApiProperty({ example: 'Login successful' })
	message: string;

	@ApiProperty({ type: UserResponseDto })
	data: UserResponseDto;

	@ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
	'@accessToken': string;

	@ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
	'@refreshToken': string;

	@ApiProperty({ example: 'session-id-123' })
	'@sessionId': string;
}

export class RegisterResponseDto {
	@ApiProperty({ example: true })
	success: boolean;

	@ApiProperty({ example: 'Register user successful, Verification email sent' })
	message: string;

	@ApiProperty({ type: UserResponseDto })
	data: UserResponseDto;
}

export class MessageResponseDto {
	@ApiProperty({ example: true })
	success: boolean;

	@ApiProperty({ example: 'Operation successful' })
	message: string;

	@ApiProperty({ required: false })
	data?: any;
}

export class TempCodeResponseDto {
	@ApiProperty({ example: true })
	success: boolean;

	@ApiProperty({ example: 'Temporary code created' })
	message: string;

	@ApiProperty({
		type: 'object',
		properties: {
			token: { type: 'string', example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' },
			hmac: { type: 'string', example: 'a1b2c3d4e5f6...' }
		}
	})
	data: {
		token: string;
		hmac: string;
	};
}

export class ErrorResponseDto {
	@ApiProperty({ example: false })
	success: boolean;

	@ApiProperty({ example: 'Error message' })
	message: string;

	@ApiProperty({ example: 'ERROR_CODE', required: false })
	error?: string;

	@ApiProperty({ required: false })
	details?: any;
}