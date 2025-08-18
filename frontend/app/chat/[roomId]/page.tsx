"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { ConversationUI } from "@/components/conversation-ui"

interface ChatPageProps {
  params: {
    roomId: string
  }
}

export default function ChatPage({ params }: ChatPageProps) {
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/")
      return
    }
    setIsLoading(false)
  }, [isAuthenticated, router])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading chat...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="h-screen">
      <ConversationUI roomId={params.roomId} />
    </div>
  )
}
