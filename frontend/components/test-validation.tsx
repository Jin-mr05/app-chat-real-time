"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { testValidationCases, runValidationTests } from "@/lib/mock-data"

export function TestValidation() {
  const [showTests, setShowTests] = useState(false)

  const handleRunTests = () => {
    runValidationTests()
    setShowTests(true)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>Validation Testing</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button onClick={handleRunTests}>Run Validation Tests (Check Console)</Button>

        {showTests && (
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold text-green-600">✅ Valid Examples:</h4>
              <p>
                <strong>Usernames:</strong> {testValidationCases.validUsernames.join(", ")}
              </p>
              <p>
                <strong>Emails:</strong> {testValidationCases.validEmails.join(", ")}
              </p>
              <p>
                <strong>Passwords:</strong> Password123!, SecurePass456@, MyPassword789#
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-red-600">❌ Invalid Examples (try these):</h4>
              <p>
                <strong>Username:</strong> "ab" (too short), "user@name" (invalid chars)
              </p>
              <p>
                <strong>Email:</strong> "invalid-email", "user@" (incomplete)
              </p>
              <p>
                <strong>Password:</strong> "short", "password123" (no uppercase)
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
