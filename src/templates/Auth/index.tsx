import { Card } from '@/components/ui/card'

const Auth = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <Card className="w-full max-w-md pb-4">{children}</Card>
    </div>
  )
}
export default Auth
