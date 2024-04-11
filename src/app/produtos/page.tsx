'use client'

import InstagramSection from '@/components/InstagramSection'
import ProductList from '@/components/ProductList'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Produtos() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center">
        Confira nossas bolsas de crochê 🧶
      </h1>
      <ProductList />
      <InstagramSection />
    </main>
  )
}
