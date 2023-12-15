import Image from 'next/image'
import LogoLoryArtCroche from './logo_LoryArtCrocheColorida.png'

const Logo = () => {
  return (
    <div className="relative flex place-items-center">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src={LogoLoryArtCroche}
        alt="Lory Art Crochê Logo"
        priority
      />
    </div>
  )
}
export default Logo
