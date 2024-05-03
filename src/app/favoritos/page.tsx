import InstagramSection from '@/components/InstagramSection'
import WishList from './_components/WishList'
import Base from '@/templates/Base'

export const metadata = {
  title: 'Favoritos'
}

export default function Favoritos() {
  return (
    <Base>
      <h1 className="text-2xl text-center font-bold">Meus Favoritos</h1>
      <WishList />
      <InstagramSection />
    </Base>
  )
}
