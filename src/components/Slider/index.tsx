import { forwardRef } from 'react'
import SlickSlider, { Settings } from 'react-slick'

import styles from './slider.module.css'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

const Slider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings },
  ref
) => (
  <section className={`${styles['wrapper']}`}>
    <SlickSlider ref={ref} {...settings}>
      {children}
    </SlickSlider>
  </section>
)

export default forwardRef(Slider)
