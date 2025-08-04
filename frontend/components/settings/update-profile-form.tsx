"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, CheckCircle, XCircle } from "lucide-react"
import { useChat } from "@/contexts/chat-context"
import ApiService from "@/lib/api"
import { Gender } from "@/types/chat"

export function UpdateProfileForm() {
  const { currentUser, updateCurrentUser } = useChat()
  const [formData, setFormData] = useState({
    name: currentUser?.name || "",
    birthday: currentUser?.birthday || "",
    gender: currentUser?.gender || "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  useEffect(() => {
    if (currentUser) {
      setFormData({
        name: currentUser.name || "",
        birthday: currentUser.birthday || "",
        gender: currentUser.gender || "",
      })
    }
  }, [currentUser])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setMessage(null)
  }

  const handleSelectChange = (value: string, name: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
    setMessage(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    try {
      const updatedUser = await ApiService.updateProfile({
        name: formData.name,
        birthday: formData.birthday,
        gender: formData.gender as Gender,
      })
      updateCurrentUser(updatedUser) // Update user in context and localStorage
      setMessage({ type: "success", text: "Cập nhật thông tin thành công!" })
    } catch (error: any) {
      console.error("Error updating profile:", error)
      setMessage({ type: "error", text: error.message || "Cập nhật thông tin thất bại." })
    } finally {
      setIsLoading(false)
    }
  }

  const isFormChanged =
    formData.name !== currentUser?.name ||
    formData.birthday !== currentUser?.birthday ||
    formData.gender !== currentUser?.gender

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {message && (
        <Alert
          variant={message.type === "success" ? "default" : "destructive"}
          className={message.type === "success" ? "border-green-200 bg-green-50 text-green-800" : ""}
        >
          {message.type === "success" ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
          <AlertDescription>{message.text}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="name">Họ tên</Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          disabled={isLoading}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="birthday">Ngày sinh</Label>
        <Input
          id="birthday"
          name="birthday"
          type="date"
          value={formData.birthday}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="gender">Giới tính</Label>
        <Select
          value={formData.gender}
          onValueChange={(value) => handleSelectChange(value, "gender")}
          disabled={isLoading}
        >
          <SelectTrigger id="gender">
            <SelectValue placeholder="Chọn giới tính" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={Gender.MALE}>Nam</SelectItem>
            <SelectItem value={Gender.FEMALE}>Nữ</SelectItem>
            <SelectItem value={Gender.OTHER}>Khác</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full" disabled={isLoading || !isFormChanged}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Đang cập nhật...
          </>
        ) : (
          "Cập nhật thông tin"
        )}
      </Button>
    </form>
  )
}
