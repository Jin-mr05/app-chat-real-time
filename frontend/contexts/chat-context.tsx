"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { Chat, User, Message } from "@/types/chat"
import SocketService from "@/lib/socket"
import ApiService from "@/lib/api"
import { config } from "@/lib/config"
import type { Socket } from "socket.io-client"

// Cập nhật ChatContextType để bao gồm onLogout
export interface ChatContextType {
  chats: Chat[]
  activeChat: Chat | null
  currentUser: User | null
  isConnected: boolean
  connectionStatus: "connecting" | "connected" | "disconnected" | "mock"
  typingUsers: { [chatId: string]: string[] }
  setActiveChat: (chat: Chat) => void
  sendMessage: (chatId: string, content: string) => void
  editMessage: (messageId: string, content: string) => Promise<void>
  deleteMessage: (messageId: string) => Promise<void>
  createIndividualChat: (user: User) => Promise<void>
  createGroupChat: (name: string, participants: User[]) => Promise<void>
  loadMessages: () => Promise<void>
  retryConnection: () => void
  emitTyping: (chatId: string, isTyping: boolean) => void
  updateCurrentUser: (user: User) => void
  onLogout: () => void // Thêm onLogout vào context
}

const ChatContext = createContext<ChatContextType | undefined>(undefined)

// Cập nhật ChatProviderProps để nhận onLogout
interface ChatProviderProps {
  children: React.ReactNode
  onLogout: () => void // Nhận onLogout từ AuthGuard
}

export function ChatProvider({ children, onLogout }: ChatProviderProps) {
  const [chats, setChats] = useState<Chat[]>([])
  const [activeChat, setActiveChat] = useState<Chat | null>(null)
  const [currentUser, setCurrentUser] = useState<User | null>(null) // Khôi phục về null
  const [socket, setSocket] = useState<Socket | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [connectionStatus, setConnectionStatus] = useState<"connecting" | "connected" | "disconnected" | "mock">(
    "connecting",
  )

  const [typingUsers, setTypingUsers] = useState<{ [chatId: string]: string[] }>({})

  useEffect(() => {
    initializeApp()
  }, [])

  const initializeApp = async () => {
    try {
      // Khôi phục logic tải người dùng từ localStorage
      let userData = localStorage.getItem("user")
      if (!userData && !config.USE_REAL_BACKEND) {
        const demoUser = { id: "current", name: "Demo User", isOnline: true }
        localStorage.setItem("user", JSON.stringify(demoUser))
        userData = JSON.stringify(demoUser)
      }

      if (userData) {
        setCurrentUser(JSON.parse(userData))
      }

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

          socketInstance.on("receive_message", (message: Message) => {
            console.log("📨 Received new message:", message)

            setChats((prevChats) => {
              const updatedChats = prevChats.map((chat) =>
                chat.id === message.chatId
                  ? {
                      ...chat,
                      messages: [...chat.messages, message],
                      lastMessage: message,
                      unreadCount: activeChat?.id === message.chatId ? 0 : chat.unreadCount + 1,
                    }
                  : chat,
              )
              if (!updatedChats.some((chat) => chat.id === message.chatId)) {
                console.warn("Received message for unknown chat ID:", message.chatId)
              }
              return updatedChats
            })
          })

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
        setIsConnected(true)
      }

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
      const chat = chats.find(c => c.id === chatId)
      const isGroup = chat?.type === 'group'
      
      let targetId = chatId
      if (!isGroup && chat && chat.participants.length === 2 && currentUser) {
        const otherUser = chat.participants.find(p => p.id !== currentUser.id)
        targetId = otherUser?.id || chatId
      }

      socket.emit('join-chat', { 
        type: isGroup ? 'group' : 'private', 
        targetId 
      })
    }
  }

  const sendMessage = (chatId: string, content: string) => {
    if (!currentUser) return

    const optimisticMessage: Message = {
      id: `temp-${Date.now()}`,
      senderId: currentUser.id,
      content,
      timestamp: new Date(),
      type: 'text',
      isRead: false,
      chatId,
    }

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
      const chat = chats.find(c => c.id === chatId)
      const isGroup = chat?.type === 'group'
      
      let targetId = chatId
      if (!isGroup && chat && chat.participants.length === 2) {
        const otherUser = chat.participants.find(p => p.id !== currentUser.id)
        targetId = otherUser?.id || chatId
      }

      const messageData = {
        type: isGroup ? 'group' : 'private',
        targetId,
        message: content,
      }
      socket.emit('send_message', messageData)
    } else {
      setTimeout(() => {
        const mockResponse: Message = {
          id: `mock-${Date.now()}`,
          senderId: activeChat?.participants.find((p) => p.id !== currentUser.id)?.id || '1',
          content: `Echo: ${content} (Chế độ demo)`,
          timestamp: new Date(),
          type: 'text',
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
      }, 500)
    }
  }

  const editMessage = async (messageId: string, content: string) => {
    try {
      await ApiService.editMessage(messageId, content)

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

    setChats((prevChats) => prevChats.map((c) => (c.id === chat.id ? { ...c, unreadCount: 0 } : c)))
  }

  const createIndividualChat = async (user: User) => {
    try {
      const existingChat = chats.find(
        (chat) => chat.type === "individual" && chat.participants.some((p) => p.id === user.id),
      )

      if (existingChat) {
        setActiveChat(existingChat)
        return
      }

      const newChat = await ApiService.createIndividualChat(user.id)
      if (!newChat.participants || newChat.participants.length === 0) {
        newChat.participants = [user, currentUser!]
      }
      if (!newChat.name) {
        newChat.name = user.name
      }
      newChat.isOnline = user.isOnline
      newChat.messages = []

      setChats((prev) => {
        const updatedChats = [newChat, ...prev]
        console.log("ChatContext: Chats after creating individual chat", updatedChats)
        return updatedChats
      })
      setActiveChat(newChat)
    } catch (error) {
      console.error("Failed to create individual chat:", error)
      throw error
    }
  }

  const createGroupChat = async (name: string, participants: User[]) => {
    try {
      const userIds = participants.map((p) => p.id)
      console.log("ChatContext: Calling ApiService.createGroupChat with name:", name, "userIds:", userIds)
      const newChat = await ApiService.createGroupChat(name, userIds)
      console.log("ChatContext: Received new chat from API service", newChat)

      if (!newChat.participants || newChat.participants.length === 0) {
        newChat.participants = [...participants, currentUser!]
      }
      if (!newChat.name) {
        newChat.name = name
      }
      newChat.messages = []

      setChats((prev) => {
        const updatedChats = [newChat, ...prev]
        console.log("ChatContext: Chats after creating group chat", updatedChats)
        return updatedChats
      })
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

  const emitTyping = (chatId: string, isTyping: boolean) => {
    if (socket && isConnected && config.USE_REAL_BACKEND && currentUser) {
      socket.emit("typing", { chatId, userId: currentUser.id, isTyping })
    }
  }

  const updateCurrentUser = (user: User) => {
    setCurrentUser(user)
    localStorage.setItem("user", JSON.stringify(user))
  }

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
        updateCurrentUser,
        onLogout, // Truyền onLogout vào context
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
