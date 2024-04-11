'use client'

import Link from 'next/link'
// import ThemeSwitcher from '../ThemeSwitcher'
import Logo from '@/components/Logo'
import { useState } from 'react'
import UserMenu from './UserMenu'
import { NextRoutes } from '@/utils/constant'
import CartMenu from './CartMenu'
import { FavoriteBorder } from '@styled-icons/material-outlined'
import { Button, buttonVariants } from '../ui/button'
import NavList from './NavList'
// import SearchProducts from './SearchProducts'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 border-b dark:border-gray-500">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <Link
            href={NextRoutes.home}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Logo size="small" />
          </Link>
          <NavList hiddenMobile={true} />
        </div>
        <div className="flex md:order-2 items-center">
          {/* Mobile */}
          {/* <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 text-sm me-1 w-10 h-10 rounded-full"
          >
            <Search className="w-6 h-6" />
            <span className="sr-only">Search</span>
          </button> */}
          <Button asChild>
            <Link
              className={buttonVariants({
                variant: 'ghost',
                className: 'w-10 h-10 rounded-full text-gray-700 block',
                size: 'icon'
              })}
              href={NextRoutes.favorites}
            >
              <FavoriteBorder className="w-6 h-6" />
            </Link>
          </Button>

          <div className="ml-2">
            <CartMenu />
          </div>
          {/* {status === 'authenticated' && } */}

          {/* hidden md:flex */}
          <div className="relative flex items-center">
            <div className="ml-2 mr-3">
              <UserMenu />
            </div>
          </div>

          {/* Mobile */}
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-700 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? 'block' : 'hidden'
          }`}
          id="navbar-search"
        >
          <div className="relative mt-8 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>

          <NavList hiddenMobile={false} />
        </div>
      </div>
    </nav>
  )
}
export default Menu
