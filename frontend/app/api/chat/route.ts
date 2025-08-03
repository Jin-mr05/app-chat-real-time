import { openai } from "@ai-sdk/openai"
import { streamText, convertToModelMessages, type UIMessage } from "ai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const result = streamText({
    model: openai("gpt-4o"),
    system: "Bạn là một trợ lý AI thông minh và hữu ích. Hãy trả lời bằng tiếng Việt một cách tự nhiên và thân thiện.",
    messages: convertToModelMessages(messages),
  })

  return result.toUIMessageStreamResponse()
}
