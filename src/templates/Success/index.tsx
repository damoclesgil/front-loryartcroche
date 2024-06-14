'use client'

import Base from '@/templates/Base'
import { NextRoutes } from '@/utils/constant'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const Success = () => {
  return (
    <Base>
      <div className="flex flex-col justify-center items-center py-20">
        <h2 className="text-lg mb-4 text-center font-semibold">
          Sua compra foi realizada com sucesso!
        </h2>
        <div className="text-center px-2 text-primary bg-primary-foreground rounded-full w-20 h-20 flex items-center justify-center border-primary border">
          <Icon icon="ic:round-done" fontSize={50} className="rounded-full" />
        </div>
        <div className="mt-5 text-center">
          <p className="mt-5">
            Aguarde seus dados de pagamento por e-mail.
            <br />
            Seu produto já está disponível para download dentro da sua
            <Link
              href={NextRoutes.myOrders}
              className="text-primary underline-offset-4 hover:underline"
            >
              {' '}
              lista de ordens de pagamento
            </Link>
            .
          </p>
        </div>
      </div>
    </Base>
  )
}

export default Success
