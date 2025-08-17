export const USER_CONSTANTS = {
	// Cache keys
	CACHE_KEYS: {
		KeyUserWithId: (mainKey: string) => `account:${mainKey}`,
		KeyUserWithName: (mainKey: string) => `account-name:${mainKey}`,
		KeyListUser: (mainKey: string) => `list-user:${mainKey}`
	},

	// Cache expiration times
	MAX_AGE_CACHE_TEMPORARY: 60 * 1000, // 60 seconds
	MAX_AGE_CACHE: 60 * 60 * 1000, // 1 hour
}