'use client'

import { Button } from '@/components/ui/button'
import { TextError } from '@/components/ui/text-error'
import { useCart } from '@/hooks/use-cart'
import { createPaymentIntent } from '@/utils/stripe/methods'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import {
  StripeCardElementChangeEvent,
  StripeCardElementOptions
} from '@stripe/stripe-js'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

export default function PaymentForm() {
  const { items } = useCart()
  const { data: session } = useSession()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  const stripe = useStripe()
  const elements = useElements()
  const [freeProducts, setFreeProducts] = useState(false)

  useEffect(() => {
    async function setPaymentMode() {
      if (items.length) {
        // const idsCart = items.map((product) => {
        //   return {
        //     id: product.id
        //   }
        // })
        const data = await createPaymentIntent({
          items,
          token: session?.jwt as string
        })

        if (data.freeProducts) {
          setFreeProducts(true)
          return
        }

        if (data.error) {
          setError(data.error)
        } else {
          // senão o paymentIntent foi válido
          // setClientSecret
          console.log(data.client_secret)
          setFreeProducts(false)
          setClientSecret(data.client_secret)
        }
      }
    }

    setPaymentMode()
  }, [items])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const idsCart = items.map((product) => {
      return {
        id: product.id
      }
    })
    const cardElement = elements?.getElement('card')

    try {
      if (!stripe || !cardElement) return null
      setLoading(true)

      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/ordem/create-payment-intent`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session?.jwt}`
          },
          body: JSON.stringify({ cart: idsCart })
        }
      )
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          console.log(data.clientSecret)
          return setClientSecret(data.clientSecret)
        })

      await stripe?.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement }
      })
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  const options: StripeCardElementOptions = {
    hidePostalCode: true,
    style: {
      base: {
        fontSize: '16px'
      }
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <CardElement options={options} onChange={handleChange} />
      {error && <TextError>{error}</TextError>}

      {/* <h3 className="mb-4">Pix</h3> */}

      <div className="mt-4 flex justify-end">
        <Button
          type="submit"
          disabled={items.length === 0 && (disabled || !!error || loading)}
        >
          Comprar
        </Button>
      </div>
    </form>
  )
}
