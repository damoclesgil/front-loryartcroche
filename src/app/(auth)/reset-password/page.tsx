import Auth from '@/templates/Auth'
import { FormResetPassword } from './_components/FormResetPassword'

export const metadata = {
  title: 'Redefinir Senha'
}

type PropsResetPassword = {
  searchParams: {
    code: string
  }
}

export default function ResetPasswordPage({
  searchParams
}: PropsResetPassword) {
  return (
    <Auth>
      <FormResetPassword codeParam={searchParams.code} />
    </Auth>
  )
}
