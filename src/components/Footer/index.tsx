'use client'

import Link from 'next/link'
import Logo from '../Logo'

import {
  Instagram as InstagramIcon,
  Whatsapp as WhatsIcon
} from '@styled-icons/boxicons-logos'
import { links, NextRoutes } from '@/utils/constant'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <div className="bg-[#fff5ed] w-full pt-4 mt-12">
        <div className="grid items-center md:items-start w-full justify-center md:justify-between mt-7 grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-xl mx-auto">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="no-underline mb-4">
              <Logo />
            </Link>
          </div>

          <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
            <h2 className="text-lg font-semibold mb-2">Links</h2>
            <Link
              href={NextRoutes.home}
              className="no-underline text-primary hover:text-primary-darker mb-2"
            >
              Início
            </Link>
            <Link
              href={NextRoutes.products}
              className="no-underline text-primary hover:text-primary-darker mb-2"
            >
              Produtos
            </Link>
            <Link
              href={NextRoutes.favorites}
              className="no-underline text-primary hover:text-primary-darker"
            >
              Favoritos
            </Link>
            {/* <Link
            href="mailto:loryartcroche@gmail.com"
            className="no-underline text-purple-600"
          >
            loryartcroche@gmail.com
          </Link> */}
          </div>
          <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
            <h2 className="text-lg font-semibold">Redes Sociais</h2>
            <Link
              href={links.Instagram}
              target="_blank"
              className="no-underline text-primary hover:text-primary-darker mt-2 flex items-center"
            >
              <InstagramIcon size={22} />
              <p className="ml-2">Instagram</p>
            </Link>
            <Link
              href={`${links.WhatsApp}?text=Ol%C3%A1%2C+estou+dando+uma+olhada+aqui+no+site`}
              target="_blank"
              className="no-underline text-primary hover:text-primary-darker mt-2 flex items-center"
            >
              <WhatsIcon size={22} />
              <p className="ml-2">WhatsApp {links.Phone}</p>
            </Link>
          </div>
        </div>
        <div className="text-center flex justify-center items-center w-full mt-8 pb-6">
          <p className="text-sm text-gray-600">
            Lory Art Crochê {currentYear} © Todos os direitos reservados.
          </p>
        </div>
      </div>
    </>
  )
}
export default Footer
