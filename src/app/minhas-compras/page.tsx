import Profile from '@/templates/Profile'
import OrdensDeCompras from './_components/OrdensDeCompras'
// import { defaultMetadata } from '@/utils/constant'

export const metadata = {
  title: `Minhas Compras`
}

export default function MyOrdersPage() {
  return (
    <Profile>
      <OrdensDeCompras />
    </Profile>
  )
}
