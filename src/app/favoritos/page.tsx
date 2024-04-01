'use client'

import InstagramSection from '@/components/InstagramSection'
// import { useCart } from '@/hooks/use-cart'
import ProductCard from '@/components/ProductCard'
import { useQueryFavoritos } from '@/graphql/queries/favoritos'

export default function Favoritos() {
  // const options = {
  //   var
  // }

  const { data, loading: loadingQuery } = useQueryFavoritos()

  if (data) {
    console.log(data.favoritos)
  }
  // const { items } = useCart()
  return (
    <main>
      {/* <p>{JSON.stringify(items)}</p> */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center my-4 mx-2">
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            img={`${process.env.NEXT_PUBLIC_API_URL}${product.img}`}
            slug={product.slug}
            name={product.name}
            price={product.price}
          />
        ))}
      </div> */}
      {/* <UseProducts /> */}
      <p>Favoritos</p>
      <InstagramSection />
    </main>
  )
}
