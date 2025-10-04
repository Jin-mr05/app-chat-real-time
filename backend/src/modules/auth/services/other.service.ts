import { Injectable } from "@nestjs/common";
import { Request } from 'express';

@Injectable()
export class OtherService {
	getUserIP(request: Request): string {
		const xForwardedFor = request.headers['x-forwarded-for'];
		if (xForwardedFor) {
			return Array.isArray(xForwardedFor)
				? xForwardedFor[0]
				: xForwardedFor.split(',')[0];
		}
		return request.ip || request.connection.remoteAddress || 'Unknown';
	}

	getUserDevice(request: Request): string {
		const useragent = (request as any).useragent;
		if (!useragent) return 'Unknown';

		const browser = useragent.browser || 'Unknown Browser';
		const version = useragent.version || '';
		const os = useragent.os || 'Unknown OS';
		const platform = useragent.platform || 'Unknown Platform';

		return `${browser} ${version} on ${os} (${platform})`;
	}

	getDeviceInfo(request: Request) {
		const useragent = (request as any).useragent;
		return {
			ip: this.getUserIP(request),
			device: this.getUserDevice(request),
			isMobile: useragent?.isMobile || false,
			isTablet: useragent?.isTablet || false,
			isDesktop: useragent?.isDesktop || false,
			browser: useragent?.browser || 'Unknown',
			os: useragent?.os || 'Unknown',
			platform: useragent?.platform || 'Unknown',
		};
	}
}