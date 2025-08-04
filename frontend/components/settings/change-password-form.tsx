"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, Lock, Loader2, CheckCircle, XCircle } from "lucide-react"
import ApiService from "@/lib/api"

export function ChangePasswordForm() {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  })
  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setMessage(null)
  }

  const validateForm = () => {
    if (!formData.oldPassword || !formData.newPassword || !formData.confirmNewPassword) {
      setMessage({ type: "error", text: "Vui lòng điền đầy đủ các trường." })
      return false
    }
    if (formData.newPassword.length < 6) {
      setMessage({ type: "error", text: "Mật khẩu mới phải có ít nhất 6 ký tự." })
      return false
    }
    if (formData.newPassword !== formData.confirmNewPassword) {
      setMessage({ type: "error", text: "Mật khẩu mới xác nhận không khớp." })
      return false
    }
    if (formData.oldPassword === formData.newPassword) {
      setMessage({ type: "error", text: "Mật khẩu mới không được trùng với mật khẩu cũ." })
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    if (!validateForm()) {
      setIsLoading(false)
      return
    }

    try {
      const response = await ApiService.changePassword(formData.oldPassword, formData.newPassword)
      if (response.success) {
        setMessage({ type: "success", text: response.message || "Đổi mật khẩu thành công!" })
        setFormData({ oldPassword: "", newPassword: "", confirmNewPassword: "" }) // Clear form
      } else {
        setMessage({ type: "error", text: response.message || "Đổi mật khẩu thất bại." })
      }
    } catch (error: any) {
      console.error("Error changing password:", error)
      setMessage({ type: "error", text: error.message || "Đổi mật khẩu thất bại." })
    } finally {
      setIsLoading(false)
    }
  }

  const isFormValid =
    formData.oldPassword &&
    formData.newPassword &&
    formData.confirmNewPassword &&
    formData.newPassword === formData.confirmNewPassword &&
    formData.newPassword.length >= 6 &&
    formData.oldPassword !== formData.newPassword

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
        <Label htmlFor="oldPassword">Mật khẩu cũ</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="oldPassword"
            name="oldPassword"
            type={showOldPassword ? "text" : "password"}
            placeholder="Nhập mật khẩu cũ"
            value={formData.oldPassword}
            onChange={handleChange}
            className="pl-10 pr-10"
            required
            disabled={isLoading}
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowOldPassword(!showOldPassword)}
            disabled={isLoading}
          >
            {showOldPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="newPassword">Mật khẩu mới</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="newPassword"
            name="newPassword"
            type={showNewPassword ? "text" : "password"}
            placeholder="Nhập mật khẩu mới"
            value={formData.newPassword}
            onChange={handleChange}
            className="pl-10 pr-10"
            required
            disabled={isLoading}
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowNewPassword(!showNewPassword)}
            disabled={isLoading}
          >
            {showNewPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmNewPassword">Xác nhận mật khẩu mới</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="confirmNewPassword"
            name="confirmNewPassword"
            type={showConfirmNewPassword ? "text" : "password"}
            placeholder="Xác nhận mật khẩu mới"
            value={formData.confirmNewPassword}
            onChange={handleChange}
            className="pl-10 pr-10"
            required
            disabled={isLoading}
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
            disabled={isLoading}
          >
            {showConfirmNewPassword ? (
              <EyeOff className="h-4 w-4 text-gray-400" />
            ) : (
              <Eye className="h-4 w-4 text-gray-400" />
            )}
          </Button>
        </div>
        {formData.newPassword &&
          formData.confirmNewPassword &&
          formData.newPassword !== formData.confirmNewPassword && (
            <p className="text-xs text-red-500">Mật khẩu mới xác nhận không khớp.</p>
          )}
      </div>

      <Button type="submit" className="w-full" disabled={isLoading || !isFormValid}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Đang đổi mật khẩu...
          </>
        ) : (
          "Đổi mật khẩu"
        )}
      </Button>
    </form>
  )
}
