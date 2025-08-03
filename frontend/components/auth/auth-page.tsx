"use client"

import { useState } from "react"
import { LoginForm } from "./login-form"
import { RegisterForm } from "./register-form"
import { MessageCircle, Users, Zap, Shield } from "lucide-react"

interface AuthPageProps {
  onAuthSuccess: () => void
}

export function AuthPage({ onAuthSuccess }: AuthPageProps) {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 p-12 flex-col justify-center text-white">
        <div className="max-w-md">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-white/20 rounded-xl">
              <MessageCircle className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold">ChatApp</h1>
          </div>

          <h2 className="text-4xl font-bold mb-6 leading-tight">Kết nối và trò chuyện với mọi người</h2>

          <p className="text-xl text-blue-100 mb-12">
            Ứng dụng chat real-time hiện đại với giao diện thân thiện và tính năng đa dạng.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-white/20 rounded-lg">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Chat Real-time</h3>
                <p className="text-blue-100 text-sm">Tin nhắn được gửi và nhận ngay lập tức</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-2 bg-white/20 rounded-lg">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Chat Nhóm</h3>
                <p className="text-blue-100 text-sm">Tạo và quản lý các nhóm chat dễ dàng</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-2 bg-white/20 rounded-lg">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Bảo mật cao</h3>
                <p className="text-blue-100 text-sm">Dữ liệu được mã hóa và bảo vệ an toàn</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Forms */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div className="p-3 bg-blue-100 rounded-xl">
              <MessageCircle className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">ChatApp</h1>
          </div>

          {isLogin ? (
            <LoginForm onSuccess={onAuthSuccess} onSwitchToRegister={() => setIsLogin(false)} />
          ) : (
            <RegisterForm onSuccess={onAuthSuccess} onSwitchToLogin={() => setIsLogin(true)} />
          )}

          {/* Demo Mode Notice */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg text-center">
            <p className="text-sm text-blue-700">
              <strong>🚀 Chế độ Demo:</strong> Bạn có thể sử dụng bất kỳ email/password nào để đăng nhập
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
