import { AuthGuard } from "@/components/auth/auth-guard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UpdateProfileForm } from "@/components/settings/update-profile-form"
import { ChangePasswordForm } from "@/components/settings/change-password-form"
import { Separator } from "@/components/ui/separator"

export default function SettingsPage() {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full space-y-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">Cài đặt tài khoản</h1>

          <Card>
            <CardHeader>
              <CardTitle>Cập nhật thông tin cá nhân</CardTitle>
            </CardHeader>
            <CardContent>
              <UpdateProfileForm />
            </CardContent>
          </Card>

          <Separator />

          <Card>
            <CardHeader>
              <CardTitle>Đổi mật khẩu</CardTitle>
            </CardHeader>
            <CardContent>
              <ChangePasswordForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </AuthGuard>
  )
}
