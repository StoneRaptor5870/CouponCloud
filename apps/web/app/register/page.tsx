import { RegisterForm } from '@couponcloud/ui/components/templates/RegisterForm'
import { AuthLayout } from '@couponcloud/ui/components/molecules/AuthLayout'

export default function Page() {
  return (
    <AuthLayout title={'Register'}>
      <RegisterForm />
    </AuthLayout>
  )
}
