import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const addressId = searchParams.get("addressId")

    // Forward request to your NestJS backend
    const response = await fetch(
      `${process.env.BACKEND_URL}/user/create-room${addressId ? `?addressId=${addressId}` : ""}`,
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
