'use client'

import { NextRoutes } from '@/utils/constant'
import { ExitToApp, FormatListBulleted } from '@styled-icons/material-outlined'
import { AccountCircle } from '@styled-icons/remix-line'
import Link from 'next/link'
import { Button } from '../ui/button'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const ProfileMenu = () => {
  const { push } = useRouter()

  return (
    <nav className="flex border border-primary md:flex-col h-[10rem]">
      <Link
        href={NextRoutes.profile}
        className="cursor-pointer decoration-inherit flex items-center px-2 py-3 transition-colors hover:bg-primary"
      >
        <AccountCircle size={24} />
        <span>Meu Perfil</span>
      </Link>

      <Link
        className="cursor-pointer decoration-inherit flex items-center px-2 py-3 transition-colors hover:bg-primary"
        href={NextRoutes.cart}
      >
        <FormatListBulleted size={24} />
        <span>Minhas Compras</span>
      </Link>

      {/* <Link href={NextRoutes.cart}>
        <FormatListBulleted size={24} />
        <span>Meus Cartões</span>
      </Link> */}

      <Button
        className="cursor-pointer text-left decoration-inherit hover:no-underline flex items-center justify-start px-2 py-3 transition-colors text-gray-900 hover:bg-primary"
        variant={'link'}
        disabled={true}
        onClick={async () => {
          const data = await signOut({
            redirect: false,
            callbackUrl: NextRoutes.home
          })
          push(data.url)
        }}
      >
        <ExitToApp size={24} title="Sign out" />
        <span>Sign out</span>
      </Button>
    </nav>
  )
}

export default ProfileMenu
