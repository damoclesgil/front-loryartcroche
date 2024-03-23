import { SessionProvider } from 'next-auth/react'
import ClientExample from './ClientExample'

export default async function ClientPage() {
  return (
    <>
      <SessionProvider>
        <ClientExample />
      </SessionProvider>
    </>
  )
}
