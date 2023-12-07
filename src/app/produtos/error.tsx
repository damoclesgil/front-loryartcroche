'use client'

import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Error({ error, reset }: any) {
  React.useEffect(() => {
    console.log('logging error:', error)
  }, [error])

  return (
    <div>
      <h2>Erro ao carregar a página de produtos</h2>
      <p>{error?.message}</p>
      <div>
        <button onClick={() => reset()}>Try Again</button>
      </div>
    </div>
  )
}
