"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface TypingIndicatorProps {
  users: string[]
}

export function TypingIndicator({ users }: TypingIndicatorProps) {
  if (users.length === 0) return null

  return (
    <div className="flex gap-2 justify-start mb-4">
      <Avatar className="h-8 w-8">
        <AvatarFallback className="bg-gray-100 text-xs">{users[0].charAt(0).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="bg-gray-100 rounded-2xl px-4 py-2">
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
          <span className="text-xs text-gray-500 ml-2">đang gõ...</span>
        </div>
      </div>
    </div>
  )
}
