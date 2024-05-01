'use client'

import { Button } from '@/components/ui/button'
import { TextError } from '@/components/ui/text-error'
import { MetodoPagamento, useCart } from '@/hooks/use-cart'
import { capitalize, formatDate, setCharAt } from '@/utils/common'
import { links, NextRoutes } from '@/utils/constant'
import formatPrice from '@/utils/format-price'
import { createPayment, createPaymentIntent } from '@/utils/stripe/methods'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import {
  PaymentIntent,
  // PaymentMethod,
  StripeCardElementChangeEvent,
  StripeCardElementOptions
} from '@stripe/stripe-js'
import { CreditCard, Pix } from '@styled-icons/material-outlined'
import { Whatsapp } from '@styled-icons/remix-line'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function PaymentForm() {
  const { items, total } = useCart()
  const { data: session } = useSession()
  const [error, setError] = useState<string | null>(null)
  const [paymentMethod, setPaymentMethod] =
    useState<MetodoPagamento>('Não Informado')
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  const stripe = useStripe()
  const elements = useElements()
  const [freeProducts, setFreeProducts] = useState(false)

  const { push } = useRouter()

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
        // console.log(data)
        setFreeProducts(false)
        theClientSecret = data.client_secret
        setClientSecret(data.client_secret)
      }

      // console.log(theClientSecret)
      // console.log(clientSecret)

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

  const sendWhatsAppItems = () => {
    const products = items.map((item) => {
      return `- x${item.qty} ${capitalize(item.name)} ${formatPrice(Number(item.price))}
`
    })

    const currentDate = setCharAt(formatDate(new Date()), 10, ' ⏰')

    const orderTextWhats = `
Olá venho do site ${links.websiteUrl}
🗓 ${currentDate}

Nome: *${session?.user?.name}*

📝 Gostaria de encomendar os seguintes produtos:

${products.join('')}
💰Total a pagar: *${total}*

Método de Pagamento: *${paymentMethod}*.

👆 Após enviar o pedido, aguarde que já iremos lhe atender.
`

    const encodedText = encodeURIComponent(orderTextWhats)
    // const numberWhatsLory = '+5562996725529'
    const numberWhats = '+556281165159'
    const urlApiWhats = `https://api.whatsapp.com/send/?phone=${numberWhats}&text=${encodedText}`
    const aElement = document.createElement('a')
    aElement.setAttribute('href', urlApiWhats)
    aElement.setAttribute('target', '_blank')
    aElement.click()
  }

  const options: StripeCardElementOptions = {
    hidePostalCode: true,
    style: {
      base: {
        fontSize: '16px'
      }
    }
  }

  const buttonMethodPaymentClass =
    'p-4 md:mx-2 my-2 md:my-0 flex flex-col items-center justify-center transition-colors duration-200 text-gray-600 focus:text-white shadow hover:bg-primary font-bold focus:bg-primary border-2 border-primary rounded-md md:max-w-[185px] w-full text-center text-black hover:text-white'

  return (
    <form onSubmit={onSubmit}>
      <h2 className="mb-6 text-lg text-center">
        {' '}
        Selecione a forma de Pagamento: {paymentMethod}
      </h2>
      <div className="flex flex-col md:flex-row justify-center">
        <button
          className={`${buttonMethodPaymentClass} ${paymentMethod === 'Cartão de Crédito' ? 'bg-primary text-white' : 'bg-transparent'}`}
          onClick={() => setPaymentMethod('Cartão de Crédito')}
        >
          <CreditCard size={50} />
          <span className="mt-2 ">Cartão de Crédito</span>
        </button>
        <button
          className={`${buttonMethodPaymentClass} ${paymentMethod === 'Pix' ? 'bg-primary text-white' : 'bg-transparent'}`}
          onClick={() => setPaymentMethod('Pix')}
        >
          <Pix color="#4bb8a9" size={50} />
          <span className="mt-2">Pix</span>
        </button>
        <button
          className={`${buttonMethodPaymentClass} ${paymentMethod === 'Boleto' ? 'bg-primary text-white' : 'bg-transparent'}`}
          onClick={() => setPaymentMethod('Boleto')}
        >
          <Image
            className="object-cover"
            src="/img/ic-new-boleto.svg"
            alt="Boleto"
            width={50}
            height={50}
            loading="lazy"
          />
          <span className="mt-2"> Boleto</span>
        </button>
      </div>

      {/* <CardElement options={options} onChange={handleChange} />
      {error && <TextError>{error}</TextError>} */}

      <div className="mt-8 flex items-center justify-center">
        <Button className="mr-4" onClick={() => sendWhatsAppItems()}>
          <Whatsapp size={20} className="mr-2" />
          Encomendar
        </Button>
        {/*
        <Button
          type="submit"
          disabled={items.length === 0 && (disabled || !!error || loading)}
          loading={loading}
        >
          {loading ? 'Comprando' : 'Comprar'}
        </Button> */}
      </div>
    </form>
  )
}
