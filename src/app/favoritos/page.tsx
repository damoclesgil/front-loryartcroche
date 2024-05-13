import InstagramSection from '@/components/InstagramSection'
import WishList from './_components/WishList'
import Base from '@/templates/Base'
// import { Suspense } from 'react'

export const metadata = {
  title: 'Favoritos'
}

export default function Favoritos() {
  return (
    <Base>
      <h1 className="text-2xl text-center font-bold">Meus Favoritos</h1>
      {/* <Suspense> */}
      <WishList />
      {/* </Suspense> */}
      <InstagramSection />
    </Base>
  )
}
