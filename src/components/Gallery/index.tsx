import Slider, { Settings } from 'react-slick'
import styles from './gallery.module.css'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
// import Slider, { SliderSettings } from '@/components/Slider'
// import Slider from 'react-slick'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Close } from '@styled-icons/material-outlined/Close'

const commonSettings: Settings = {
  infinite: false,
  // dots: true,
  // dotsClass: 'slick-dots',
  lazyLoad: 'ondemand',
  arrows: true,
  slidesToShow: 3,
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
}
const settings: Settings = {
  ...commonSettings,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ]
}

// const modalSettings: Settings = {
//   ...commonSettings,
//   slidesToShow: 1,
//   dots: false
// }

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const Gallery = ({ items }: GalleryProps) => {
  const sliderModal = useRef<Slider>(null)
  const sliderRef1 = useRef<Slider>(null)
  let sliderRef2 = useRef()
  const [isOpen, setIsOpen] = useState(false)
  const [nav1, setNav1] = useState()
  const [nav2, setNav2] = useState()

  useEffect(() => {
    // setNav1(sliderRef1)
    // setNav2(sliderRef2)

    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false)
    }
    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  const slide1Settings = {
    ...commonSettings,
    arrows: false,
    slidesToShow: 1,
    asNavFor: nav2
  }
  const slide2Settings = {
    ...commonSettings,
    asNavFor: nav1
  }

  const modalSettings = {
    infinite: false,
    arrows: true,
    slidesToShow: 1,
    nextArrow: <ArrowRight aria-label="next image" />,
    prevArrow: <ArrowLeft aria-label="previous image" />
  }

  return (
    <div className={`${styles['wrapper']}`}>
      <Slider
        arrows={false}
        asNavFor={nav2}
        slidesToShow={1}
        ref={(sliderRef1) => setNav1(sliderRef1)}
      >
        {/* ref={(sliderRef1) => setNav1(sliderRef1)} */}
        {items.map((item, index) => (
          <Image
            width={295}
            height={165}
            role="button"
            key={`thumb-${index}`}
            src={item.src}
            alt={`Thumb - ${item.label}`}
            onClick={() => {
              setIsOpen(true)
            }}
          />
        ))}
      </Slider>

      <Slider
        {...slide2Settings}
        className="droga"
        ref={(sliderRef2) => setNav2(sliderRef2)}
      >
        {/* ref={(sliderRef2) => (sliderRef2 ? sliderRef2.slickGoTo(+1 || 0) : '')} */}
        {items.map((item, index) => (
          <Image
            width={295}
            height={165}
            role="button"
            key={`thumb-${index}`}
            src={item.src}
            alt={`Thumb - ${item.label}`}
            onClick={() => {
              console.log(sliderRef1)
              console.log(sliderRef2)
              console.log(sliderModal)
              sliderModal.current!.slickGoTo(index, true)
            }}
          />
        ))}
      </Slider>

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
        {/* max-w-[min(120rem, 100%)]max-w-[90rem] */}
        <div
          className="content-modal max-h-[54rem]"
          style={{ maxWidth: 'min(42rem, 100%)' }}
        >
          <Slider ref={sliderModal} {...modalSettings}>
            {items.map((item, index) => (
              // className="inset-0 absolute"
              <Image
                className="w-auto h-auto"
                width={1200}
                height={675}
                key={`gallery-${index}`}
                src={item.src}
                alt={item.label}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Gallery
