"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useChat } from "@/contexts/chat-context"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Phone, Video, Info, Users, Smile } from "lucide-react"
import { config } from "@/lib/config"
// Import MessageList component
import { MessageList } from "@/components/message-list"

export function ChatWindow() {
  const { activeChat, currentUser, sendMessage, editMessage, deleteMessage, isConnected, connectionStatus } = useChat()
  const [message, setMessage] = useState("")
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null)
  const [editingContent, setEditingContent] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [activeChat?.messages])

  // Thêm useEffect này để auto-scroll khi có tin nhắn mới
  useEffect(() => {
    if (activeChat?.messages) {
      scrollToBottom()
    }
  }, [activeChat?.messages, activeChat?.messages?.length])

  // Cải thiện function handleSendMessage
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim() && activeChat && (isConnected || !config.USE_REAL_BACKEND)) {
      console.log("📤 Sending message:", message.trim())
      sendMessage(activeChat.id, message.trim())
      setMessage("")

      // Force scroll to bottom after sending
      setTimeout(() => {
        scrollToBottom()
      }, 100)
    }
  }

  const handleEditMessage = async (messageId: string) => {
    if (editingContent.trim()) {
      await editMessage(messageId, editingContent.trim())
      setEditingMessageId(null)
      setEditingContent("")
    }
  }

  const handleDeleteMessage = async (messageId: string) => {
    await deleteMessage(messageId)
  }

  const startEditing = (messageId: string, content: string) => {
    setEditingMessageId(messageId)
    setEditingContent(content)
  }

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  const formatDate = (date: Date) => {
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    if (date.toDateString() === today.toDateString()) {
      return "Hôm nay"
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Hôm qua"
    } else {
      return new Intl.DateTimeFormat("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }).format(date)
    }
  }

  const canSendMessage = () => {
    if (!config.USE_REAL_BACKEND) return true // Mock mode always allows sending
    return isConnected
  }

  const getPlaceholderText = () => {
    if (!config.USE_REAL_BACKEND) return "Nhập tin nhắn... (Demo mode)"
    if (!isConnected) return "Mất kết nối..."
    return "Nhập tin nhắn..."
  }

  if (!activeChat) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="h-10 w-10 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Chọn một cuộc trò chuyện</h3>
          <p className="text-gray-600">Chọn từ danh sách bên trái để bắt đầu nhắn tin</p>

          {connectionStatus === "mock" && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg text-blue-700 text-sm">
              <p className="font-medium">🚀 Chế độ Demo</p>
              <p>Đổi USE_REAL_BACKEND = true trong config.ts để kết nối backend thật</p>
            </div>
          )}

          {connectionStatus === "disconnected" && config.USE_REAL_BACKEND && (
            <div className="mt-4 p-3 bg-red-50 rounded-lg text-red-700 text-sm">
              <p className="font-medium">❌ Mất kết nối</p>
              <p>Kiểm tra backend có đang chạy tại localhost:3000</p>
            </div>
          )}
        </div>
      </div>
    )
  }

  const otherParticipants = activeChat.participants.filter((p) => p.id !== currentUser?.id)

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarFallback className={`${activeChat.type === "group" ? "bg-purple-100" : "bg-blue-100"}`}>
              {activeChat.type === "group" ? (
                <Users className="h-5 w-5 text-purple-600" />
              ) : (
                <span className="text-blue-600 font-semibold">{activeChat.name.charAt(0).toUpperCase()}</span>
              )}
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold text-gray-900">{activeChat.name}</h2>
            {activeChat.type === "individual" ? (
              <p className="text-sm text-gray-600">
                {activeChat.isOnline ? (
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Đang hoạt động
                  </span>
                ) : (
                  "Không hoạt động"
                )}
              </p>
            ) : (
              <p className="text-sm text-gray-600">{otherParticipants.length + 1} thành viên</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button size="sm" variant="ghost" className="rounded-full" title="Gọi thoại">
            <Phone className="h-5 w-5 text-blue-600" />
          </Button>
          <Button size="sm" variant="ghost" className="rounded-full" title="Gọi video">
            <Video className="h-5 w-5 text-blue-600" />
          </Button>
          <Button size="sm" variant="ghost" className="rounded-full" title="Thông tin">
            <Info className="h-5 w-5 text-blue-600" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <MessageList
          messages={activeChat.messages}
          activeChat={activeChat}
          currentUser={currentUser}
          editingMessageId={editingMessageId}
          editingContent={editingContent}
          setEditingMessageId={setEditingMessageId}
          setEditingContent={setEditingContent}
          onEditMessage={handleEditMessage}
          onDeleteMessage={handleDeleteMessage}
          onStartEditing={startEditing}
        />
      </ScrollArea>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          <Button type="button" size="sm" variant="ghost" className="rounded-full" title="Chọn emoji">
            <Smile className="h-5 w-5 text-blue-600" />
          </Button>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={getPlaceholderText()}
            disabled={!canSendMessage()}
            className="flex-1 rounded-full border-gray-300 focus:border-blue-500"
          />
          <Button
            type="submit"
            size="sm"
            disabled={!message.trim() || !canSendMessage()}
            className="rounded-full bg-blue-600 hover:bg-blue-700"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>

        {connectionStatus === "mock" && (
          <p className="text-xs text-blue-600 mt-2 text-center">💡 Chế độ demo - Tin nhắn sẽ được echo lại</p>
        )}

        {!canSendMessage() && config.USE_REAL_BACKEND && (
          <p className="text-xs text-red-600 mt-2 text-center">❌ Đang kết nối lại với server...</p>
        )}
      </div>
    </div>
  )
}
