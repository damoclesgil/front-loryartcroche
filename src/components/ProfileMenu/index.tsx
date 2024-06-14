'use client'

import { NextRoutes } from '@/utils/constant'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const ProfileMenu = () => {
  const pathname = usePathname()

  const defaultLinkClasses =
    'cursor-pointer decoration-inherit flex items-center px-2 py-3 transition-colors hover:bg-primary block w-full'

  const activeLinkClasses = 'bg-primary'

  const descativeLinkClasses = 'bg-transparent'

  return (
    <nav className="flex lg:border lg:border-primary flex-col lg:items-center lg:max-w-[15rem] lg:max-h-[6.1rem] mb-3 lg:mb-0">
      <Link
        href={NextRoutes.profile}
        className={`${defaultLinkClasses} ${
          pathname === NextRoutes.profile
            ? activeLinkClasses
            : descativeLinkClasses
        }`}
      >
        <Icon icon="ic:outline-account-circle" fontSize={24} />

        <span className="ml-2">Meu Perfil</span>
      </Link>

      <Link
        href={NextRoutes.myOrders}
        className={`${defaultLinkClasses} ${
          pathname === NextRoutes.myOrders
            ? activeLinkClasses
            : descativeLinkClasses
        }`}
      >
        <Icon icon="material-symbols:format-list-bulleted" fontSize={24} />

        <span className="ml-2">Minhas Compras</span>
      </Link>

      {/* <Link href={NextRoutes.cart}>
        <FormatListBulleted size={24} />
        <span>Meus Cartões</span>
      </Link> */}
      {/* <button
        className={defaultLinkClasses}
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
        <span className="ml-2">Sign out</span>
      </button> */}
    </nav>
  )
}

export default ProfileMenu
