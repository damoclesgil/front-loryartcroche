'use client'

import { Button } from '@/components/ui/button'
import { TextError } from '@/components/ui/text-error'
import { useCart } from '@/hooks/use-cart'
import { NextRoutes } from '@/utils/constant'
import { createPayment, createPaymentIntent } from '@/utils/stripe/methods'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import {
  PaymentIntent,
  StripeCardElementChangeEvent,
  StripeCardElementOptions
} from '@stripe/stripe-js'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
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

  const { push } = useRouter()

  // useEffect(() => {
  //   async function setPaymentMode() {
  //     if (items.length) {
  //       const data = await createPaymentIntent({
  //         items,
  //         token: session?.jwt as string
  //       })

  //       if (data.freeProducts) {
  //         setFreeProducts(true)
  //         return
  //       }

  //       if (data.error) {
  //         setError(data.error)
  //       } else {
  //         // senão o paymentIntent foi válido
  //         setFreeProducts(false)
  //         setClientSecret(data.client_secret)
  //       }
  //     }
  //   }

  //   setPaymentMode()
  // }, [items])

  const saveOrder = async (paymentIntent?: PaymentIntent) => {
    const data = await createPayment({
      items,
      paymentIntent,
      token: session?.jwt as string
    })

    return data
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    let theClientSecret = ''
    e.preventDefault()

    const cardElement = elements?.getElement('card')
    try {
      if (!stripe || !cardElement) return null
      setLoading(true)

      const data = await createPaymentIntent({
        items,
        token: session?.jwt as string
      })

      if (data.freeProducts) {
        setFreeProducts(true)
        // redireciona para pagina de sucesso ou exibir um componente de sucesso
        push(NextRoutes.success)
        return
      }

      if (data.error) {
        setError(data.error)
      } else {
        console.log(data)
        setFreeProducts(false)
        theClientSecret = data.client_secret
        setClientSecret(data.client_secret)
      }

      console.log(theClientSecret)
      console.log(clientSecret)

      if (theClientSecret) {
        const payload = await stripe.confirmCardPayment(theClientSecret, {
          payment_method: { card: cardElement }
        })

        if (payload.error) {
          setError(`Pagamento Falhou ${payload.error.message}`)
          setLoading(false)
        } else {
          setError(null)
          setLoading(false)

          saveOrder(payload.paymentIntent)
          // redireciona para pagina de sucesso ou exibir um componente de sucesso
          push(NextRoutes.success)
        }
      }
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
          loading={loading}
        >
          {loading ? 'Comprando' : 'Comprar'}
        </Button>
      </div>
    </form>
  )
}
