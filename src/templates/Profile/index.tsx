// import { Card } from '@/components/ui/card'
import Base from '../Base'
import ProfileMenu from '@/components/ProfileMenu'

const Profile = ({ children }: { children: React.ReactNode }) => {
  return (
    <Base>
      <h2>Meu Perfil</h2>

      <div className="w-full grid grid-cols-[32rem_1fr] gap-7">
        <ProfileMenu />
        <div className="w-full bg-white text-gray-900">{children}</div>
      </div>
    </Base>
  )
}
export default Profile
