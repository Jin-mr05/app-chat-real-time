export const AUTH_CONSTANTS = {
	// Token expiration times
	MAX_AGE_SESSION_FILE: 10 * 365 * 24 * 60 * 60 * 1000, // 10 years
	MAX_AGE_REFRESH_TOKEN: 7 * 24 * 60 * 60 * 1000, // 7 days
	MAX_AGE_ACCESS_TOKEN: 60 * 60 * 1000, // 1 hour

	// Cache expiration times
	MAX_AGE_CACHE_TEMPORARY: 60 * 1000, // 60 seconds
	MAX_AGE_CACHE: 60 * 60 * 1000, // 1 hour

	// Cache keys
	CACHE_KEYS: {
		KeyUserWithId: (mainKey: string) => `account:${mainKey}`,
		KeyUserWithEmail: (mainKey: string) => `account-email:${mainKey}`
	},

	// Cookie configuration
	COOKIE_CONFIG: {
		SESSION: {
			httpOnly: true,
			secure: false,
			sameSite: 'lax',
			path: '/',
		}
	}
}
