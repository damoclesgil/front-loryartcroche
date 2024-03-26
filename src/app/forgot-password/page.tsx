import Auth from '@/templates/Auth'
import Link from 'next/link'
import { FormForgotPassword } from './_components/FormForgotPassword'

export default function Page() {
  return (
    <Auth>
      <Link href="/auth" className="mb-2 pt-2 block pl-2 text-gray-500">
        Voltar
      </Link>
      <FormForgotPassword />
    </Auth>
  )
}
