"use client"
import { AuthProvider, useAuth } from "@/components/auth-provider"
import { ChatInterface } from "@/components/chat-interface"
import { LoginForm } from "@/components/login-form"
import { TestValidation } from "@/components/test-validation"

function ChatApp() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {user ? (
        <ChatInterface />
      ) : (
        <div>
          <LoginForm />
          <TestValidation />
        </div>
      )}
    </div>
  )
}

export default function Home() {
  return (
    <AuthProvider>
      <ChatApp />
    </AuthProvider>
  )
}
