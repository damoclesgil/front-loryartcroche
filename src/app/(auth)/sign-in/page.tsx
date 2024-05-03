import Auth from '@/templates/Auth'
import { FormSignIn } from './_components/FormSignIn'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Entrar'
}

export default function Page() {
  return (
    <Auth backgroundImg="tricotado-a-mao-tres-coracoes-rosa-com-novelo-de-la-vista-do-topo">
      <FormSignIn />
    </Auth>
  )
}
