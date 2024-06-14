import Image from 'next/image'
import { Icon } from '@iconify/react'

export function PaymentMethods() {
  return (
    <div>
      <p>Meios de pagamento:</p>
      <p className="mb-2">Pix, Cartão e Boleto</p>
      <div className="flex mb-4">
        <Icon
          icon="ic:baseline-pix"
          fontSize={20}
          color="#4bb8a9"
          className="mr-3"
        />
        <Icon
          icon="material-symbols:credit-card-outline"
          fontSize={20}
          className="mr-3"
        />
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
