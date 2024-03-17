'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useState } from 'react'
// import { useMutation } from '@apollo/client'

export const AllProducts = ({
  products
}: {
  products: {
    id: string
  }
}) => {
  const router = useRouter()
  const pathname = usePathname()
  const showResults = useSearchParams().get('results') === 'true'

  const [loading, setLoading] = useState(false)

  console.log(pathname)
  return (
    <>
      Aqui está pegando do servidor no caso tanto é que pode ver no console log
      na parte de fetch api não exibe nenhuma query.
      <div>{JSON.stringify(products)}</div>
    </>
  )
}
