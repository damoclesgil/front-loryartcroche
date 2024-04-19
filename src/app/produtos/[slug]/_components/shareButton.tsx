'use client'

import formatPrice from '@/utils/format-price'
import { Share1Icon } from '@radix-ui/react-icons'

// export type shareButtonProps = {
//   name: string,
//   price: number
// }

export function ShareButton(product: any) {
  const shareProduct = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: `Check out this product: ${product.name} - ${formatPrice(Number(product.price))}`,
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
