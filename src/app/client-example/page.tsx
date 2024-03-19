import { auth } from '@/services/auth'
// import { SessionProvider } from 'next-auth/react'
// import ClientExample from './ClientExample'

export default async function ClientPage() {
  const session = await auth()
  console.log(session)
  if (session?.user) {
    // session.user = {
    //   // name: session.user.name,
    //   // email: session.user.email
    //   // image: session.user.image
    // }
  }

  return (
    <>
      <p>oi</p>
      <p>
        email:
        {session?.user?.email}
      </p>
      <pre>{JSON.stringify(session?.user, null, 1)}</pre>
    </>
  )
}
