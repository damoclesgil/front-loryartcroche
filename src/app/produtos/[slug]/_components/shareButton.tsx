'use client'

import { ProdutoFragmentFragment } from '@/graphql/types'
import formatPrice from '@/utils/format-price'
import { Share1Icon } from '@radix-ui/react-icons'

export function ShareButton(product: ProdutoFragmentFragment) {
  const shareProduct = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.nome || '',
          text: `Check out this product: ${product.nome} - ${formatPrice(Number(product.preco))}`,
          url: window.location.href
        })
        console.log('Product shared successfully')
      } catch (error) {
        console.error('Error sharing product:', error)
      }
    }
  }

  return (
    <button
      className="mb-2 text-left flex items-center"
      onClick={() => shareProduct()}
    >
      <Share1Icon className="w-4 h-4 mr-2 " />
      <span>Compartilhar</span>
    </button>
  )
}
