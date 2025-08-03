"use client"

import { useState } from "react"
import { useChat } from "@/contexts/chat-context"
import { ConnectionStatus } from "@/components/connection-status"
import { UserSearch } from "@/components/chat/user-search"
import { GroupCreator } from "@/components/chat/group-creator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, Users } from "lucide-react"
import type { Chat } from "@/types/chat"

export function ChatSidebar() {
  const { chats, activeChat, setActiveChat } = useChat()
  const [searchQuery, setSearchQuery] = useState("")

  const filteredChats = chats.filter((chat) => chat.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const formatTime = (date: Date) => {
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (minutes < 1) return "Vừa xong"
    if (minutes < 60) return `${minutes}p`
    if (hours < 24) return `${hours}h`
    return `${days}d`
  }

  const getLastMessagePreview = (chat: Chat) => {
    if (!chat.lastMessage && chat.messages.length > 0) {
      const lastMsg = chat.messages[chat.messages.length - 1]
      return lastMsg.content.length > 30 ? lastMsg.content.substring(0, 30) + "..." : lastMsg.content
    }
    if (chat.lastMessage) {
      return chat.lastMessage.content.length > 30
        ? chat.lastMessage.content.substring(0, 30) + "..."
        : chat.lastMessage.content
    }
    return "Chưa có tin nhắn"
  }

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Đoạn chat</h1>
          <div className="flex items-center gap-2">
            <ConnectionStatus />
            <UserSearch />
            <GroupCreator />
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Tìm kiếm trong Messenger"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 rounded-full bg-gray-100 border-0"
          />
        </div>
      </div>

      {/* Chat List */}
      <ScrollArea className="flex-1">
        <div className="p-2">
          {filteredChats.length === 0 && !searchQuery && (
            <div className="text-center py-8 text-gray-500">
              <Users className="h-12 w-12 mx-auto mb-2 text-gray-300" />
              <p className="mb-2">Chưa có cuộc trò chuyện nào</p>
              <p className="text-sm text-gray-400">Tìm bạn bè để bắt đầu chat hoặc tạo nhóm mới</p>
            </div>
          )}

          {filteredChats.length === 0 && searchQuery && (
            <div className="text-center py-8 text-gray-500">
              <Search className="h-12 w-12 mx-auto mb-2 text-gray-300" />
              <p>Không tìm thấy cuộc trò chuyện nào</p>
            </div>
          )}

          {filteredChats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setActiveChat(chat)}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors ${
                activeChat?.id === chat.id ? "bg-blue-50" : ""
              }`}
            >
              <div className="relative">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className={`${chat.type === "group" ? "bg-purple-100" : "bg-blue-100"}`}>
                    {chat.type === "group" ? (
                      <Users className="h-6 w-6 text-purple-600" />
                    ) : (
                      <span className="text-blue-600 font-semibold">{chat.name.charAt(0).toUpperCase()}</span>
                    )}
                  </AvatarFallback>
                </Avatar>
                {chat.type === "individual" && chat.isOnline && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 truncate">{chat.name}</h3>
                  <div className="flex items-center gap-1">
                    {chat.lastMessage && (
                      <span className="text-xs text-gray-500">{formatTime(chat.lastMessage.timestamp)}</span>
                    )}
                    {chat.unreadCount > 0 && (
                      <Badge className="bg-blue-600 text-white text-xs min-w-[20px] h-5 rounded-full flex items-center justify-center">
                        {chat.unreadCount}
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600 truncate">{getLastMessagePreview(chat)}</p>
                  {chat.type === "group" && (
                    <Badge variant="secondary" className="text-xs ml-2">
                      {chat.participants.length} người
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
