"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ArrowLeft, Send, Users, AlertCircle } from "lucide-react"
import { useAuth } from "@/components/auth-provider"

interface Message {
  id: string
  content: string
  senderId: string
  senderName: string
  timestamp: string
}

interface Room {
  id: string
  name: string
  members: string[]
}

interface ConversationUIProps {
  roomId: string
}

export function ConversationUI({ roomId }: ConversationUIProps) {
  const { user } = useAuth()
  const router = useRouter()
  const [room, setRoom] = useState<Room | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    loadRoomData()
  }, [roomId])

  const loadRoomData = async () => {
    try {
      setIsLoading(true)

      // Load room info and messages
      const [roomResponse, messagesResponse] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || process.env.BACKEND_URL}/chat/room/${roomId}`, {
          credentials: "include",
        }),
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || process.env.BACKEND_URL}/chat/room/${roomId}/messages`, {
          credentials: "include",
        }),
      ])

      if (roomResponse.ok) {
        const roomData = await roomResponse.json()
        setRoom(roomData)
      }

      if (messagesResponse.ok) {
        const messagesData = await messagesResponse.json()
        setMessages(messagesData)
      }
    } catch (error) {
      console.error("Failed to load room data:", error)
      setError("Failed to load chat. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const sendMessage = async () => {
    if (!newMessage.trim() || isSending) return

    const messageContent = newMessage.trim()
    if (messageContent.length > 1000) {
      setError("Message is too long (max 1000 characters)")
      return
    }

    setIsSending(true)
    setError("")

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL || process.env.BACKEND_URL}/chat/room/${roomId}/send-message`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            content: messageContent,
          }),
        },
      )

      if (response.ok) {
        const newMsg = await response.json()
        setMessages((prev) => [...prev, newMsg])
        setNewMessage("")
      } else {
        setError("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Failed to send message:", error)
      setError("Failed to send message. Please check your connection.")
    } finally {
      setIsSending(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getOtherParticipant = () => {
    if (!room || !user) return "Chat"
    const otherMember = room.members.find((member) => member !== user.userName)
    return otherMember || room.name
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-lg">Loading conversation...</div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="bg-white border-b px-4 py-3 flex items-center space-x-3">
        <Button variant="ghost" size="sm" onClick={() => router.push("/")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <Avatar className="h-8 w-8">
          <AvatarFallback>{getOtherParticipant()[0]?.toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h2 className="font-semibold">{getOtherParticipant()}</h2>
          <p className="text-sm text-gray-500 flex items-center">
            <Users className="h-3 w-3 mr-1" />
            {room?.members.length || 0} members
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 mt-8">
            <p>No messages yet. Start the conversation!</p>
          </div>
        ) : (
          messages.map((message) => (
            <div key={message.id} className={`flex ${message.senderId === user?.id ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.senderId === user?.id ? "bg-blue-500 text-white" : "bg-white border"
                }`}
              >
                {message.senderId !== user?.id && <p className="text-xs text-gray-500 mb-1">{message.senderName}</p>}
                <p className="break-words">{message.content}</p>
                <p className={`text-xs mt-1 ${message.senderId === user?.id ? "text-blue-100" : "text-gray-500"}`}>
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="bg-white border-t p-4">
        {error && (
          <div className="flex items-center space-x-1 text-red-600 text-sm mb-2">
            <AlertCircle className="h-4 w-4" />
            <span>{error}</span>
          </div>
        )}
        <div className="flex space-x-2">
          <Input
            placeholder="Type a message... (max 1000 chars)"
            value={newMessage}
            onChange={(e) => {
              setNewMessage(e.target.value)
              if (error) setError("")
            }}
            onKeyPress={handleKeyPress}
            className="flex-1"
            maxLength={1000}
          />
          <Button onClick={sendMessage} disabled={isSending || !newMessage.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-1">{newMessage.length}/1000 characters</p>
      </div>
    </div>
  )
}
