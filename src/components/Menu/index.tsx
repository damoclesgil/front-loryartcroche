import Link from 'next/link'
import ThemeSwitcher from '../ThemeSwitcher'

const Menu = () => {
  return (
    <div className="flex items-center w-full max-w-lg justify-between pt-6">
      <Link href="/" className="no-underline text-purple-600 dark:text-red-900">
        Início
      </Link>
      <Link href="/produtos" className="no-underline text-purple-600">
        Produtos
      </Link>
      <ThemeSwitcher />
    </div>
  )
}
export default Menu
