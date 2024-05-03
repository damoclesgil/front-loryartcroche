import Auth from '@/templates/Auth'
import { FormResetPassword } from './_components/FormResetPassword'

export const metadata = {
  title: 'Redefinir Senha'
}

export default function ResetPasswordPage() {
  return (
    <Auth>
      <FormResetPassword />
    </Auth>
  )
}
