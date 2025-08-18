import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    // Forward request to your NestJS backend
    const response = await fetch(`${process.env.BACKEND_URL}/auth/logout`, {
      method: "POST",
      headers: {
        Cookie: request.headers.get("cookie") || "",
      },
    })

    const data = await response.json()

    // Clear cookies
    const nextResponse = NextResponse.json(data)
    nextResponse.cookies.delete("session_id")

    return nextResponse
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
