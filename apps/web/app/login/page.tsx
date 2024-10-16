import { LoginForm } from '@couponcloud/ui/components/templates/LoginForm'
import { AuthLayout } from '@couponcloud/ui/components/molecules/AuthLayout'

export default function Page() {
  return (
    <AuthLayout title={'Login'}>
      <LoginForm />
    </AuthLayout>
  )
}
