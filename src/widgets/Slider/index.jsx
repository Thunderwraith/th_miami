import useMediaQuery from '@mui/material/useMediaQuery';
import { useMemo } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { mobileSlidesList, slidesList, tabletSlidesList } from './data';

import 'swiper/css';
import s from './index.module.sass';

export const SliderBlock = () => {

  const isTablet = useMediaQuery('(min-width: 768px)')
  const isDesktop = useMediaQuery('(min-width: 1440px)')
  const slides = useMemo(() => 
    (isDesktop ? slidesList : isTablet ? tabletSlidesList : mobileSlidesList), [isDesktop, isTablet])

  return (
    <div className="container">
      <p className={s.label}>Trusted By</p>
      <Swiper
        loop
        slidesPerView={3}
        spaceBetween={12}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 40
          }
        }}
      >
        {slides.map((slide, index) =>
          <SwiperSlide key={index}>
            <div className={s.slide}>
              <svg 
                width={slide.width}
                height={slide.height}
                viewBox={slide.viewBox}
              >
                <use href={`${slide.src}#slide${slide.id}`} />
              </svg>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
)}