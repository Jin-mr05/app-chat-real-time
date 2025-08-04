"use client"

import { useChat } from "@/contexts/chat-context"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wifi, WifiOff, RefreshCw, AlertCircle } from "lucide-react"
import { config } from "@/lib/config"

export function ConnectionStatus() {
  const { connectionStatus, retryConnection } = useChat()

  const getStatusInfo = () => {
    switch (connectionStatus) {
      case "connected":
        return {
          icon: <Wifi className="h-3 w-3" />,
          text: "Online",
          color: "bg-green-500",
          textColor: "text-green-600",
        }
      case "connecting":
        return {
          icon: <RefreshCw className="h-3 w-3 animate-spin" />,
          text: "Đang kết nối...",
          color: "bg-yellow-500",
          textColor: "text-yellow-600",
        }
      case "disconnected":
        return {
          icon: <WifiOff className="h-3 w-3" />,
          text: "Offline",
          color: "bg-red-500",
          textColor: "text-red-600",
        }
      case "mock":
        return {
          icon: <AlertCircle className="h-3 w-3" />,
          text: "Demo Mode",
          color: "bg-blue-500",
          textColor: "text-blue-600",
        }
      default:
        return {
          icon: <WifiOff className="h-3 w-3" />,
          text: "Unknown",
          color: "bg-gray-500",
          textColor: "text-gray-600",
        }
    }
  }

  const statusInfo = getStatusInfo()

  return (
    <div className="flex items-center gap-2">
      <Badge variant="secondary" className={`flex items-center gap-1 ${statusInfo.textColor}`}>
        {statusInfo.icon}
        {statusInfo.text}
      </Badge>

      {connectionStatus === "disconnected" && config.USE_REAL_BACKEND && (
        <Button size="sm" variant="ghost" onClick={retryConnection} className="h-6 px-2">
          <RefreshCw className="h-3 w-3" />
        </Button>
      )}

      {connectionStatus === "mock" && <span className="text-xs text-gray-500">Backend chưa kết nối</span>}
    </div>
  )
}
