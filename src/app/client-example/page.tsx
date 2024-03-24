import { SessionProvider } from 'next-auth/react'
import ClientExample from './ClientExample'

export default async function ClientPage() {
  return (
    <>
      <p>oi</p>
      <SessionProvider>
        <ClientExample />
      </SessionProvider>
    </>
  )
}
