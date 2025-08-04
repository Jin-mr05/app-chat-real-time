"use client"

import { config } from "./config"
import type { Chat, User } from "@/types/chat"
import { Gender } from "@/types/chat" // Import Gender enum

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
        credentials: 'include', // Thêm dòng này để gửi cookies
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
        {
          id: "user1",
          name: "Nguyễn Văn A",
          email: "nguyenvana@email.com",
          isOnline: true,
          birthday: "1990-01-15",
          gender: Gender.MALE,
        },
        {
          id: "user2",
          name: "Trần Thị B",
          email: "tranthib@email.com",
          isOnline: false,
          birthday: "1992-05-20",
          gender: Gender.FEMALE,
        },
        {
          id: "user3",
          name: "Lê Văn C",
          email: "levanc@email.com",
          isOnline: true,
          birthday: "1988-11-01",
          gender: Gender.MALE,
        },
        {
          id: "user4",
          name: "Phạm Thị D",
          email: "phamthid@email.com",
          isOnline: false,
          birthday: "1995-03-10",
          gender: Gender.FEMALE,
        },
        {
          id: "user5",
          name: "Hoàng Văn E",
          email: "hoangvane@email.com",
          isOnline: true,
          birthday: "1991-07-22",
          gender: Gender.MALE,
        },
        {
          id: "user6",
          name: "Vũ Thị F",
          email: "vuthif@email.com",
          isOnline: true,
          birthday: "1993-09-05",
          gender: Gender.FEMALE,
        },
        {
          id: "user7",
          name: "Đặng Văn G",
          email: "dangvang@email.com",
          isOnline: false,
          birthday: "1987-02-28",
          gender: Gender.OTHER,
        },
      ]

      // Filter users based on query
      const filtered = mockUsers.filter(
        (user) =>
          user.name.toLowerCase().includes(query.toLowerCase()) ||
          user.email?.toLowerCase().includes(query.toLowerCase()),
      )
      console.log("Mock: Search users results for query", query, ":", filtered) // Log mock results
      return filtered
    }

    try {
      const response = await this.fetchWithTimeout(
        `${config.API_BASE_URL}/user/search?q=${encodeURIComponent(query)}`, // Sử dụng /user/search
        {
          headers: this.getAuthHeaders(),
        },
      )

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.error("Error searching users:", response.status, errorData) // Log API error
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log("API: Search users results for query", query, ":", data) // Log API results
      
      // Sửa lỗi: Trích xuất mảng users từ response object
      return data.users || []
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
        birthday: "2000-01-01",
        gender: Gender.OTHER,
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
      console.log("Mock: Created individual chat", newChat)
      return newChat
    }

    try {
      const response = await this.fetchWithTimeout(`${config.API_BASE_URL}/chat/create-individual`, {
        method: "POST",
        headers: this.getAuthHeaders(),
        body: JSON.stringify({ userId }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.error("Error creating individual chat:", response.status, errorData)
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log("API: Created individual chat", data)
      return data
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
          id: `mock-user-${id}`, // Ensure unique mock IDs
          name: `User ${index + 1} (${id})`,
          email: `user${index + 1}@email.com`,
          isOnline: Math.random() > 0.5,
          birthday: "2000-01-01",
          gender: Gender.OTHER,
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
      console.log("Mock: Created group chat", newChat)
      return newChat
    }

    try {
      const response = await this.fetchWithTimeout(`${config.API_BASE_URL}/chat/create-group`, {
        method: "POST",
        headers: this.getAuthHeaders(),
        body: JSON.stringify({ name, userIds }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.error("Error creating group chat:", response.status, errorData)
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log("API: Created group chat", data)
      return data
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
        const errorData = await response.json().catch(() => ({}))
        console.error("Error loading messages:", response.status, errorData)
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log("API: Loaded messages", data)
      return data
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
        const errorData = await response.json().catch(() => ({}))
        console.error("Error editing message:", response.status, errorData)
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log("API: Edited message", data)
      return data
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
        const errorData = await response.json().catch(() => ({}))
        console.error("Error deleting message:", response.status, errorData)
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log("API: Deleted message", data)
      return data
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
        birthday: "2000-01-01",
        gender: Gender.OTHER,
      }
      const mockToken = "mock-jwt-token-" + Date.now()

      localStorage.setItem("token", mockToken)
      localStorage.setItem("user", JSON.stringify(mockUser))
      console.log("Mock: Login successful", mockUser)
      return { user: mockUser, token: mockToken, success: true }
    }

    try {
      const response = await this.fetchWithTimeout(`${config.API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      // Không lưu token vào localStorage nữa vì backend dùng cookies
      console.log("API: Login successful", data)
      return data
    } catch (error: any) {
      console.error("Error logging in:", error)
      throw new Error(error.message || "Đăng nhập thất bại")
    }
  }

  // Cập nhật hàm register để phản ánh luồng xác thực email
  async register(userData: { name: string; email: string; password: string }): Promise<{
    success: boolean
    message?: string
    user?: User
    token?: string
  }> {
    if (!config.USE_REAL_BACKEND) {
      console.log("Mock: Register request - simulating email verification")
      // Không lưu token/user vào localStorage ngay lập tức
      // Trả về thông báo thành công và yêu cầu kiểm tra email
      return { success: true, message: "Đăng ký thành công! Vui lòng kiểm tra email để xác thực tài khoản." }
    }

    try {
      const response = await this.fetchWithTimeout(`${config.API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.error("Error registering:", response.status, errorData)
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      // Nếu backend thật tự động đăng nhập sau đăng ký, lưu token/user
      if (data.token) {
        localStorage.setItem("token", data.token)
        localStorage.setItem("user", JSON.stringify(data.user))
      }
      console.log("API: Register successful", data)
      return data
    } catch (error: any) {
      console.error("Error registering:", error)
      throw new Error(error.message || "Đăng ký thất bại")
    }
  }

  async updateProfile(userData: { name?: string; birthday?: string; gender?: Gender }): Promise<User> {
    if (!config.USE_REAL_BACKEND) {
      const currentUser = JSON.parse(localStorage.getItem("user") || "{}")
      const updatedUser = { ...currentUser, ...userData }
      localStorage.setItem("user", JSON.stringify(updatedUser))
      console.log("Mock: Updated profile", updatedUser)
      return updatedUser
    }

    try {
      const response = await this.fetchWithTimeout(`${config.API_BASE_URL}/user/profile`, {
        method: "PUT",
        headers: this.getAuthHeaders(),
        body: JSON.stringify(userData),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.error("Error updating profile:", response.status, errorData)
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      localStorage.setItem("user", JSON.stringify(data.user))
      console.log("API: Updated profile", data)
      return data.user
    } catch (error: any) {
      console.error("Error updating profile:", error)
      throw new Error(error.message || "Cập nhật thông tin thất bại")
    }
  }

  async changePassword(oldPassword: string, newPassword: string): Promise<{ success: boolean; message?: string }> {
    if (!config.USE_REAL_BACKEND) {
      console.log("Mock: Change password request", { oldPassword, newPassword })
      // For demo purposes, always succeed if new password is valid
      if (newPassword.length >= 6 && oldPassword !== newPassword) {
        return { success: true, message: "Mật khẩu đã được đổi thành công (mock)." }
      } else if (newPassword.length < 6) {
        return { success: false, message: "Mật khẩu mới phải có ít nhất 6 ký tự (mock)." }
      } else if (oldPassword === newPassword) {
        return { success: false, message: "Mật khẩu mới không được trùng với mật khẩu cũ (mock)." }
      } else {
        // Fallback for other cases, e.g., old password incorrect
        return { success: false, message: "Mật khẩu cũ không đúng hoặc lỗi không xác định (mock)." }
      }
    }

    try {
      const response = await this.fetchWithTimeout(`${config.API_BASE_URL}/auth/change-password`, {
        method: "POST",
        headers: this.getAuthHeaders(),
        body: JSON.stringify({ oldPassword, newPassword }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.error("Error changing password:", response.status, errorData)
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      console.log("API: Changed password", data)
      return data
    } catch (error: any) {
      console.error("Error changing password:", error)
      throw new Error(error.message || "Đổi mật khẩu thất bại")
    }
  }

  private getMockData() {
    const currentUser: User = JSON.parse(
      localStorage.getItem("user") ||
        '{"id":"current","name":"Demo User","isOnline":true, "birthday": "2000-01-01", "gender": "OTHER"}',
    )

    const mockChats: Chat[] = [
      {
        id: "1",
        type: "individual",
        name: "Nguyễn Văn A",
        participants: [
          { id: "user1", name: "Nguyễn Văn A", isOnline: true, birthday: "1990-01-15", gender: Gender.MALE },
          currentUser,
        ],
        messages: [
          {
            id: "1",
            senderId: "user1",
            content: "Chào bạn! Đây là tin nhắn demo từ Nguyễn Văn A.",
            timestamp: new Date(Date.now() - 3600000),
            type: "text",
            isRead: true,
            chatId: "1",
          },
          {
            id: "2",
            senderId: currentUser.id,
            content: "Chào! App đang chạy ở chế độ demo.",
            timestamp: new Date(Date.now() - 3500000),
            type: "text",
            isRead: true,
            chatId: "1",
          },
          {
            id: "3",
            senderId: "user1",
            content: "Bạn có thể test gửi tin nhắn nhé!",
            timestamp: new Date(Date.now() - 1800000),
            type: "text",
            isRead: false,
            chatId: "1",
          },
        ],
        unreadCount: 1,
        isOnline: true,
      },
      {
        id: "2",
        type: "group",
        name: "Nhóm Demo",
        participants: [
          { id: "user2", name: "Trần Thị B", isOnline: false, birthday: "1992-05-20", gender: Gender.FEMALE },
          { id: "user3", name: "Lê Văn C", isOnline: true, birthday: "1988-11-01", gender: Gender.MALE },
          currentUser,
        ],
        messages: [
          {
            id: "4",
            senderId: "user2",
            content: "Đây là nhóm chat demo.",
            timestamp: new Date(Date.now() - 7200000),
            type: "text",
            isRead: true,
            chatId: "2",
          },
          {
            id: "5",
            senderId: "user3",
            content: "Kết nối backend để sử dụng thực tế.",
            timestamp: new Date(Date.now() - 7000000),
            type: "text",
            isRead: true,
            chatId: "2",
          },
        ],
        unreadCount: 0,
      },
    ]

    return { chats: mockChats, user: currentUser }
  }
}

export default new ApiService()
