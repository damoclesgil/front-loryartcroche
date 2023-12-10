import React from 'react'

export const metadata = {
  title: 'Lory - Produtos',
  description: 'Produtos'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>{children}</div>
    </>
  )
}
