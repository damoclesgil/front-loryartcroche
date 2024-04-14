// import { Card } from '@/components/ui/card'

import Logo from '@/components/Logo'
import { NextRoutes } from '@/utils/constant'
import Image from 'next/image'
import Link from 'next/link'

export type templateAuthProps = {
  backgroundImg?:
    | 'bolas-de-la-verde-e-espaco'
    | 'foto-aerea-de-uma-superficie-branca-com-rosquinhas-no-fundo-superior-e-inferior'
    | 'tricotado-a-mao-tres-coracoes-rosa-com-novelo-de-la-vista-do-topo'
  children: React.ReactNode
}

// 5361 x 3574

const Auth = ({
  children,
  backgroundImg = 'tricotado-a-mao-tres-coracoes-rosa-com-novelo-de-la-vista-do-topo'
}: templateAuthProps) => {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[100vh]">
      <div className="flex items-center justify-center py-12">{children}</div>
      <div className="hidden bg-gray-100 lg:block dark:bg-gray-800 relative">
        <Image
          alt="Image"
          className="h-full w-full object-cover absolute"
          width={1920}
          height={1080}
          src={`/img/backgrounds/${backgroundImg}.jpg`}
          style={{
            aspectRatio: '1920/1080',
            objectFit: 'cover',
            objectPosition: 0,
            filter: `${backgroundImg === 'bolas-de-la-verde-e-espaco' ? 'brightness(40%)' : 'brightness(70%)'}`
          }}
        />
        {/* src="img/products/placeholder.svg" */}
        <div className="absolute top-[1.5rem] right-0 mr-5 z-20 flex items-center text-lg font-medium">
          <Link href={NextRoutes.home}>
            <Logo size="normal" />
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Auth
