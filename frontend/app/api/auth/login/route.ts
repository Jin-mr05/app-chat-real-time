import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Forward request to your NestJS backend
    const response = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    const data = await response.json()

    if (response.ok) {
      // Set cookies from backend response
      const cookies = response.headers.get("set-cookie")
      const nextResponse = NextResponse.json(data)

      if (cookies) {
        nextResponse.headers.set("set-cookie", cookies)
      }

      return nextResponse
    }

    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
