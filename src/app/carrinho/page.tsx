import { Metadata } from 'next'
import Cart from './cart'
import Base from '@/templates/Base'

export const metadata: Metadata = {
  title: 'Lory Art Crochê | Carrinho'
}

export default function CartPage() {
  return (
    <>
      <Base>
        <Cart />
      </Base>
    </>
  )
}
