"use client"

import { useEffect, useRef } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreVertical, Edit, Trash2 } from "lucide-react"
import type { Message } from "@/types/chat"

interface MessageListProps {
  messages: Message[]
  activeChat: any
  currentUser: any
  editingMessageId: string | null
  editingContent: string
  setEditingMessageId: (id: string | null) => void
  setEditingContent: (content: string) => void
  onEditMessage: (messageId: string) => void
  onDeleteMessage: (messageId: string) => void
  onStartEditing: (messageId: string, content: string) => void
}

export function MessageList({
  messages,
  activeChat,
  currentUser,
  editingMessageId,
  editingContent,
  setEditingMessageId,
  setEditingContent,
  onEditMessage,
  onDeleteMessage,
  onStartEditing,
}: MessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll khi có tin nhắn mới
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
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

  return (
    <div className="space-y-4">
      {messages.map((msg, index) => {
        const isCurrentUser = msg.senderId === currentUser?.id
        const showDate = index === 0 || formatDate(msg.timestamp) !== formatDate(messages[index - 1].timestamp)
        const sender = activeChat.participants.find((p: any) => p.id === msg.senderId)

        return (
          <div key={`${msg.id}-${msg.timestamp.getTime()}`}>
            {showDate && (
              <div className="text-center my-4">
                <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                  {formatDate(msg.timestamp)}
                </Badge>
              </div>
            )}

            <div className={`flex gap-2 ${isCurrentUser ? "justify-end" : "justify-start"}`}>
              {!isCurrentUser && activeChat.type === "group" && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-gray-100 text-xs">
                    {sender?.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              )}

              <div className={`max-w-[70%] ${isCurrentUser ? "order-1" : ""}`}>
                {!isCurrentUser && activeChat.type === "group" && (
                  <p className="text-xs text-gray-600 mb-1 px-3">{sender?.name}</p>
                )}

                <div className="relative group">
                  {editingMessageId === msg.id ? (
                    <div className="bg-gray-100 rounded-2xl px-4 py-2">
                      <Input
                        value={editingContent}
                        onChange={(e) => setEditingContent(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            onEditMessage(msg.id)
                          } else if (e.key === "Escape") {
                            setEditingMessageId(null)
                            setEditingContent("")
                          }
                        }}
                        className="border-0 bg-transparent p-0 text-sm"
                        autoFocus
                      />
                      <div className="flex gap-2 mt-2">
                        <Button size="sm" onClick={() => onEditMessage(msg.id)}>
                          Lưu
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => {
                            setEditingMessageId(null)
                            setEditingContent("")
                          }}
                        >
                          Hủy
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`rounded-2xl px-4 py-2 ${isCurrentUser ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                        }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  )}

                  {/* Message Actions */}
                  {isCurrentUser && editingMessageId !== msg.id && (
                    <div className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="sm" variant="ghost" className="h-6 w-6 p-0" title="Tùy chọn tin nhắn">
                            <MoreVertical className="h-3 w-3" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem onClick={() => onStartEditing(msg.id, msg.content)}>
                            <Edit className="h-4 w-4 mr-2" />
                            Chỉnh sửa
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => onDeleteMessage(msg.id)} className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Xóa
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  )}
                </div>

                <p className={`text-xs text-gray-500 mt-1 px-3 ${isCurrentUser ? "text-right" : "text-left"}`}>
                  {formatTime(msg.timestamp)}
                  {msg.id.startsWith("temp-") && <span className="ml-1 text-yellow-500">⏳</span>}
                </p>
              </div>
            </div>
          </div>
        )
      })}
      <div ref={messagesEndRef} />
    </div>
  )
}
