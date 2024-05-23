import Link from 'next/link'
import { NextRoutes } from '@/utils/constant'
import { usePathname } from 'next/navigation'

const navLinks = [
  {
    name: 'Início',
    path: NextRoutes.home
  },
  {
    name: 'Produtos',
    path: NextRoutes.products
  }
]

const NavList = ({ hiddenMobile = false }) => {
  const pathname = usePathname()

  const defaultLinkClasses =
    'block py-2 px-3 rounded md:bg-transparent md:primary mt-2 md:mt-0 md:p-0 md:dark:bg-transparent hover:text-primary'

  const activeLinkClasses =
    'text-primary bg-gray-100 dark:bg-gray-700 md:hover:bg-transparent'

  const descativeLinkClasses =
    'text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 md:dark:hover:bg-transparent md:hover:bg-transparent dark:text-white md:dark:text-bg-gray-700 dark:hover:text-white'

  return (
    <>
      <ul
        className={`${hiddenMobile ? 'hidden md:flex ml-6' : 'md:hidden flex'} flex-col px-2 pb-2 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}
      >
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              href={link.path}
              className={`${defaultLinkClasses} ${
                pathname === link.path
                  ? activeLinkClasses
                  : descativeLinkClasses
              }`}
              aria-current="page"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default NavList
