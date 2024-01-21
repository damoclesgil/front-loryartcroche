'use client'

import InstagramSection from '@/components/InstagramSection'
import { useCart } from '@/hooks/use-cart'
import ProductCard from '@/components/ProductCard'

export default function Favoritos() {
  const { items } = useCart()

  return (
    <main>
      {/* <p>{JSON.stringify(items)}</p> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center my-4 mx-2">
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            slug={product.slug}
            img={product.img}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
      <p>Favoritos</p>
      <InstagramSection />
    </main>
  )
}
