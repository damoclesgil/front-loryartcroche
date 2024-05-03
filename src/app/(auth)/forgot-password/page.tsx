import Auth from '@/templates/Auth'
import { FormForgotPassword } from './_components/FormForgotPassword'

export const metadata = {
  title: 'Esqueci Minha Senha'
}

export default function ForgotPasswordPage() {
  return (
    <Auth>
      <FormForgotPassword />
    </Auth>
  )
}
