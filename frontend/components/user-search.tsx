"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, MessageCircle, Loader2, X } from "lucide-react"

interface User {
  id: string
  name: string
  email: string
  isOnline?: boolean
}

interface UserSearchProps {
  onClose: () => void
}

export function UserSearch({ onClose }: UserSearchProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<User[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [searchError, setSearchError] = useState<string | null>(null)

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      setSearchError(null)
      return
    }

    setIsSearching(true)
    setSearchError(null)
    
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'
      // Fix: Use the correct endpoint and parameter name from your backend
      const response = await fetch(`${backendUrl}/user/find-user-by-name?name=${encodeURIComponent(searchQuery.trim())}`, {
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const results = await response.json()
        // Ensure results is always an array
        setSearchResults(Array.isArray(results) ? results : [])
      } else {
        console.error("Search failed:", response.status, response.statusText)
        setSearchResults([])
        setSearchError("Failed to search users. Please try again.")
      }
    } catch (error: any) {
      console.error("UserSearch: Error searching users:", error)
      setSearchResults([])
      setSearchError(error.message || "An error occurred while searching for users.")
    } finally {
      setIsSearching(false)
    }
  }

  const handleStartChat = async (user: User) => {
    try {
      console.log("UserSearch: Starting individual chat with user:", user.name)
      
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'
      // Fix: Your backend doesn't have this endpoint, you need to create a room first
      const response = await fetch(`${backendUrl}/user/create-room?addressId=${user.id}`, {
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const room = await response.json()
        console.log("Chat room created:", room)
        onClose()
        // Navigate to the chat room
        window.location.href = `/chat/${room.id}`
      } else {
        console.error("Failed to create chat:", response.status)
        setSearchError("Failed to create chat. Please try again.")
      }
    } catch (error) {
      console.error("UserSearch: Error creating chat:", error)
      setSearchError("Unable to create conversation. Please try again.")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Find Users to Chat</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Enter name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button onClick={handleSearch} disabled={!searchQuery.trim() || isSearching}>
              {isSearching ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
            </Button>
          </div>

          {searchError && <div className="text-red-500 text-sm text-center">{searchError}</div>}

          <div className="max-h-60 overflow-y-auto">
            {isSearching && searchQuery && (
              <div className="text-center py-8 text-gray-500">
                <Loader2 className="h-8 w-8 mx-auto mb-2 animate-spin text-blue-600" />
                <p>Searching...</p>
              </div>
            )}

            {searchResults.length === 0 && searchQuery && !isSearching && !searchError && (
              <div className="text-center py-8 text-gray-500">
                <Search className="h-12 w-12 mx-auto mb-2 text-gray-300" />
                <p>No users found</p>
              </div>
            )}

            {Array.isArray(searchResults) && searchResults.length > 0 && searchResults.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-blue-100">
                        <span className="text-blue-600 font-semibold">
                          {user.name?.charAt(0)?.toUpperCase() || 'U'}
                        </span>
                      </AvatarFallback>
                    </Avatar>
                    {user.isOnline && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{user.name || 'Unknown User'}</h3>
                    <p className="text-sm text-gray-500">{user.email || ''}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {user.isOnline ? (
                    <Badge className="bg-green-100 text-green-800 text-xs">Online</Badge>
                  ) : (
                    <Badge variant="secondary" className="text-xs">
                      Offline
                    </Badge>
                  )}
                  <Button size="sm" onClick={() => handleStartChat(user)}>
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Chat
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
