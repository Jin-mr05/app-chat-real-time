"use client"

import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Room {
  id: string
  name: string
  members: string[]
  lastMessage?: string
  lastMessageTime?: string
}

interface RoomListProps {
  rooms: Room[]
  selectedRoom: Room | null
  onSelectRoom: (room: Room) => void
}

export function RoomList({ rooms, selectedRoom, onSelectRoom }: RoomListProps) {
  return (
    <ScrollArea className="flex-1">
      <div className="p-2">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Rooms</h3>
        {rooms.map((room) => (
          <div
            key={room.id}
            className={`p-3 rounded-lg cursor-pointer mb-1 ${
              selectedRoom?.id === room.id ? "bg-blue-100" : "hover:bg-gray-100"
            }`}
            onClick={() => onSelectRoom(room)}
          >
            <div className="flex items-center justify-between">
              <p className="font-medium">{room.name}</p>
              <Badge variant="secondary">{room.members.length}</Badge>
            </div>
            {room.lastMessage && <p className="text-sm text-gray-500 truncate">{room.lastMessage}</p>}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
