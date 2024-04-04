'use client'

// import { useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'

import Empty from '@/components/Empty'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

const Cart = () => {
  //   const { data: session } = useSession()

  return (
    <>
      <Empty description="" title="" />

      <div className="grid max-w-3xl gap-4 px-4 mx-auto lg:gap-8">
        <div className="flex items-center gap-4">
          <h2 className="font-semibold text-2xl">Shopping Cart</h2>
          <span className="text-sm font-medium">2 items</span>
        </div>
        <div className="grid gap-4">
          <div className="flex items-start gap-4">
            <div className="flex items-start gap-4">
              <Image
                alt="Product image"
                className="aspect-square rounded-lg object-cover border dark:border-gray-800"
                height="120"
                src="img/products/placeholder.svg"
                width="120"
              />
              <div className="grid gap-1.5">
                <h2 className="font-semibold text-base leading-none sm:text-xl">
                  Suede Tote Bag
                </h2>
                <div className="flex items-center gap-2">
                  <Button className="w-6 h-6" size="icon" variant="ghost">
                    <MinusIcon className="w-4 h-4" />
                    <span className="sr-only">Decrease quantity</span>
                  </Button>
                  <Input
                    className="w-12 border-0 border-b bg-gray-100/40 appearance-none text-center dark:bg-gray-800/40"
                    min="1"
                    type="number"
                    value="1"
                  />
                  <Button className="w-6 h-6" size="icon" variant="ghost">
                    <PlusIcon className="w-4 h-4" />
                    <span className="sr-only">Increase quantity</span>
                  </Button>
                </div>
                <Button size="default">Save for later</Button>
                <Button size="default">Remove</Button>
              </div>
            </div>
            <div className="text-lg font-semibold ml-auto">$89</div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex items-start gap-4">
              <Image
                alt="Product image"
                className="aspect-square rounded-lg object-cover border dark:border-gray-800"
                height="120"
                src="img/products/placeholder.svg"
                width="120"
              />
              <div className="grid gap-1.5">
                <h2 className="font-semibold text-base leading-none sm:text-xl">
                  Leather Crossbody Bag
                </h2>
                <div className="flex items-center gap-2">
                  <Button className="w-6 h-6" size="icon" variant="ghost">
                    <MinusIcon className="w-4 h-4" />
                    <span className="sr-only">Decrease quantity</span>
                  </Button>
                  <Input
                    className="w-12 border-0 border-b bg-gray-100/40 appearance-none text-center dark:bg-gray-800/40"
                    min="1"
                    type="number"
                    value="1"
                  />
                  <Button className="w-6 h-6" size="icon" variant="ghost">
                    <PlusIcon className="w-4 h-4" />
                    <span className="sr-only">Increase quantity</span>
                  </Button>
                </div>
                <Button size="lg">Save for later</Button>
                <Button size="lg">Remove</Button>
              </div>
            </div>
            <div className="text-lg font-semibold ml-auto">$129</div>
          </div>
        </div>
        <Card className="p-6">
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>$218</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Shipping</span>
              <span>$10</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Taxes</span>
              <span>$22</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">$250</span>
            </div>
          </div>
          <Button className="w-full" size="lg">
            Proceed to Checkout
          </Button>
        </Card>
      </div>
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

export default Cart
