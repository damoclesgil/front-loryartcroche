'use client'

export function shareButton() {
  const shareProduct = async (product: any) => {
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

  return <div>saher</div>
}
