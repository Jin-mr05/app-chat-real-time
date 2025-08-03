"use client"

import { config } from "./config"
import type { Chat, User } from "@/types/chat"

class ApiService {
  private getAuthHeaders() {
    const token = localStorage.getItem("token")
    return {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    }
  }

  private async fetchWithTimeout(url: string, options: RequestInit = {}, timeout = 5000) {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeout)

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      })
      clearTimeout(timeoutId)
      return response
    } catch (error) {
      clearTimeout(timeoutId)
      throw error
    }
  }

  async searchUsers(query: string): Promise<User[]> {
    if (!config.USE_REAL_BACKEND) {
      // Mock search users
      const mockUsers: User[] = [
        { id: "user1", name: "Nguyễn Văn A", email: "nguyenvana@email.com", isOnline: true },
        { id: "user2", name: "Trần Thị B", email: "tranthib@email.com", isOnline: false },
        { id: "user3", name: "Lê Văn C", email: "levanc@email.com", isOnline: true },
        { id: "user4", name: "Phạm Thị D", email: "phamthid@email.com", isOnline: false },
        { id: "user5", name: "Hoàng Văn E", email: "hoangvane@email.com", isOnline: true },
        { id: "user6", name: "Vũ Thị F", email: "vuthif@email.com", isOnline: true },
        { id: "user7", name: "Đặng Văn G", email: "dangvang@email.com", isOnline: false },
      ]

      // Filter users based on query
      return mockUsers.filter(
        (user) =>
          user.name.toLowerCase().includes(query.toLowerCase()) ||
          user.email.toLowerCase().includes(query.toLowerCase()),
      )
    }

    try {
      const response = await this.fetchWithTimeout(
        `${config.API_BASE_URL}/user/search?q=${encodeURIComponent(query)}`,
        {
          headers: this.getAuthHeaders(),
        },
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error searching users:", error)
      throw error
    }
  }

  async createIndividualChat(userId: string): Promise<Chat> {
    if (!config.USE_REAL_BACKEND) {
      // Mock create individual chat
      const mockUser: User = {
        id: userId,
        name: "Mock User",
        email: "mock@email.com",
        isOnline: true,
      }

      const currentUser = JSON.parse(localStorage.getItem("user") || "{}")

      const newChat: Chat = {
        id: `chat-${Date.now()}`,
        type: "individual",
        name: mockUser.name,
        participants: [mockUser, currentUser],
        messages: [],
        unreadCount: 0,
        isOnline: mockUser.isOnline,
      }

      return newChat
    }

    try {
      const response = await this.fetchWithTimeout(`${config.API_BASE_URL}/chat/create-individual`, {
        method: "POST",
        headers: this.getAuthHeaders(),
        body: JSON.stringify({ userId }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error creating individual chat:", error)
      throw error
    }
  }

  async createGroupChat(name: string, userIds: string[]): Promise<Chat> {
    if (!config.USE_REAL_BACKEND) {
      // Mock create group chat
      const currentUser = JSON.parse(localStorage.getItem("user") || "{}")
      const mockParticipants: User[] = [
        currentUser,
        ...userIds.map((id, index) => ({
          id,
          name: `User ${index + 1}`,
          email: `user${index + 1}@email.com`,
          isOnline: Math.random() > 0.5,
        })),
      ]

      const newChat: Chat = {
        id: `group-${Date.now()}`,
        type: "group",
        name,
        participants: mockParticipants,
        messages: [],
        unreadCount: 0,
      }

      return newChat
    }

    try {
      const response = await this.fetchWithTimeout(`${config.API_BASE_URL}/chat/create-group`, {
        method: "POST",
        headers: this.getAuthHeaders(),
        body: JSON.stringify({ name, userIds }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error creating group chat:", error)
      throw error
    }
  }

  async loadMessages(chatId?: string) {
    if (!config.USE_REAL_BACKEND) {
      // Return mock data
      return this.getMockData()
    }

    try {
      const url = chatId
        ? `${config.API_BASE_URL}/user/loading-message?chatId=${chatId}`
        : `${config.API_BASE_URL}/user/loading-message`

      const response = await this.fetchWithTimeout(url, {
        headers: this.getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error loading messages:", error)
      // Fallback to mock data
      console.log("🔄 Falling back to mock data")
      return this.getMockData()
    }
  }

  async editMessage(messageId: string, content: string) {
    if (!config.USE_REAL_BACKEND) {
      console.log("Mock: Edit message", messageId, content)
      return { success: true }
    }

    try {
      const response = await this.fetchWithTimeout(`${config.API_BASE_URL}/user/edit-message`, {
        method: "POST",
        headers: this.getAuthHeaders(),
        body: JSON.stringify({ messageId, content }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error editing message:", error)
      throw error
    }
  }

  async deleteMessage(messageId: string) {
    if (!config.USE_REAL_BACKEND) {
      console.log("Mock: Delete message", messageId)
      return { success: true }
    }

    try {
      const response = await this.fetchWithTimeout(`${config.API_BASE_URL}/user/delete-message`, {
        method: "DELETE",
        headers: this.getAuthHeaders(),
        body: JSON.stringify({ messageId }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error deleting message:", error)
      throw error
    }
  }

  async login(email: string, password: string) {
    if (!config.USE_REAL_BACKEND) {
      // Mock login - always successful
      const mockUser = {
        id: "current",
        name: email.split("@")[0] || "Demo User",
        email,
        isOnline: true,
      }
      const mockToken = "mock-jwt-token-" + Date.now()

      localStorage.setItem("token", mockToken)
      localStorage.setItem("user", JSON.stringify(mockUser))

      return { user: mockUser, token: mockToken, success: true }
    }

    try {
      const response = await this.fetchWithTimeout(`${config.API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: 'include' // Quan trọng: cho phép nhận cookies
      })
  
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}))
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
        }
  
        const data = await response.json()
        
        // Cập nhật để xử lý cả token từ response và cookies
        if (data.token) {
            localStorage.setItem("token", data.token)
            localStorage.setItem("user", JSON.stringify(data.user))
        }
        
        return { user: data.user, token: data.token, success: true }
    } catch (error: any) {
      console.error("Error logging in:", error)
      throw new Error(error.message || "Đăng nhập thất bại")
    }
  }

  async register(userData: { name: string; email: string; password: string }) {
    if (!config.USE_REAL_BACKEND) {
      // Mock register - always successful
      const mockUser = {
        id: "user-" + Date.now(),
        name: userData.name,
        email: userData.email,
        isOnline: true,
      }
      const mockToken = "mock-jwt-token-" + Date.now()

      localStorage.setItem("token", mockToken)
      localStorage.setItem("user", JSON.stringify(mockUser))

      return { user: mockUser, token: mockToken, success: true }
    }

    try {
      const response = await this.fetchWithTimeout(`${config.API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      if (data.token) {
        localStorage.setItem("token", data.token)
        localStorage.setItem("user", JSON.stringify(data.user))
      }
      return data
    } catch (error: any) {
      console.error("Error registering:", error)
      throw new Error(error.message || "Đăng ký thất bại")
    }
  }

  private getMockData() {
    const currentUser: User = JSON.parse(
      localStorage.getItem("user") || '{"id":"current","name":"Demo User","isOnline":true}',
    )

    const mockChats: Chat[] = []

    return { chats: mockChats, user: currentUser }
  }
}

export default new ApiService()
