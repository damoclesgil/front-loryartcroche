'use client'

import { useSession, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import { ChevronDownIcon } from '@radix-ui/react-icons'

const UserMenu = () => {
  const { data: session, status } = useSession()

  const deslogar = async () => {
    await signOut({ callbackUrl: '/auth', redirect: false })
  }

  return (
    <>
      {status === 'authenticated' ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-9" variant="outline">
              <UserIcon className="h-4 w-4" />
              <p className="ml-2">{session?.user?.name}</p>
              <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer" onClick={deslogar}>
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href="/auth">Entrar</Link>
      )}
    </>
  )
}

function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

export default UserMenu
