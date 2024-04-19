'use client'

import { CreditCard, Pix } from '@styled-icons/material-outlined'
import Image from 'next/image'

export function PaymentMethods() {
  return (
    <div>
      <p>Meios de pagamento:</p>
      <p className="mb-2">Pix, Cartão e Boleto</p>
      <div className="flex mb-4">
        <Pix color="#4bb8a9" size={20} className="mr-3" />
        <CreditCard size={20} className="mr-3" />
        <Image
          className="object-cover"
          src="/img/ic-new-boleto.svg"
          alt="Boleto"
          width={24}
          height={16}
          loading="lazy"
        />
      </div>
    </div>
  )
}
