export const REDIS_CONSTANTS = {
	ACCOUNTS_LIKE_NAME_KEY: (mainkey: string) => `accountLikeName:${mainkey}`,
	SHOPS_LIKE_NAME_LEY: (mainkey: string) => `shopsLikeName:${mainkey}`,
	TIME_FILE_CACHE: {
		CACHE_LARGE_DATA: 30
	},
	CACHE_USER: (mainkey: string) => `user:${mainkey}`,
	CACHE_MESSAGE_ROOM: (mainkey: string) => `message_room:${mainkey}`,
	NAME_SOCKET_ROOM: (clientId: string, supportId: string) => `${clientId}-${supportId}`,
	CACHE_SKU: (mainkey: string) => `sku:${mainkey}`
}