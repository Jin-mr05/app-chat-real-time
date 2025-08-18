import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userName = searchParams.get("userName")
    const roomId = searchParams.get("roomId")

    if (!userName || !roomId) {
      return NextResponse.json({ error: "Username and roomId are required" }, { status: 400 })
    }

    // Forward request to your NestJS backend
    const response = await fetch(
      `${process.env.BACKEND_URL}/user/add-member?userName=${encodeURIComponent(userName)}&roomId=${encodeURIComponent(roomId)}`,
      {
        method: "POST",
        headers: {
          Cookie: request.headers.get("cookie") || "",
        },
      },
    )

    const data = await response.json()
    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
