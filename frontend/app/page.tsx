"use client"

import { ChatProvider } from "@/contexts/chat-context"
import { AuthGuard } from "@/components/auth/auth-guard"
import { ChatSidebar } from "@/components/chat-sidebar"
import { ChatWindow } from "@/components/chat-window"
import { ChatHeader } from "@/components/chat-header"

export default function FacebookChatApp() {
  return (
    <AuthGuard>
      <ChatProvider>
        <div className="h-screen flex flex-col bg-gray-50">
          <ChatHeader />
          <div className="flex-1 flex">
            <ChatSidebar />
            <ChatWindow />
          </div>
        </div>
      </ChatProvider>
    </AuthGuard>
  )
}
