"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Users, Plus, Search, Loader2, X } from "lucide-react"
import { useChat } from "@/contexts/chat-context"
import ApiService from "@/lib/api"
import type { User } from "@/types/chat"

export function GroupCreator() {
  const { createGroupChat } = useChat()
  const [isOpen, setIsOpen] = useState(false)
  const [groupName, setGroupName] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<User[]>([])
  const [selectedUsers, setSelectedUsers] = useState<User[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [isCreating, setIsCreating] = useState(false)

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

  const handleUserSelect = (user: User, checked: boolean) => {
    if (checked) {
      setSelectedUsers((prev) => [...prev, user])
    } else {
      setSelectedUsers((prev) => prev.filter((u) => u.id !== user.id))
    }
  }

  const handleRemoveUser = (userId: string) => {
    setSelectedUsers((prev) => prev.filter((u) => u.id !== userId))
  }

  const handleCreateGroup = async () => {
    if (!groupName.trim() || selectedUsers.length === 0) return

    setIsCreating(true)
    try {
      await createGroupChat(groupName.trim(), selectedUsers)
      // Reset form
      setGroupName("")
      setSelectedUsers([])
      setSearchQuery("")
      setSearchResults([])
      setIsOpen(false)
    } catch (error) {
      console.error("Error creating group:", error)
    } finally {
      setIsCreating(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const isFormValid = groupName.trim() && selectedUsers.length > 0

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="ghost" className="rounded-full" title="Tạo nhóm chat">
          <Users className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Tạo nhóm chat mới</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {/* Group Name */}
          <div className="space-y-2">
            <Label htmlFor="groupName">Tên nhóm</Label>
            <Input
              id="groupName"
              placeholder="Nhập tên nhóm..."
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
          </div>

          {/* Selected Users */}
          {selectedUsers.length > 0 && (
            <div className="space-y-2">
              <Label>Thành viên đã chọn ({selectedUsers.length})</Label>
              <div className="flex flex-wrap gap-2 max-h-20 overflow-y-auto">
                {selectedUsers.map((user) => (
                  <Badge key={user.id} variant="secondary" className="flex items-center gap-1">
                    {user.name}
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-4 w-4 p-0 hover:bg-transparent"
                      onClick={() => handleRemoveUser(user.id)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* User Search */}
          <div className="space-y-2">
            <Label>Thêm thành viên</Label>
            <div className="flex gap-2">
              <Input
                placeholder="Tìm người để thêm vào nhóm..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button onClick={handleSearch} disabled={!searchQuery.trim() || isSearching}>
                {isSearching ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Search Results */}
          <div className="max-h-48 overflow-y-auto">
            {searchResults.length === 0 && searchQuery && !isSearching && (
              <div className="text-center py-4 text-gray-500">
                <p className="text-sm">Không tìm thấy người dùng nào</p>
              </div>
            )}

            {searchResults.map((user) => {
              const isSelected = selectedUsers.some((u) => u.id === user.id)
              return (
                <div key={user.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                  <Checkbox
                    checked={isSelected}
                    onCheckedChange={(checked) => handleUserSelect(user, checked as boolean)}
                  />
                  <div className="relative">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-blue-100">
                        <span className="text-blue-600 font-semibold text-sm">{user.name.charAt(0).toUpperCase()}</span>
                      </AvatarFallback>
                    </Avatar>
                    {user.isOnline && (
                      <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                    <p className="text-xs text-gray-500 truncate">{user.email}</p>
                  </div>
                  {user.isOnline ? (
                    <Badge className="bg-green-100 text-green-800 text-xs">Online</Badge>
                  ) : (
                    <Badge variant="secondary" className="text-xs">
                      Offline
                    </Badge>
                  )}
                </div>
              )
            })}
          </div>

          {/* Create Button */}
          <div className="flex justify-end gap-2 pt-4 border-t">
            <Button variant="outline" onClick={() => setIsOpen(false)} disabled={isCreating}>
              Hủy
            </Button>
            <Button onClick={handleCreateGroup} disabled={!isFormValid || isCreating}>
              {isCreating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Đang tạo...
                </>
              ) : (
                <>
                  <Plus className="mr-2 h-4 w-4" />
                  Tạo nhóm
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
