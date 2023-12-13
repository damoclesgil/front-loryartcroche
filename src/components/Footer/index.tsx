import Link from 'next/link'
import Logo from '../Logo'

const Footer = () => {
  return (
    <div className="grid items-center md:items-start w-full justify-center md:justify-between mt-7 grid-cols-1 md:grid-cols-4 gap-6">
      <div className="flex flex-col items-center md:items-start">
        <Link href="/" className="no-underline mb-4">
          <Logo />
        </Link>
        <Link href="/produtos" className="no-underline text-purple-600">
          Produtos
        </Link>
      </div>
      <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
        <Link href="/" className="no-underline text-purple-600 mb-2">
          Início
        </Link>
        <Link href="/produtos" className="no-underline text-purple-600">
          Produtos
        </Link>
      </div>
      <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
        <Link href="/" className="no-underline text-purple-600 mb-2">
          Início
        </Link>
        <Link href="/produtos" className="no-underline text-purple-600">
          Produtos
        </Link>
      </div>
      <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
        <h2 className="text-lg font-semibold">Redes Sociais</h2>
        <Link href="/" className="no-underline text-purple-600 mb-2">
          Início
        </Link>
        <Link href="/produtos" className="no-underline text-purple-600">
          Produtos
        </Link>
      </div>
    </div>
  )
}
export default Footer
