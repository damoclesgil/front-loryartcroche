import Menu from '@/components/Menu'
import Footer from '@/components/Footer'

const Base = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Menu />
      <div className="w-full max-w-2xl md:max-w-7xl ml-auto mr-auto px-6">
        <div className="mt-10 flex-auto">{children}</div>
        <Footer />
      </div>
    </>
  )
}

export default Base
