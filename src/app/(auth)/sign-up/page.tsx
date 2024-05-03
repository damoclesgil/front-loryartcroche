import Auth from '@/templates/Auth'
import { FormSignUp } from './_components/FormSignUp'

export const metadata = {
  title: 'Registar'
}

export default function Page() {
  return (
    <Auth>
      <FormSignUp />
    </Auth>
  )
}
