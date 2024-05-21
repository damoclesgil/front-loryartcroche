import Auth from '@/templates/Auth'
import { FormForgotPassword } from './_components/FormForgotPassword'
import { Suspense } from 'react'

export const metadata = {
  title: 'Esqueci Minha Senha'
}

function ForgotPasswordFallback() {
  return <>placeholder</>
}

export default function ForgotPasswordPage() {
  return (
    <Auth>
      <Suspense fallback={<ForgotPasswordFallback />}>
        <FormForgotPassword />
      </Suspense>
    </Auth>
  )
}
