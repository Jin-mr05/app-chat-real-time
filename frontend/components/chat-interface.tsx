"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/components/auth-provider"
import { UserSearch } from "@/components/user-search"
import { Plus, LogOut, MessageCircle } from "lucide-react"
import { useRouter } from "next/navigation"

interface Room {
  id: string
  name: string
  members: string[]
  lastMessage?: string
  lastMessageTime?: string
}

export function ChatInterface() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [rooms, setRooms] = useState<Room[]>([])
  const [showUserSearch, setShowUserSearch] = useState(false)

  useEffect(() => {
    // Load user's rooms on component mount
    loadRooms()
  }, [])

  const loadRooms = async () => {
    try {
      // Fix the URL construction
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'
      console.log('Making request to:', `${backendUrl}/user/chat/user-rooms`)
      
      const response = await fetch(
        `${backendUrl}/user/chat/user-rooms`,
        {
          credentials: "include",
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      console.log('Response status:', response.status)
      console.log('Response headers:', response.headers)

      if (response.ok) {
        // Check if response has content
        const contentLength = response.headers.get('content-length')
        const contentType = response.headers.get('content-type')
        
        console.log('Content-Length:', contentLength)
        console.log('Content-Type:', contentType)

        // If no content, return empty array
        if (contentLength === '0' || !contentType?.includes('application/json')) {
          console.log('Empty or non-JSON response, setting empty rooms')
          setRooms([])
          return
        }

        // Get response text first to check if it's valid JSON
        const responseText = await response.text()
        console.log('Response text:', responseText)

        if (!responseText.trim()) {
          console.log('Empty response body, setting empty rooms')
          setRooms([])
          return
        }

        try {
          const roomsData = JSON.parse(responseText)
          console.log('Parsed rooms data:', roomsData)
          setRooms(Array.isArray(roomsData) ? roomsData : [])
        } catch (parseError) {
          console.error('JSON parse error:', parseError)
          console.error('Response text that failed to parse:', responseText)
          setRooms([])
        }
      } else {
        console.error('Failed to fetch rooms:', response.status, response.statusText)
        const errorText = await response.text()
        console.error('Error response:', errorText)
        // Fallback to empty array if API fails
        setRooms([])
      }
    } catch (error) {
      console.error("Failed to load rooms:", error)
      setRooms([])
    }
  }

  const handleRoomClick = (room: Room) => {
    router.push(`/chat/${room.id}`)
  }

  const formatLastMessageTime = (timestamp?: string) => {
    if (!timestamp) return ""
    const date = new Date(timestamp)
    const now = new Date()
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60)

    if (diffInHours < 24) {
      return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    } else {
      return date.toLocaleDateString()
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarFallback>{user?.userName?.[0]?.toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{user?.userName}</p>
                <p className="text-sm text-gray-500">Online</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" onClick={() => setShowUserSearch(true)}>
                <Plus className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={logout}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Room List */}
        <ScrollArea className="flex-1">
          <div className="p-2">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Recent Chats</h3>
            {rooms.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <MessageCircle className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No conversations yet</p>
                <p className="text-xs">Find users to start chatting</p>
              </div>
            ) : (
              rooms.map((room) => (
                <div
                  key={room.id}
                  className="p-3 rounded-lg cursor-pointer mb-1 hover:bg-gray-100 transition-colors"
                  onClick={() => handleRoomClick(room)}
                >
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-medium truncate">{room.name}</p>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="text-xs">
                        {room.members.length}
                      </Badge>
                      {room.lastMessageTime && (
                        <span className="text-xs text-gray-400">{formatLastMessageTime(room.lastMessageTime)}</span>
                      )}
                    </div>
                  </div>
                  {room.lastMessage && <p className="text-sm text-gray-500 truncate">{room.lastMessage}</p>}
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-50">
        <div className="text-center max-w-md">
          <MessageCircle className="h-16 w-16 mx-auto mb-4 text-gray-400" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Welcome to Chat</h3>
          <p className="text-gray-600 mb-6">
            Find users to start conversations. Your recent chats will appear in the sidebar.
          </p>
          <Button onClick={() => setShowUserSearch(true)} className="mb-4">
            <Plus className="h-4 w-4 mr-2" />
            Find Users to Chat
          </Button>
          <div className="text-sm text-gray-500">
            <p>• Search for users by username</p>
            <p>• Automatically create chat rooms</p>
            <p>• Start conversations instantly</p>
          </div>
        </div>
      </div>

      {/* User Search Modal */}
      {showUserSearch && <UserSearch onClose={() => setShowUserSearch(false)} />}
    </div>
  )
}
