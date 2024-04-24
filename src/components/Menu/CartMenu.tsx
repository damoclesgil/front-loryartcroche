'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenu
} from '@/components/ui/dropdown-menu'
import Empty from '@/components/Empty'
import { Input } from '../ui/input'
import Image from 'next/image'
// import Loader from '@/components/Loader'
import Link from 'next/link'
import { NextRoutes } from '@/utils/constant'
import { useCart } from '@/hooks/use-cart'
import formatPrice from '@/utils/format-price'

const CartMenu = () => {
  const { items, total, removeFromCart } = useCart()

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {/*  border border-gray-200 dark:border-gray-800 */}
          <div className="relative">
            <Button
              className="w-10 h-10 rounded-full text-gray-700"
              id="cart"
              size="icon"
              variant="ghost"
            >
              <ShoppingBagIcon className="w-6 h-6" />
              <span className="sr-only">Toggle cart</span>
            </Button>
            {items.length !== 0 && (
              <>
                <div className="absolute bg-primary top-[1px] right-[1px] text-white font-bold flex items-center text-xs rounded-full justify-center w-5 h-5">
                  <p>{items.length}</p>
                </div>
              </>
            )}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full">
          <div>
            <div className="flex flex-col overflow-auto gap-4 p-4 max-h-[350px] scrollbar-thin-horizontal">
              {items.length ? (
                <>
                  {items.map((product) => (
                    <div className="flex items-center gap-4" key={product.id}>
                      <Image
                        alt={product.name}
                        className="aspect-square rounded-md object-cover"
                        height="80"
                        src={product.img}
                        width="80"
                      />
                      <div>
                        <div className="text-md font-medium">
                          {product.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {formatPrice(Number(product.price))}
                        </div>
                        <Button
                          size="sm"
                          variant="link"
                          onClick={() => removeFromCart(product.id)}
                        >
                          <span>Remover</span>
                        </Button>
                      </div>
                      {/* <div className="flex items-center">
                          <Button
                            className="w-6 h-6"
                            size="icon"
                            variant="ghost"
                          >
                            <MinusIcon className="w-4 h-4" />
                            <span className="sr-only">Remover um item</span>
                          </Button>
                          <div className="border w-8 h-8 flex items-center justify-center">
                            1
                          </div>
                          <Button
                            className="w-6 h-6"
                            size="icon"
                            variant="ghost"
                          >
                            <PlusIcon className="w-4 h-4" />
                            <span className="sr-only">Adicionar um item</span>
                          </Button>
                        </div> */}
                    </div>
                  ))}
                </>
              ) : (
                <Empty
                  description="Nenhum produto foi adicionado ao carrinho"
                  title="Sem produtos aqui 🥲"
                />
              )}
              <div />
            </div>
            {items.length !== 0 && (
              <div className="flex flex-col gap-2 p-4 border-t">
                <div className="flex items-center justify-between">
                  <div>Total</div>
                  <div className="font-medium">{total}</div>
                </div>
                <Button asChild>
                  <Link
                    className={buttonVariants({
                      variant: 'default',
                      className: 'w-full font-bold',
                      size: 'default'
                    })}
                    href={`${NextRoutes.cart}`}
                  >
                    Comprar
                  </Link>
                </Button>
              </div>
            )}
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
