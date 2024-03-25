'use client'

// import { signOut } from '@/services/auth'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

export default function ClientExample() {
  const { data: session, status } = useSession()

  const deslogar = async () => {
    await signOut({ callbackUrl: '/auth', redirect: false })
  }

  return (
    <div className="flex flex-col gap-4">
      <Link href="/auth">Auth page</Link>
      <button onClick={() => deslogar()}>Deslogar</button>
      <div>
        {session?.user?.name && session?.user?.image ? (
          <Image
            src={session?.user?.image}
            alt={session?.user?.name}
            width={32}
            height={32}
          ></Image>
        ) : (
          ''
        )}
      </div>

      <h1 className="text-3xl font-bold">Client Side Rendering</h1>
      {JSON.stringify(session, null, 1)}
    </div>
  )
}
