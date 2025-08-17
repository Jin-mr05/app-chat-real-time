import { ConfigService } from '@nestjs/config';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { createClient } from 'redis';
import { createAdapter } from '@socket.io/redis-adapter';
import { ServerOptions } from 'socket.io';

export class RedisIoAdapter extends IoAdapter {

	constructor(private readonly configService: ConfigService) {
		super()
	}

	private adapter

	async connectToRedis(): Promise<void> {

		const urlRedis = this.configService.getOrThrow<string>("REDIS_URL")

		const pubClient = createClient({ url: urlRedis })
		const subClient = pubClient.duplicate()

		await Promise.all([pubClient.connect(), subClient.connect()])

		this.adapter = createAdapter(pubClient, subClient)
	}

	createIOServer(port: number, options?: ServerOptions) {
		const server = super.createIOServer(port, options)
		server.adapter(this.adapter)
		return server
	}

}