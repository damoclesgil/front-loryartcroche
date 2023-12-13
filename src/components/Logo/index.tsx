import Image from 'next/image'

const Logo = () => {
  return (
    <div className="relative flex place-items-center">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/img/logo_LoryArtCrocheColorida.png"
        alt="Lory Art Crochê Logo"
        width={215}
        height={60}
        priority
      />
    </div>
  )
}
export default Logo
