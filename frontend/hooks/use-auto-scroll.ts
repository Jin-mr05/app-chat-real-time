"use client"

import { useEffect, useRef } from "react"

export function useAutoScroll(dependency: any) {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    // Scroll immediately
    scrollToBottom()

    // Also scroll after a short delay to ensure DOM is updated
    const timeoutId = setTimeout(() => {
      scrollToBottom()
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [dependency])

  return { messagesEndRef, scrollToBottom }
}
