import FormProfile from './_components/FormProfile'
import Profile from '@/templates/Profile'

export const metadata = {
  title: 'Minha Conta'
}

export default function MyAccountPage() {
  return (
    <Profile>
      <FormProfile />
    </Profile>
  )
}
