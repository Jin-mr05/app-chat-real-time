"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { Chat, User, Message, ChatContextType } from "@/types/chat"
import SocketService from "@/lib/socket"
import ApiService from "@/lib/api"
import { config } from "@/lib/config"
import type { Socket } from "socket.io-client"

const ChatContext = createContext<ChatContextType | undefined>(undefined)

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [chats, setChats] = useState<Chat[]>([])
  const [activeChat, setActiveChat] = useState<Chat | null>(null)
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [socket, setSocket] = useState<Socket | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [connectionStatus, setConnectionStatus] = useState<"connecting" | "connected" | "disconnected" | "mock">(
    "connecting",
  )

  // Thêm state cho typing indicator
  const [typingUsers, setTypingUsers] = useState<{ [chatId: string]: string[] }>({})

  useEffect(() => {
    initializeApp()
  }, [])

  const initializeApp = async () => {
    try {
      // Load user from localStorage or set demo user
      let userData = localStorage.getItem("user")
      if (!userData && !config.USE_REAL_BACKEND) {
        // Set demo user for mock mode
        const demoUser = { id: "current", name: "Demo User", isOnline: true }
        localStorage.setItem("user", JSON.stringify(demoUser))
        userData = JSON.stringify(demoUser)
      }

      if (userData) {
        setCurrentUser(JSON.parse(userData))
      }

      // Initialize socket connection
      if (config.USE_REAL_BACKEND) {
        const socketService = SocketService.getInstance()
        const socketInstance = socketService.connect()

        if (socketInstance) {
          setSocket(socketInstance)
          setConnectionStatus("connecting")

          socketInstance.on("connect", () => {
            setIsConnected(true)
            setConnectionStatus("connected")
          })

          socketInstance.on("disconnect", () => {
            setIsConnected(false)
            setConnectionStatus("disconnected")
          })

          socketInstance.on("connect_error", () => {
            setIsConnected(false)
            setConnectionStatus("disconnected")
          })

          // Listen for new messages - cập nhật NGAY LẬP TỨC
          socketInstance.on("receive_message", (message: Message) => {
            console.log("📨 Received new message:", message)

            setChats((prevChats) =>
              prevChats.map((chat) =>
                chat.id === message.chatId
                  ? {
                      ...chat,
                      messages: [...chat.messages, message],
                      lastMessage: message,
                      unreadCount: activeChat?.id === message.chatId ? 0 : chat.unreadCount + 1,
                    }
                  : chat,
              ),
            )
          })

          // Listen for message updates - cập nhật NGAY LẬP TỨC
          socketInstance.on("message_updated", (updatedMessage: Message) => {
            console.log("✏️ Message updated:", updatedMessage)

            setChats((prevChats) =>
              prevChats.map((chat) =>
                chat.id === updatedMessage.chatId
                  ? {
                      ...chat,
                      messages: chat.messages.map((msg) => (msg.id === updatedMessage.id ? updatedMessage : msg)),
                    }
                  : chat,
              ),
            )
          })

          // Listen for message deletions - cập nhật NGAY LẬP TỨC
          socketInstance.on("message_deleted", (messageId: string, chatId: string) => {
            console.log("🗑️ Message deleted:", messageId)

            setChats((prevChats) =>
              prevChats.map((chat) =>
                chat.id === chatId
                  ? {
                      ...chat,
                      messages: chat.messages.filter((msg) => msg.id !== messageId),
                    }
                  : chat,
              ),
            )
          })

          // Listen for typing events
          socketInstance.on("user_typing", (data: { userId: string; chatId: string; isTyping: boolean }) => {
            setTypingUsers((prev) => {
              const chatTyping = prev[data.chatId] || []
              if (data.isTyping) {
                if (!chatTyping.includes(data.userId)) {
                  return {
                    ...prev,
                    [data.chatId]: [...chatTyping, data.userId],
                  }
                }
              } else {
                return {
                  ...prev,
                  [data.chatId]: chatTyping.filter((id) => id !== data.userId),
                }
              }
              return prev
            })
          })
        }
      } else {
        setConnectionStatus("mock")
        setIsConnected(true) // Mock mode is always "connected"
      }

      // Load initial messages
      await loadMessages()
    } catch (error) {
      console.error("Failed to initialize app:", error)
      setConnectionStatus("disconnected")
    }
  }

  const loadMessages = async () => {
    try {
      const data = await ApiService.loadMessages()
      if (data.chats) {
        setChats(data.chats)
      }
      if (data.user && !currentUser) {
        setCurrentUser(data.user)
      }
    } catch (error) {
      console.error("Failed to load messages:", error)
    }
  }

  const joinChat = (chatId: string) => {
    if (socket && isConnected && config.USE_REAL_BACKEND) {
      socket.emit("join-chat", { chatId })
    }
  }

  const sendMessage = (chatId: string, content: string) => {
    if (!currentUser) return

    const optimisticMessage: Message = {
      id: `temp-${Date.now()}`,
      senderId: currentUser.id,
      content,
      timestamp: new Date(),
      type: "text",
      isRead: false,
      chatId,
    }

    // Optimistically add message to UI IMMEDIATELY
    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === chatId
          ? {
              ...chat,
              messages: [...chat.messages, optimisticMessage],
              lastMessage: optimisticMessage,
            }
          : chat,
      ),
    )

    if (socket && isConnected && config.USE_REAL_BACKEND) {
      const messageData = {
        chatId,
        content,
        senderId: currentUser.id,
        timestamp: new Date(),
      }
      socket.emit("send_message", messageData)
    } else {
      // Mock mode - simulate response IMMEDIATELY
      setTimeout(() => {
        const mockResponse: Message = {
          id: `mock-${Date.now()}`,
          senderId: activeChat?.participants.find((p) => p.id !== currentUser.id)?.id || "1",
          content: `Echo: ${content} (Chế độ demo)`,
          timestamp: new Date(),
          type: "text",
          isRead: false,
          chatId,
        }

        setChats((prevChats) =>
          prevChats.map((chat) =>
            chat.id === chatId
              ? {
                  ...chat,
                  messages: [...chat.messages, mockResponse],
                  lastMessage: mockResponse,
                }
              : chat,
          ),
        )
      }, 500) // Giảm delay từ 1000ms xuống 500ms
    }
  }

  const editMessage = async (messageId: string, content: string) => {
    try {
      await ApiService.editMessage(messageId, content)

      // Update UI optimistically
      setChats((prevChats) =>
        prevChats.map((chat) => ({
          ...chat,
          messages: chat.messages.map((msg) => (msg.id === messageId ? { ...msg, content } : msg)),
        })),
      )
    } catch (error) {
      console.error("Failed to edit message:", error)
    }
  }

  const deleteMessage = async (messageId: string) => {
    try {
      await ApiService.deleteMessage(messageId)

      // Update UI optimistically
      setChats((prevChats) =>
        prevChats.map((chat) => ({
          ...chat,
          messages: chat.messages.filter((msg) => msg.id !== messageId),
        })),
      )
    } catch (error) {
      console.error("Failed to delete message:", error)
    }
  }

  const setActiveChatAndJoin = (chat: Chat) => {
    setActiveChat(chat)
    if (config.USE_REAL_BACKEND) {
      joinChat(chat.id)
    }

    // Mark messages as read
    setChats((prevChats) => prevChats.map((c) => (c.id === chat.id ? { ...c, unreadCount: 0 } : c)))
  }

  const createIndividualChat = async (user: User) => {
    try {
      // Check if chat already exists
      const existingChat = chats.find(
        (chat) => chat.type === "individual" && chat.participants.some((p) => p.id === user.id),
      )

      if (existingChat) {
        setActiveChat(existingChat)
        return
      }

      const newChat = await ApiService.createIndividualChat(user.id)
      newChat.participants = [user, currentUser!]
      newChat.name = user.name
      newChat.isOnline = user.isOnline

      setChats((prev) => [newChat, ...prev])
      setActiveChat(newChat)
    } catch (error) {
      console.error("Failed to create individual chat:", error)
      throw error
    }
  }

  const createGroupChat = async (name: string, participants: User[]) => {
    try {
      const userIds = participants.map((p) => p.id)
      const newChat = await ApiService.createGroupChat(name, userIds)
      newChat.participants = [...participants, currentUser!]
      newChat.name = name

      setChats((prev) => [newChat, ...prev])
      setActiveChat(newChat)
    } catch (error) {
      console.error("Failed to create group chat:", error)
      throw error
    }
  }

  const retryConnection = () => {
    if (config.USE_REAL_BACKEND) {
      const socketService = SocketService.getInstance()
      socketService.disconnect()
      initializeApp()
    }
  }

  // Thêm function để emit typing events
  const emitTyping = (chatId: string, isTyping: boolean) => {
    if (socket && isConnected && config.USE_REAL_BACKEND && currentUser) {
      socket.emit("typing", { chatId, userId: currentUser.id, isTyping })
    }
  }

  // Thêm vào return value của context
  return (
    <ChatContext.Provider
      value={{
        chats,
        activeChat,
        currentUser,
        isConnected,
        connectionStatus,
        typingUsers,
        setActiveChat: setActiveChatAndJoin,
        sendMessage,
        editMessage,
        deleteMessage,
        createIndividualChat,
        createGroupChat,
        loadMessages,
        retryConnection,
        emitTyping,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export const useChat = () => {
  const context = useContext(ChatContext)
  if (!context) {
    throw new Error("useChat must be used within ChatProvider")
  }
  return context
}
