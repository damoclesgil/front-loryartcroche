'use client'

import { Instagram as InstagramIcon } from '@styled-icons/boxicons-logos'

const InstagramSection = () => {
  return (
    <div className="flex flex-col text-center justify-center items-center mt-8">
      <div className="flex items-center">
        <InstagramIcon size={24} />
        <h2 className="text-gray-800 dark:text-white font-medium text-lg ml-2">
          Siga-nos através do Instagram
        </h2>
      </div>
      <a
        href="https://www.instagram.com/loryartcroche/"
        target="_blank"
        title="@loryartcroche"
        className="no-underline block hover:text-primary-darker duration-150"
      >
        @loryartcroche
      </a>
    </div>
  )
}
export default InstagramSection
