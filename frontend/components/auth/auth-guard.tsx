"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { AuthPage } from "./auth-page"
import { Loader2 } from "lucide-react"
import { ChatProvider } from "@/contexts/chat-context" // Import ChatProvider
import type { User } from "@/types/chat" // Import User type

interface AuthGuardProps {
  children: React.ReactNode
}

export function AuthGuard({ children }: AuthGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  // Loại bỏ state authenticatedUser vì ChatProvider sẽ tự đọc từ localStorage

  useEffect(() => {
    checkAuthStatus()
  }, [])

  const checkAuthStatus = () => {
    try {
      const token = localStorage.getItem("token")
      const userJson = localStorage.getItem("user")

      if (token && userJson) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
      }
    } catch (error) {
      console.error("Error checking auth status:", error)
      setIsAuthenticated(false)
    } finally {
      setIsLoading(false)
    }
  }

  // Hàm này sẽ được gọi khi đăng nhập/đăng ký thành công
  const handleAuthSuccess = (user: User) => {
    // User và token đã được lưu vào localStorage bởi ApiService trong LoginForm/RegisterForm
    setIsAuthenticated(true)
  }

  // Hàm logout để truyền xuống ChatProvider
  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setIsAuthenticated(false)
    window.location.reload() // Tải lại trang để đảm bảo trạng thái được reset hoàn toàn
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Đang kiểm tra trạng thái đăng nhập...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <AuthPage onAuthSuccess={handleAuthSuccess} />
  }

  // Nếu đã xác thực, render ChatProvider và truyền children vào
  return <ChatProvider onLogout={handleLogout}>{children}</ChatProvider>
}
