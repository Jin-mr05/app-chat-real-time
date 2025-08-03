"use client"

export const config = {
  // Đổi thành true khi backend đã sẵn sàng
  USE_REAL_BACKEND: true,
  API_BASE_URL: "http://localhost:4000",
  SOCKET_URL: "http://localhost:4000",
  // Retry settings
  MAX_RETRIES: 3,
  RETRY_DELAY: 2000,
}
