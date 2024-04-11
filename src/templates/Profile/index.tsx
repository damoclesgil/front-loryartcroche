// import { Card } from '@/components/ui/card'
import Base from '../Base'
import ProfileMenu from '@/components/ProfileMenu'

const Profile = ({ children }: { children: React.ReactNode }) => {
  return (
    <Base>
      <div className="w-full lg:grid lg:grid-cols-[15rem_auto] gap-7 md:px-6">
        <ProfileMenu />
        <div className="w-full bg-white text-gray-900">{children}</div>
      </div>
    </Base>
  )
}
export default Profile
