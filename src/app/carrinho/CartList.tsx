'use client'

import { Button } from '@/components/ui/button'
import Empty from '@/components/Empty'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { useCart } from '@/hooks/use-cart'
import formatPrice from '@/utils/format-price'
import { Loader } from '@styled-icons/remix-line'
import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './_components/CheckoutForm'
import { useSession } from 'next-auth/react'

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
)

const CartList = () => {
  const [clientSecret, setClientSecret] = React.useState('')
  const { items, total, loading } = useCart()
  // const { data: session } = useSession()

  // console.log(session?.user?.jwt)
  // React.useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads
  //   fetch(
  //     `${process.env.NEXT_PUBLIC_API_URL}/api/ordem/create-payment-intent`,
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${session?.user?.jwt}`
  //       },
  //       body: JSON.stringify({ produtos: [{ id: '1' }] })
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret))
  // }, [])

  const appearance = {
    theme: 'stripe'
  }
  const options = {
    clientSecret,
    appearance
  }

  if (loading) {
    return (
      <>
        <Loader />
      </>
    )
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
                <div className="flex items-start gap-4" key={product.id}>
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
                        <Button className="w-6 h-6" size="icon" variant="ghost">
                          <MinusIcon className="w-4 h-4" />
                          <span className="sr-only">Diminuir Quantidade</span>
                        </Button>
                        <Input
                          className="w-12 border-0 border-b bg-gray-100/40 appearance-none text-center dark:bg-gray-800/40"
                          min="1"
                          type="number"
                          defaultValue={1}
                        />
                        <Button className="w-6 h-6" size="icon" variant="ghost">
                          <PlusIcon className="w-4 h-4" />
                          <span className="sr-only">Aumentar Quantidade</span>
                        </Button>
                      </div>
                      <Button size="default">Salvar para depois</Button>
                      <Button size="default">Remover</Button>
                    </div>
                  </div>
                  <div className="text-lg font-semibold ml-auto">
                    {' '}
                    {formatPrice(Number(product.price))}{' '}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <Empty
              description="Nenhum Produto foi adicionado ao carrinho"
              title="Sem produtos aqui :("
            />
          )}
        </div>
        <Card className="p-6">
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">{total}</span>
            </div>
          </div>

          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
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

export default CartList
