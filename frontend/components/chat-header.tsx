"use client"

import { useChat } from "@/contexts/chat-context"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LogOut, Settings, User } from "lucide-react"
import Link from "next/link" // Import Link from Next.js

export function ChatHeader() {
  const { currentUser, onLogout } = useChat() // Lấy onLogout từ context

  if (!currentUser) return null

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold text-gray-900">ChatApp</h1>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600">Xin chào, {currentUser.name}</span>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-blue-100">
                  <User className="h-4 w-4 text-blue-600" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href="/settings" className="flex items-center">
                <Settings className="h-4 w-4 mr-2" />
                Cài đặt
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onLogout} className="text-red-600">
              <LogOut className="h-4 w-4 mr-2" />
              Đăng xuất
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
