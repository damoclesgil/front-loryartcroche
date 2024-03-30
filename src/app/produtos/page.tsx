'use client'

import InstagramSection from '@/components/InstagramSection'
import ProductList from '@/components/ProductList'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Produtos() {
  return (
    <main>
      <ProductList />

      <main className="grid gap-4 p-4 md:gap-8 md:p-6 flex-1">
        <div className="grid gap-4 md:gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold tracking-tighter">
              Handcrafted Tote Bag
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Beautifully designed tote bag for all your essentials. Perfect for
              a day out.
            </p>
            <p className="text-2xl font-semibold">$49.99</p>
            <Button>Buy Now</Button>
          </div>
          <Image
            alt="Featured bag"
            className="aspect-video overflow-hidden rounded-lg object-cover object-center"
            height="400"
            src="img/products/placeholder.svg"
            width="600"
          />
        </div>
        <div className="grid gap-4 md:gap-8 md:grid-cols-2">
          <Image
            alt="Featured bag"
            className="aspect-video overflow-hidden rounded-lg object-cover object-center"
            height="400"
            src="img/products/placeholder.svg"
            width="600"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold tracking-tighter">
              Stylish Sling Bag
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Trendy and chic sling bag to elevate your fashion game. Perfect
              for casual outings.
            </p>
            <p className="text-2xl font-semibold">$39.99</p>
            <Button>Buy Now</Button>
          </div>
        </div>
      </main>

      <InstagramSection />
    </main>
  )
}
