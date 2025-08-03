"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, MessageCircle, Loader2 } from "lucide-react"
import { useChat } from "@/contexts/chat-context"
import ApiService from "@/lib/api"
import type { User } from "@/types/chat"

export function UserSearch() {
  const { createIndividualChat } = useChat()
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<User[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = async () => {
    if (!searchQuery.trim()) return

    setIsSearching(true)
    try {
      const results = await ApiService.searchUsers(searchQuery.trim())
      setSearchResults(results)
    } catch (error) {
      console.error("Error searching users:", error)
      setSearchResults([])
    } finally {
      setIsSearching(false)
    }
  }

  const handleStartChat = async (user: User) => {
    try {
      await createIndividualChat(user)
      setIsOpen(false)
      setSearchQuery("")
      setSearchResults([])
    } catch (error) {
      console.error("Error creating chat:", error)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="ghost" className="rounded-full" title="Tìm người để chat">
          <Search className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Tìm người để chat</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Nhập tên hoặc email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button onClick={handleSearch} disabled={!searchQuery.trim() || isSearching}>
              {isSearching ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
            </Button>
          </div>

          <div className="max-h-60 overflow-y-auto">
            {searchResults.length === 0 && searchQuery && !isSearching && (
              <div className="text-center py-8 text-gray-500">
                <Search className="h-12 w-12 mx-auto mb-2 text-gray-300" />
                <p>Không tìm thấy người dùng nào</p>
              </div>
            )}

            {searchResults.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-blue-100">
                        <span className="text-blue-600 font-semibold">{user.name.charAt(0).toUpperCase()}</span>
                      </AvatarFallback>
                    </Avatar>
                    {user.isOnline && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{user.name}</h3>
                    <p className="text-sm text-gray-500">{user.email}</p>
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
      </DialogContent>
    </Dialog>
  )
}
