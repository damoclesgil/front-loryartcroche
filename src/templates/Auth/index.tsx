// import { Card } from '@/components/ui/card'

import Logo from '@/components/Logo'
import { NextRoutes } from '@/utils/constant'
import Image from 'next/image'
import Link from 'next/link'

const Auth = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[100vh]">
      <div className="flex items-center justify-center py-12">{children}</div>
      <div className="hidden bg-gray-100 lg:block dark:bg-gray-800 relative">
        <Image
          alt="Image"
          className="h-full w-full object-cover absolute"
          width={1920}
          height={1080}
          src="img/products/placeholder.svg"
          style={{
            aspectRatio: '1920/1080',
            objectFit: 'cover'
          }}
        />
        <div className="absolute top-0 right-0 mr-5 z-20 flex items-center text-lg font-medium">
          <Link href={NextRoutes.home}>
            <Logo size="normal" />
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Auth
