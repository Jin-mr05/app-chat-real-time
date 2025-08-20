import { Catch, WsExceptionFilter as NestWsExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { WsException } from '@nestjs/websockets';

@Catch(WsException)
export class WsExceptionFilter implements NestWsExceptionFilter {
	catch(exception: WsException, host: ArgumentsHost) {
		const client = host.switchToWs().getClient();

		client.emit('error', {
			status: 'error',
			message: exception.message,
			timestamp: new Date().toISOString()
		});
	}
}