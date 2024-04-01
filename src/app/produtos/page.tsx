'use client'

import InstagramSection from '@/components/InstagramSection'
import ProductList from '@/components/ProductList'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Produtos() {
  return (
    <main>
      <ProductList />

      <InstagramSection />
    </main>
  )
}
