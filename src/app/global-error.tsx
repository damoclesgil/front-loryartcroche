'use client'

import Empty from '@/components/Empty'
import Base from '@/templates/Base'

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <Base>
          <Empty
            title=""
            description="
            Não conseguimos trazer nenhuma dado 🥲, por favor tente novamente dentro de alguns minutos.
            "
          />
          {/* <h2>Something went wrong!</h2> */}
          {/* <button onClick={() => reset()}>Try again</button> */}
        </Base>
      </body>
    </html>
  )
}
