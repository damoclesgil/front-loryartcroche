import { Metadata } from 'next'
import CartList from './CartList'
import Base from '@/templates/Base'
import { defaultMetadata } from '@/utils/constant'

export const metadata: Metadata = {
  title: `${defaultMetadata.title} - Carrinho`
}

export default function CartPage() {
  return (
    <>
      <Base>
        <CartList />
      </Base>
    </>
  )
}
