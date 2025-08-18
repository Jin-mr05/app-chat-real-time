import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const roomId = searchParams.get("roomId")
    const cursor = searchParams.get("cursor")
    const limit = searchParams.get("limit") || "20"
    const direction = searchParams.get("direction") || "next"

    if (!roomId) {
      return NextResponse.json({ error: "Room ID is required" }, { status: 400 })
    }

    // Build query parameters
    const params = new URLSearchParams({
      roomId,
      limit,
      direction,
    })

    if (cursor) {
      params.append("cursor", cursor)
    }

    // Forward request to your NestJS backend
    const response = await fetch(`${process.env.BACKEND_URL}/chat/loading-message?${params}`, {
      headers: {
        Cookie: request.headers.get("cookie") || "",
      },
    })

    const data = await response.json()
    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
