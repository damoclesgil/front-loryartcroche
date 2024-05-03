import Auth from '@/templates/Auth'
import { FormSignUp } from './_components/FormSignUp'
import { defaultMetadata } from '@/utils/constant'

export const metadata = {
  title: `${defaultMetadata.title} - Registar`
}

export default function Page() {
  return (
    <Auth>
      <FormSignUp />
    </Auth>
  )
}
