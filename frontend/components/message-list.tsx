"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface Message {
  id: string
  content: string
  sender: string
  timestamp: string
  roomId: string
}

interface MessageListProps {
  messages: Message[]
  currentUser: string
}

export function MessageList({ messages, currentUser }: MessageListProps) {
  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="space-y-4">
      {messages.map((message) => {
        const isOwnMessage = message.sender === currentUser

        return (
          <div key={message.id} className={`flex ${isOwnMessage ? "justify-end" : "justify-start"}`}>
            <div className={`flex max-w-xs lg:max-w-md ${isOwnMessage ? "flex-row-reverse" : "flex-row"}`}>
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-xs">{message.sender[0]?.toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className={`mx-2 ${isOwnMessage ? "text-right" : "text-left"}`}>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-sm font-medium">{message.sender}</span>
                  <span className="text-xs text-gray-500">{formatTime(message.timestamp)}</span>
                </div>
                <div
                  className={`px-3 py-2 rounded-lg ${
                    isOwnMessage ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-900"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
