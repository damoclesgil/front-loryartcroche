import { Metadata } from 'next'
import CartList from './CartList'
import Base from '@/templates/Base'

export const metadata: Metadata = {
  title: 'Lory Art Crochê | Carrinho'
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
