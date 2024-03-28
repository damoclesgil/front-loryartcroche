// import { Card } from '@/components/ui/card'

const Auth = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[100vh]">
      <div className="flex items-center justify-center py-12">{children}</div>
      <div className="hidden bg-gray-100 lg:block dark:bg-gray-800">
        <img
          alt="Image"
          className="h-full w-full object-cover"
          height="1080"
          src="img/products/placeholder.svg"
          style={{
            aspectRatio: '1920/1080',
            objectFit: 'cover'
          }}
          width="1920"
        />
      </div>
    </div>
  )
}
export default Auth
