'use client'

import InstagramSection from '@/components/InstagramSection'
import WishList from './_components/WishList'
// // import { useCart } from '@/hooks/use-cart'
// import ProductCard from '@/components/ProductCard'
// import { useQueryFavoritos } from '@/graphql/queries/favoritos'
// import { useSession } from 'next-auth/react'

export default function Favoritos() {
  return (
    <>
      <h1 className="text-2xl text-center font-bold">Meus Favoritos</h1>
      <WishList />
      <InstagramSection />
    </>
  )
}
