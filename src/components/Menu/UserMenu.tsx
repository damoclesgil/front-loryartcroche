'use client'

import { useSession, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { NextRoutes } from '@/utils/constant'
import { DropdownMenuLabel } from '@radix-ui/react-dropdown-menu'
import Image from 'next/image'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'

const UserMenu = () => {
  const { data: session, status } = useSession()

  const desLogar = async () => {
    await signOut({ callbackUrl: NextRoutes.signIn, redirect: false })
  }

  return (
    <>
      {status === 'authenticated' ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="rounded-full focus:ring-2 focus:ring-gray-200 text-gray-700"
              id="profile-menu"
              size="icon"
              variant="ghost"
            >
              <UserIcon className="w-6 h-6" />
              {/* <Image
                alt="Avatar"
                className="rounded-full"
                height={32}
                width={32}
                src="img/products/placeholder.svg"
                style={{
                  aspectRatio: '32/32',
                  objectFit: 'cover'
                }}
              /> */}
              <span className="sr-only">Toggle user menu</span>
            </Button>
            {/* <p className="ml-2">{session?.user?.name}</p> */}
            {/* <ChevronDownIcon className="ml-2 h-4 w-4" /> */}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full ">
            <DropdownMenuLabel className="mr-2.5 py-2 px-2 text-sm w-full">
              {session?.user?.name}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <UserIcon className="w-4 h-4 mr-2.5" />
              <Link href={NextRoutes.profile}>Minha Conta</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FavoriteBorder className="w-4 h-4 mr-2.5" />
              <Link href={NextRoutes.favorites}>Favoritos</Link>
            </DropdownMenuItem>
            {/* <DropdownMenuSeparator /> */}
            <DropdownMenuItem className="cursor-pointer" onClick={desLogar}>
              <LogOutIcon className="w-4 h-4 mr-2.5" />
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href={NextRoutes.signIn}>Entre ou cadastre-se</Link>
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

function LogOutIcon(props: any) {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}
export default UserMenu
