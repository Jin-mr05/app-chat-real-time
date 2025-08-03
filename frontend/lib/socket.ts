"use client"

import { io, type Socket } from "socket.io-client"
import { config } from "./config"

class SocketService {
  private socket: Socket | null = null
  private static instance: SocketService
  private retryCount = 0
  private maxRetries = config.MAX_RETRIES

  static getInstance(): SocketService {
    if (!SocketService.instance) {
      SocketService.instance = new SocketService()
    }
    return SocketService.instance
  }

  connect(token?: string): Socket | null {
    // Nếu không dùng real backend, return null
    if (!config.USE_REAL_BACKEND) {
      console.log("Using mock mode - WebSocket disabled")
      return null
    }

    if (!this.socket) {
      try {
        this.socket = io(config.SOCKET_URL, {
          auth: {
            token: token || localStorage.getItem("token"),
          },
          transports: ["websocket", "polling"],
          timeout: 5000,
          reconnection: true,
          reconnectionAttempts: this.maxRetries,
          reconnectionDelay: config.RETRY_DELAY,
        })

        this.socket.on("connect", () => {
          console.log("✅ Connected to server")
          this.retryCount = 0
        })

        this.socket.on("disconnect", (reason) => {
          console.log("❌ Disconnected from server:", reason)
        })

        this.socket.on("connect_error", (error) => {
          console.error("🔴 Connection error:", error.message)
          this.retryCount++

          if (this.retryCount >= this.maxRetries) {
            console.log("Max retries reached, switching to offline mode")
            this.disconnect()
          }
        })

        this.socket.on("reconnect", (attemptNumber) => {
          console.log(`🔄 Reconnected after ${attemptNumber} attempts`)
        })

        this.socket.on("reconnect_error", (error) => {
          console.error("🔴 Reconnection failed:", error.message)
        })
      } catch (error) {
        console.error("Failed to create socket connection:", error)
        return null
      }
    }

    return this.socket
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect()
      this.socket = null
    }
    this.retryCount = 0
  }

  getSocket(): Socket | null {
    return this.socket
  }

  isConnected(): boolean {
    return this.socket?.connected || false
  }
}

export default SocketService
