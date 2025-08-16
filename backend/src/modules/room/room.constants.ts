export const ROOM_CONSTANTS = {
	// Cache keys
	CACHE_KEYS: {
		KeyUserWithERoom: (mainKey: string) => `account-with-room:${mainKey}`,
		KeyUserWithId: (mainKey: string) => `account:${mainKey}`,
		KeyUserWithName: (mainKey: string) => `account-name:${mainKey}`,
		KeyRoom: (mainKey: string) => `room:${mainKey}`
	},

	// Cache expiration times
	MAX_AGE_CACHE_TEMPORARY: 60 * 1000, // 60 seconds
	MAX_AGE_CACHE: 60 * 60 * 1000, // 1 hour
}