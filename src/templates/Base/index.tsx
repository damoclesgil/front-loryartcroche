import Menu from '@/components/Menu'
import Footer from '@/components/Footer'

export type baseProps = {
  backgroundImg?:
    | 'accessorios-croche'
    | 'croche-cofe'
    | 'croche-smartsix'
    | 'croche-pink'
  children: React.ReactNode
  sizeBg?: 'small' | 'medium' | 'large'
}

const Base = ({
  children,
  backgroundImg = 'accessorios-croche',
  sizeBg = 'large'
}: baseProps) => {
  return (
    <>
      <Menu />
      <div
        className={`w-full bg-no-repeat relative h-auto max-w-full ${sizeBg === 'large' && 'min-h-[350px] lg:min-h-[550px]'} ${sizeBg === 'medium' && 'min-h-[200px] lg:min-h-[300px]'} ${sizeBg === 'small' && 'min-h-[150px] lg:min-h-[200px]'}`}
        style={{
          background: `url(${process.env.NEXT_PUBLIC_APP_URL}/img/backgrounds/${backgroundImg}.jpg)`,
          backgroundPosition: `${sizeBg === 'large' ? 'top center' : 'center center'}`,
          backgroundSize: 'cover'
        }}
      ></div>

      <div className="w-full max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 md:px-0">
        <div className="mt-10 flex-auto w-full">{children}</div>
      </div>
      <Footer />
    </>
  )
}

export default Base
