'use client'

// import { useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenu
} from '@/components/ui/dropdown-menu'
// import Link from 'next/link'
// import { NextRoutes } from '@/utils/constant'
import { DropdownMenuLabel } from '@radix-ui/react-dropdown-menu'
import Empty from '@/components/Empty'
import { Card } from '../ui/card'
import { Input } from '../ui/input'
import Image from 'next/image'
import Loader from '@/components/Loader'

const CartMenu = () => {
  //   const { data: session } = useSession()

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="w-8 h-8 rounded-full text-gray-600  border border-gray-200 dark:border-gray-800"
            id="cart"
            size="icon"
            variant="ghost"
          >
            <ShoppingBagIcon className="w-4 h-4" />
            <span className="sr-only">Toggle cart</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full">
          <DropdownMenuLabel className="mr-2.5 py-2 px-2 text-sm w-full">
            asda
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          {/* <Loader /> */}

          {/* <Empty description="" title="" /> */}

          <div>
            <div className="flex flex-col h-[300px] overflow-auto gap-4 p-4">
              <div className="flex items-center gap-4">
                <Image
                  alt="Thumbnail"
                  className="aspect-square rounded-md object-cover"
                  height="80"
                  src="img/products/placeholder.svg"
                  width="80"
                />
                <div className="flex-1 grid gap-1 text-sm">
                  <div className="font-medium">Leather Tote Bag</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    $99.00
                  </div>
                </div>
                <div className="flex items-center">
                  <Button className="w-6 h-6" size="icon" variant="ghost">
                    <MinusIcon className="w-4 h-4" />
                    <span className="sr-only">Remove one item</span>
                  </Button>
                  <div className="border w-8 h-8 flex items-center justify-center">
                    1
                  </div>
                  <Button className="w-6 h-6" size="icon" variant="ghost">
                    <PlusIcon className="w-4 h-4" />
                    <span className="sr-only">Add one item</span>
                  </Button>
                </div>
              </div>
              <div />
              <div className="flex items-center gap-4">
                <Image
                  alt="Thumbnail"
                  className="aspect-square rounded-md object-cover"
                  height="80"
                  src="img/products/placeholder.svg"
                  width="80"
                />
                <div className="flex-1 grid gap-1 text-sm">
                  <div className="font-medium">Sling Crossbody Bag</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    $79.00
                  </div>
                </div>
                <div className="flex items-center">
                  <Button className="w-6 h-6" size="icon" variant="ghost">
                    <MinusIcon className="w-4 h-4" />
                    <span className="sr-only">Remove one item</span>
                  </Button>
                  <div className="border w-8 h-8 flex items-center justify-center">
                    2
                  </div>
                  <Button className="w-6 h-6" size="icon" variant="ghost">
                    <PlusIcon className="w-4 h-4" />
                    <span className="sr-only">Add one item</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 p-4 border-t">
              <div className="flex items-center justify-between">
                <div>Subtotal</div>
                <div className="font-medium">$227.00</div>
              </div>
              <Button className="w-full" size="sm">
                Checkout
              </Button>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

function MinusIcon(props: any) {
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
      <path d="M5 12h14" />
    </svg>
  )
}

function PlusIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}

function ShoppingBagIcon(props: any) {
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
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}

export default CartMenu
