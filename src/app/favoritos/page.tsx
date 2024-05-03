import InstagramSection from '@/components/InstagramSection'
import WishList from './_components/WishList'
import { defaultMetadata } from '@/utils/constant'
import Base from '@/templates/Base'
// // import { useCart } from '@/hooks/use-cart'
// import ProductCard from '@/components/ProductCard'
// import { useQueryFavoritos } from '@/graphql/queries/favoritos'
// import { useSession } from 'next-auth/react'

export const metadata = {
  title: `${defaultMetadata.title} - Favoritos`
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
