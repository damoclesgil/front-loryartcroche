import SlickSlider from 'react-slick'
import styles from './gallery.module.css'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import Slider, { SliderSettings } from '@/components/Slider'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Close } from '@styled-icons/material-outlined/Close'

const commonSettings: SliderSettings = {
  infinite: false,
  dots: true,
  lazyLoad: 'ondemand',
  arrows: true,
  dotsClass: 'slick-dots',
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
  // arrows: true,
  // dotsClass: 'slick-dots',
  // nextArrow: <ArrowRight aria-label="next image" />,
  // prevArrow: <ArrowLeft aria-label="previous image" />
}
const settings: SliderSettings = {
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

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1,
  dots: false
}

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const Gallery = ({ items }: GalleryProps) => {
  const slider = useRef<SlickSlider>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false)
    }

    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  let customSettings: SliderSettings = {
    ...settings,
    customPaging: function (i) {
      // const onHoverSlide = () => {
      //   if (slider) slider.current!.slickGoTo(i, true)
      // }
      // onMouseEnter={onHoverSlide}
      return (
        <button className="flex">
          <Image
            key={i}
            width={120}
            height={110}
            src={items[i].src}
            alt={`Thumb - ${items[i].label}`}
          />
        </button>
      )
    }
    // customPaging(index) {
    //   return (
    //     <button onMouseEnter={onHoverSlide)}>
    //       <img src={`${mockedGallery[index].src}`} width={120} height={120} />
    //     </button>
    //   )
  }

  return (
    <div className={`${styles['wrapper']}`}>
      <Slider ref={slider} settings={customSettings}>
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
              slider.current!.slickGoTo(index, true)
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
          <Slider ref={slider} settings={modalSettings}>
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
