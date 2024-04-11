'use client'

import Link from 'next/link'
import { NextRoutes } from '@/utils/constant'
import { usePathname } from 'next/navigation'

const NavList = ({ hiddenMobile = false }) => {
  const pathname = usePathname()

  const defaultLinkClasses =
    'block py-2 px-3 rounded md:bg-transparent md:primary md:p-0 md:dark:bg-transparent hover:text-primary'

  const activeLinkClasses =
    'text-primary bg-gray-100 dark:bg-gray-700 md:hover:bg-transparent'

  const descativeLinkClasses =
    'text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 md:dark:hover:bg-transparent md:hover:bg-transparent dark:text-white md:dark:text-bg-gray-700 dark:hover:text-white'

  return (
    <>
      <ul
        className={`${hiddenMobile ? 'hidden md:flex ml-6' : 'md:hidden flex'} flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}
      >
        <li>
          <Link
            href={NextRoutes.home}
            className={`${defaultLinkClasses} ${
              pathname === NextRoutes.home
                ? activeLinkClasses
                : descativeLinkClasses
            }`}
            aria-current="page"
          >
            Início
          </Link>
        </li>
        <li>
          <Link
            href={NextRoutes.products}
            className={`${defaultLinkClasses} ${
              pathname === NextRoutes.products
                ? activeLinkClasses
                : descativeLinkClasses
            }`}
          >
            Produtos
          </Link>
        </li>
      </ul>
    </>
  )
}

export default NavList
