import Menu from '@/components/Menu'
import Footer from '@/components/Footer'

export type baseProps = {
  backgroundImg:
    | 'accessorios-croche'
    | 'croche-cofe'
    | 'croche-smartsix'
    | 'croche-pink'
  children: React.ReactNode
}

const Base = ({
  children,
  backgroundImg = 'accessorios-croche'
}: baseProps) => {
  return (
    <>
      <Menu />
      <div
        className="w-full bg-no-repeat relative min-h-[550px] h-auto max-w-full"
        style={{
          background: `url(${process.env.NEXT_PUBLIC_APP_URL}/img/backgrounds/${backgroundImg}.jpg)`,
          backgroundPosition: 'top center',
          backgroundSize: 'cover'
        }}
      >
        bg
      </div>

      <div className="w-full max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 md:px-0">
        <div className="mt-10 flex-auto w-full">{children}</div>
      </div>
      <Footer />
    </>
  )
}

export default Base
