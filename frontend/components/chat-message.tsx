import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bot, User } from "lucide-react"

interface ChatMessageProps {
  message: {
    id: string
    role: "user" | "assistant"
    parts: Array<{ type: string; text: string }>
    createdAt?: Date
  }
}

export function ChatMessage({ message }: ChatMessageProps) {
  const formatTime = (timestamp: Date) => {
    return new Intl.DateTimeFormat("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(timestamp)
  }

  return (
    <div className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
      {message.role === "assistant" && (
        <Avatar className="h-8 w-8 mt-1">
          <AvatarFallback className="bg-blue-100">
            <Bot className="h-4 w-4 text-blue-600" />
          </AvatarFallback>
        </Avatar>
      )}

      <div
        className={`max-w-[70%] rounded-2xl px-4 py-3 ${
          message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
        }`}
      >
        <div className="text-sm">
          {message.parts.map((part, index) =>
            part.type === "text" ? (
              <span key={index} className="whitespace-pre-wrap">
                {part.text}
              </span>
            ) : null,
          )}
        </div>
        <div className={`text-xs mt-2 opacity-70 ${message.role === "user" ? "text-blue-100" : "text-gray-500"}`}>
          {formatTime(message.createdAt || new Date())}
        </div>
      </div>

      {message.role === "user" && (
        <Avatar className="h-8 w-8 mt-1">
          <AvatarFallback className="bg-green-100">
            <User className="h-4 w-4 text-green-600" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  )
}
