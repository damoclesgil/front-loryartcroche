'use client'

import ExploreSidebar from '@/components/ExploreSidebar'
import InstagramSection from '@/components/InstagramSection'
import ProductList from '@/components/ProductList'
import { priceFields } from '@/utils/filter'
import { ParsedUrlQueryInput } from 'querystring'
import { useRouter } from 'next/navigation'
import { NextRoutes } from '@/utils/constant'

export default function Produtos() {
  const { push } = useRouter()

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push(NextRoutes.products)
    return
  }

  const theItems = [
    {
      title: 'Preço',
      name: 'Preço',
      type: 'asd',
      fields: priceFields
    },
    {
      title: 'asd',
      name: 'Price',
      type: 'asd',
      fields: priceFields
    }
  ]
  return (
    <main>
      <ExploreSidebar
        // @ts-ignore
        items={theItems}
        initialValues={{ test: 'asda' }}
        onFilter={handleFilter}
      />
      <h1 className="text-2xl font-bold text-center">
        Confira nossas bolsas de crochê 🧶
      </h1>
      <ProductList />
      <InstagramSection />
    </main>
  )
}
