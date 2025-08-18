"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/components/auth-provider"
import { AlertCircle, CheckCircle } from "lucide-react"

interface ValidationError {
  field: string
  message: string
}

interface FormErrors {
  userName?: string
  email?: string
  password?: string
  confirmPassword?: string
  general?: string
}

export function LoginForm() {
  const { login, register } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  const [registerData, setRegisterData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const validateUsername = (username: string): string | null => {
    if (!username.trim()) return "Username is required"
    if (username.length < 3) return "Username must be at least 3 characters"
    if (username.length > 20) return "Username must be less than 20 characters"
    if (!/^[a-zA-Z0-9_-]+$/.test(username))
      return "Username can only contain letters, numbers, hyphens, and underscores"
    return null
  }

  const validateEmail = (email: string): string | null => {
    if (!email.trim()) return "Email is required"
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) return "Please enter a valid email address"
    return null
  }

  const validatePassword = (password: string): string | null => {
    if (!password) return "Password is required"
    if (password.length < 8) return "Password must be at least 8 characters"
    if (!/(?=.*[a-z])/.test(password)) return "Password must contain at least one lowercase letter"
    if (!/(?=.*[A-Z])/.test(password)) return "Password must contain at least one uppercase letter"
    if (!/(?=.*\d)/.test(password)) return "Password must contain at least one number"
    if (!/(?=.*[@$!%*?&])/.test(password)) return "Password must contain at least one special character (@$!%*?&)"
    return null
  }

  const validateLoginForm = (): boolean => {
    const newErrors: FormErrors = {}

    const emailError = validateEmail(loginData.email)
    if (emailError) newErrors.email = emailError

    if (!loginData.password.trim()) newErrors.password = "Password is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateRegisterForm = (): boolean => {
    const newErrors: FormErrors = {}

    const usernameError = validateUsername(registerData.userName)
    if (usernameError) newErrors.userName = usernameError

    const emailError = validateEmail(registerData.email)
    if (emailError) newErrors.email = emailError

    const passwordError = validatePassword(registerData.password)
    if (passwordError) newErrors.password = passwordError

    if (!registerData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password"
    } else if (registerData.password !== registerData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateLoginForm()) return

    setIsLoading(true)
    setErrors({})

    const success = await login({ email: loginData.email, password: loginData.password })
    if (!success) {
      setErrors({ general: "Invalid credentials. Please check your email and password." })
    }
    setIsLoading(false)
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateRegisterForm()) return

    setIsLoading(true)
    setErrors({})

    const success = await register({
      userName: registerData.userName,
      email: registerData.email,
      password: registerData.password,
    })

    if (success) {
      setErrors({ general: "Registration successful! Please check your email to verify your account." })
    } else {
      setErrors({ general: "Registration failed. Username or email may already be taken." })
    }
    setIsLoading(false)
  }

  const handleLoginEmailChange = (value: string) => {
    setLoginData({ ...loginData, email: value })

    // Clear email error on change
    if (errors.email) {
      setErrors({ ...errors, email: undefined })
    }
  }

  const handleUsernameChange = (value: string) => {
    setRegisterData({ ...registerData, userName: value })

    // Clear username error on change
    if (errors.userName) {
      setErrors({ ...errors, userName: undefined })
    }
  }

  const handleEmailChange = (value: string) => {
    setRegisterData({ ...registerData, email: value })

    // Clear email error on change
    if (errors.email) {
      setErrors({ ...errors, email: undefined })
    }
  }

  const handlePasswordChange = (value: string, isLogin = false) => {
    if (isLogin) {
      setLoginData({ ...loginData, password: value })
    } else {
      setRegisterData({ ...registerData, password: value })
    }

    // Clear password errors on change
    if (errors.password) {
      setErrors({ ...errors, password: undefined })
    }
  }

  const handleConfirmPasswordChange = (value: string) => {
    setRegisterData({ ...registerData, confirmPassword: value })

    // Clear confirm password error on change
    if (errors.confirmPassword) {
      setErrors({ ...errors, confirmPassword: undefined })
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Welcome to Chat</CardTitle>
          <CardDescription>Sign in to start chatting</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Email address"
                    value={loginData.email}
                    onChange={(e) => handleLoginEmailChange(e.target.value)}
                    className={errors.email ? "border-red-500 focus:border-red-500" : ""}
                  />
                  {errors.email && (
                    <div className="flex items-center space-x-1 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={(e) => handlePasswordChange(e.target.value, true)}
                    className={errors.password ? "border-red-500 focus:border-red-500" : ""}
                  />
                  {errors.password && (
                    <div className="flex items-center space-x-1 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4" />
                      <span>{errors.password}</span>
                    </div>
                  )}
                </div>
                {errors.general && (
                  <div
                    className={`flex items-center space-x-1 text-sm ${errors.general.includes("successful") ? "text-green-600" : "text-red-600"}`}
                  >
                    {errors.general.includes("successful") ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <AlertCircle className="h-4 w-4" />
                    )}
                    <span>{errors.general}</span>
                  </div>
                )}
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="register">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Username (3-20 chars, letters/numbers/_/-)"
                    value={registerData.userName}
                    onChange={(e) => handleUsernameChange(e.target.value)}
                    className={errors.userName ? "border-red-500 focus:border-red-500" : ""}
                  />
                  {errors.userName && (
                    <div className="flex items-center space-x-1 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4" />
                      <span>{errors.userName}</span>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Email address"
                    value={registerData.email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    className={errors.email ? "border-red-500 focus:border-red-500" : ""}
                  />
                  {errors.email && (
                    <div className="flex items-center space-x-1 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="Password (8+ chars, upper/lower/number/special)"
                    value={registerData.password}
                    onChange={(e) => handlePasswordChange(e.target.value)}
                    className={errors.password ? "border-red-500 focus:border-red-500" : ""}
                  />
                  {errors.password && (
                    <div className="flex items-center space-x-1 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4" />
                      <span>{errors.password}</span>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    value={registerData.confirmPassword}
                    onChange={(e) => handleConfirmPasswordChange(e.target.value)}
                    className={errors.confirmPassword ? "border-red-500 focus:border-red-500" : ""}
                  />
                  {errors.confirmPassword && (
                    <div className="flex items-center space-x-1 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4" />
                      <span>{errors.confirmPassword}</span>
                    </div>
                  )}
                </div>
                {errors.general && (
                  <div
                    className={`flex items-center space-x-1 text-sm ${errors.general.includes("successful") ? "text-green-600" : "text-red-600"}`}
                  >
                    {errors.general.includes("successful") ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <AlertCircle className="h-4 w-4" />
                    )}
                    <span>{errors.general}</span>
                  </div>
                )}
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Creating account..." : "Create Account"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
