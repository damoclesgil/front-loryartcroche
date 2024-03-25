'use client'
import { CartProvider } from '@/hooks/use-cart'
// import { ApolloWrapper } from '@/utils/apolloWrapper'
// import { ProductsProvider } from '@/hooks/use-products'
import { ThemeProvider } from 'next-themes'
import { useState, useEffect } from 'react'
// import { Provider as AuthProvider } from 'next-auth/providers'
export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    // <AuthProvider session={children}>
    <ThemeProvider
      defaultTheme="light"
      enableColorScheme
      enableSystem
      attribute="class"
    >
      {/* <ApolloWrapper> */}
      <CartProvider>
        {children}
        {/* <ProductsProvider>{children}</ProductsProvider> */}
      </CartProvider>
      {/* </ApolloWrapper> */}
    </ThemeProvider>
    // </AuthProvider>
  )
}
