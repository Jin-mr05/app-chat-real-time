export const AUTH_CONSTANTS = {
	// Token expiration times
	MAX_AGE_ACCESS_TOKEN: 15 * 60 * 1000, // 15 minutes
	MAX_AGE_REFRESH_TOKEN: 7 * 24 * 60 * 60 * 1000, // 7 days
	MAX_AGE_SESSION_FILE: 30 * 24 * 60 * 60 * 1000, // 30 days

	// Cache expiration times
	MAX_AGE_CACHE_TEMPORARY: 60 * 1000, // 60 seconds
	MAX_AGE_CACHE: 60 * 60, // 1 hour (in seconds)

	// time life session login
	TIME_LIFE_SESSION_LOGIN: 3 * 60 * 1000, // 3 minutes

	// Cookie configuration
	COOKIE_CONFIG: {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'lax' as const,
		path: '/',
	},

	// Rate limiting
	RATE_LIMITS: {
		LOGIN: {
			TTL: 15 * 60, // 15 minutes
			LIMIT: 5, // 5 attempts
		},
		REGISTER: {
			TTL: 60 * 60, // 1 hour
			LIMIT: 3, // 3 attempts
		},
		VERIFY_EMAIL: {
			TTL: 60 * 60, // 1 hour
			LIMIT: 5, // 5 attempts
		},
	},
} as const;
