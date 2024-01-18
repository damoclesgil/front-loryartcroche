import Slider from 'react-slick'
import styles from './gallery.module.css'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Close } from '@styled-icons/material-outlined/Close'

const commonSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: true,
  slidesToShow: 4,
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
}

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
    slidesToShow: 1,
    nextArrow: <ArrowRight aria-label="next image" />,
    prevArrow: <ArrowLeft aria-label="previous image" />
  }

  return (
    <div className={`${styles['wrapper']} wrapper-chan`}>
      <div className="slide-one">
        <Slider {...slide1Settings} ref={(slider) => (sliderRef1 = slider)}>
          {items.map((item, index) => (
            <Image
              width={295}
              height={165}
              role="button"
              key={`thumb-${index}`}
              src={item.src}
              alt={`Thumb - ${item.label}`}
              onClick={() => {
                sliderModal.current.slickGoTo(index, true)
                setIsOpen(true)
              }}
            />
          ))}
        </Slider>
      </div>
      <div className="slide-two">
        <Slider {...slide2Settings} ref={(slider) => (sliderRef2 = slider)}>
          {items.map((item, index) => (
            <Image
              width={295}
              height={165}
              role="button"
              key={`thumb-${index}`}
              src={item.src}
              alt={`Thumb - ${item.label}`}
              onClick={() => {
                sliderRef1.slickGoTo(index, true)
                sliderRef2.slickGoTo(index, true)
              }}
            />
          ))}
        </Slider>
      </div>

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
                src={item.src}
                alt={`${item.label}`}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Gallery
