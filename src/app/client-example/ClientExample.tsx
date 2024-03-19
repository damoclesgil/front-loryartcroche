'use client'

import { useSession } from 'next-auth/react'
import { useState } from 'react'

const UpdateForm = () => {
  const { data: session, update } = useSession()
  const [name, setName] = useState(`New ${session?.user?.name}` ?? '')

  if (!session?.user) return null
  return (
    <>
      <h2 className="text-xl font-bold">Updating the session</h2>
      {/* <form
        onSubmit={async () => {
          if (session) {
            const newSession = await update({
              ...session,
              user: { ...session.user, name }
            })
            console.log({ newSession })
          }
        }}
        className="flex items-center space-x-2 w-full max-w-sm"
      ></form> */}
    </>
  )
}

export default function ClientExample() {
  const { data: session, status } = useSession()

  console.log(session)

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Client Side Rendering</h1>
      {JSON.stringify(session)}
      <UpdateForm />
    </div>
  )
}
