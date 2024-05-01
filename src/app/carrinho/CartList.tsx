'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import Empty from '@/components/Empty'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { useCart } from '@/hooks/use-cart'
import formatPrice from '@/utils/format-price'
import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import PaymentForm from './_components/PaymentForm'
import { Trash2 } from '@styled-icons/feather'

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`,
  {
    locale: 'pt-BR'
  }
)

const CartList = () => {
  const {
    items,
    total,
    loading,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    incrementQuantityInputField
  } = useCart()

  // setQuantity
  const maxQtyIncrement = 30

  const handleInputIncrement = (
    e: React.FormEvent<HTMLInputElement>,
    id: string
  ) => {
    // @ts-ignore
    const value = parseInt(e.target?.value)
    // console.log(value)
    if (value > 0 && value <= maxQtyIncrement) {
      incrementQuantityInputField(id, value)
    }
  }

  return (
    <>
      <div className="grid max-w-3xl gap-4 px-4 mx-auto lg:gap-8">
        <div className="flex items-center gap-4">
          <h2 className="font-semibold text-2xl">Carrinho de Compras</h2>
          <span className="text-sm font-medium">{items.length} Produtos</span>
        </div>
        <div className="grid gap-4">
          {items.length ? (
            <>
              {items.map((product) => (
                <div
                  className="flex items-start gap-4"
                  key={`cart_${product.id}`}
                >
                  <div className="flex items-start gap-4">
                    <Image
                      alt={product.name}
                      className="aspect-square rounded-lg object-cover border dark:border-gray-800"
                      height="120"
                      src={product.img}
                      width="120"
                    />
                    <div className="grid gap-1.5">
                      <h2 className="font-semibold text-base leading-none sm:text-xl">
                        {product.name}
                      </h2>
                      <div className="flex items-center gap-2">
                        <Button
                          className={buttonVariants({
                            variant: 'ghost',
                            className: `w-6 h-6 ${product.qty === 0 ? '!cursor-not-allowed pointer-events-auto' : ''}`,
                            size: 'icon'
                          })}
                          size="icon"
                          variant="ghost"
                          title="Diminuir Quantidade"
                          disabled={product.qty === 0}
                          onClick={() => decrementQuantity(product.id)}
                        >
                          <MinusIcon className="w-4 h-4" />
                          <span className="sr-only">Diminuir Quantidade</span>
                        </Button>
                        <Input
                          className="w-12 border-0 bg-transparent appearance-none text-center dark:bg-gray-800/40"
                          type="number"
                          pattern="[0-9]{0,5}"
                          onChange={(event) =>
                            handleInputIncrement(event, product.id)
                          }
                          value={product.qty}
                        />
                        <Button
                          className="w-6 h-6"
                          title="Aumentar Quantidade"
                          size="icon"
                          variant="ghost"
                          onClick={() => incrementQuantity(product.id)}
                        >
                          <PlusIcon className="w-4 h-4" />
                          <span className="sr-only">Aumentar Quantidade</span>
                        </Button>
                      </div>
                      {/* <Button size="default">Salvar para depois</Button> */}
                      <div className="ml-[-1rem]">
                        {/* disabled={loading} */}
                        <Button
                          size="default"
                          variant={'link'}
                          onClick={() => removeFromCart(product.id)}
                        >
                          <Trash2 size={20} className="mr-1" />
                          remover
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="text-lg font-semibold ml-auto">
                    {' '}
                    {formatPrice(Number(product.price))}{' '}
                  </div>
                </div>
              ))}

              <Card className="mb-8 p-6 mt-5">
                <div className="grid gap-2 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-2xl">Total</span>
                    <span className="font-semibold text-2xl">{total}</span>
                  </div>
                </div>

                <Elements stripe={stripePromise}>
                  <PaymentForm />
                </Elements>
              </Card>
            </>
          ) : (
            <Empty
              description="Nenhum Produto foi adicionado ao carrinho"
              title="Sem produtos aqui :("
            />
          )}
        </div>
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

export default CartList
