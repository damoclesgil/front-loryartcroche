'use client'

import { CartProvider } from '@/hooks/use-cart'
import { WishlistProvider } from '@/hooks/use-wishlist'
import { ThemeProvider } from 'next-themes'
import { useState, useEffect } from 'react'

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  /* RUN IN A CLIENT SIDE */
  return (
    <ThemeProvider
      defaultTheme="light"
      enableColorScheme
      enableSystem
      attribute="class"
    >
      <CartProvider>
        <WishlistProvider>{children}</WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  )
}
