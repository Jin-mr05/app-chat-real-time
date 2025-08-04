export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}

export interface User {
  id: string
  name: string
  email?: string
  avatar?: string
  isOnline: boolean
  lastSeen?: Date
  birthday?: string // YYYY-MM-DD format
  gender?: Gender
}

export interface Message {
  id: string
  senderId: string
  content: string
  timestamp: Date
  type: "text" | "image" | "file"
  isRead: boolean
  chatId?: string
}

export interface Chat {
  id: string
  type: "individual" | "group"
  name: string
  avatar?: string
  participants: User[]
  messages: Message[]
  lastMessage?: Message
  unreadCount: number
  isOnline?: boolean
}

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
  updateCurrentUser: (user: User) => void // New: Function to update current user in context
}
