'use client'

import Slider from 'react-slick'
import styles from './gallery.module.css'
// import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
// import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Close } from '@styled-icons/material-outlined/Close'
import { getImageUrl } from '@/utils/getImageUrl'
import Fancybox from './Fancybox'

// import ReactImageZoom from 'react-image-zoom'
// import SliderImage from 'react-zoom-slider'
// import ReactImageMagnify from 'react-image-magnify'

/* Libs Slides */
// https://flickity.metafizzy.co/style
// react slick slide
// Fancybox (Essa aqui abre uma parte que consegue selecionar ) https://fancyapps.com/fancybox/
/* Libs Zoom */
// react-zoom-slider
// https://www.npmjs.com/package/react-image-zoom
// https://www.npmjs.com/package/react-image-magnify
// https://www.npmjs.com/package/drift-zoom#demo-

// Eu estou querendo usar 3 libs a react-slick depois a fancybox quando clicar e uma para dar zoom.
// Acjo que vou ficar som com o fancyapps https://fancyapps.com/

const commonSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: true,
  slidesToShow: 4
  // Ver pq estár retornando erro quando coloco o nextArrow e prevArrow
  // nextArrow: <ArrowRight aria-label="next image" />,
  // prevArrow: <ArrowLeft aria-label="previous image" />
}

// type GalleryProps = {
//   items: {
//     id: string
//     attributes: {
//       url: string
//       name: string
//     }
//   }[]
// }

const Gallery = ({ items }, props) => {
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  let sliderModal = useRef()
  let sliderRef1 = useRef()
  let sliderRef2 = useRef()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setNav1(sliderRef1)
    setNav2(sliderRef2)

    const handleKeyUp = ({ key }) => {
      key === 'Escape' && setIsOpen(false)
    }
    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  const slide1Settings = {
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    asNavFor: nav2
  }

  const slide2Settings = {
    ...commonSettings,
    responsive: [
      {
        breakpoint: 1375,
        settings: {
          slidesToShow: 3,
          draggable: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          draggable: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          draggable: true
        }
      }
    ],
    asNavFor: nav1
  }

  const modalSettings = {
    infinite: true,
    arrows: true,
    slidesToShow: 1
    // nextArrow: ">",
    // prevArrow: "<"
  }

  return (
    <>
      {/* <Fancybox
        options={{
          Carousel: {
            infinite: false
          }
        }}
      >
        <a data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200">
          <img
            alt=""
            src="https://lipsum.app/id/60/200x150"
            width="200"
            height="150"
          />
        </a>
        <a data-fancybox="gallery" href="https://lipsum.app/id/61/1600x1200">
          <img
            alt=""
            src="https://lipsum.app/id/61/200x150"
            width="200"
            height="150"
          />
        </a>
      </Fancybox> */}
      <div className={`${styles['wrapper']}`}>
        <div className="slide-one">
          <Fancybox
            options={{
              Carousel: {
                infinite: false
              }
            }}
          >
            {items.map((item, index) => (
              <a
                data-fancybox="gallery"
                href={getImageUrl(item.attributes.url)}
                key={'gallery_' + index}
              >
                <img
                  alt={item.attributes.name}
                  src={getImageUrl(item.attributes.url)}
                  width={item.attributes.width}
                  height={item.attributes.height}
                />
              </a>
            ))}
          </Fancybox>

          {/* <Slider {...slide1Settings} ref={(slider) => (sliderRef1 = slider)}>
            {items.map((item, index) => (
              <>
                <Image
                  width={295}
                  height={165}
                  role="button"
                  key={`thumb-${index}`}
                  src={getImageUrl(item.attributes.url)}
                  alt={`Thumb - ${item.attributes.name}`}
                  draggable={false}
                />
              </>
            ))}
          </Slider> */}
        </div>
        {/* <div className="slide-two">
          <Slider {...slide2Settings} ref={(slider) => (sliderRef2 = slider)}>
            {items.map((item, index) => (
              <Image
                width={295}
                height={165}
                role="button"
                key={`thumb-${index}`}
                src={`${process.env.NEXT_PUBLIC_API_URL}${item.attributes.url}`}
                alt={`Thumb - ${item.attributes.name}`}
                onClick={() => {
                  sliderRef1.slickGoTo(index, true)
                  sliderRef2.slickGoTo(index, true)
                }}
              />
            ))}
          </Slider>
        </div> */}
        {/* 
        <div
          className={`fixed w-full h-full top-0 left-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-10 transition-opacity ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          aria-label="modal"
          aria-hidden={!isOpen}
        >
          <button
            className="text-white absolute top-[1%] right-0 w-10 h-10 p-0 text-right z-20"
            role="button"
            aria-label="close modal"
            onClick={() => setIsOpen(false)}
          >
            <Close size={40} />
          </button>
          <div
            className="slide-modal max-h-[54rem]"
            style={{ maxWidth: 'min(42rem, 100%)' }}
          >
            <Slider ref={sliderModal} {...modalSettings}>
            {items.map((item, index) => (
              <Image
                width={1200}
                height={675}
                key={`gallery-${index}`}
                src={`${process.env.NEXT_PUBLIC_API_URL}${item.attributes.url}`}
                alt={`${item.attributes.name}`}
              />
            ))}
          </Slider>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Gallery
