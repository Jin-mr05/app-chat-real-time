import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userName = searchParams.get("userName")

    if (!userName) {
      return NextResponse.json({ error: "Username is required" }, { status: 400 })
    }

    // Forward request to your NestJS backend
    const response = await fetch(
      `${process.env.BACKEND_URL}/user/find-user-by-name?userName=${encodeURIComponent(userName)}`,
      {
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
