'use client'

import { Icon } from '@iconify/react'

const InstagramSection = () => {
  return (
    <>
      <div className="flex flex-col text-center justify-center items-center mt-8 mb-5">
        <div className="flex items-center">
          {/* <Icon icon="lucide-star" fontSize={24}></Icon> */}
          <Icon icon="lucide-instagram" fontSize={24}></Icon>
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
      {/* Como Tirar */}
      <div
        className="elfsight-app-bdcfa45a-887d-4600-9857-a6344415edc4 mt-4"
        data-elfsight-app-lazy
      ></div>

      {/* <iframe
        src="//lightwidget.com/widgets/98399e68b4095d86bd48b6a0b4684ee9.html"
        scrolling="no"
        allowTransparency={true}
        className="lightwidget-widget w-full border-0 overflow-hidden"
      ></iframe> */}
    </>
  )
}
export default InstagramSection
