import { useMediaQuery } from '@mui/material';
import clsx from 'clsx';
import { useCallback, useMemo, useState } from 'react';
import Popup from 'reactjs-popup';
import Arrow from 'src/assets/svg/arrows/slideArrow.svg';
import { ActionButton } from 'src/shared/ui/ActionButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { imagesList } from './data';

import 'reactjs-popup/dist/index.css';
import 'swiper/css';
import 'swiper/css/navigation';
import s from './index.module.sass';

export const PortfolioBlock = () => {

  const isDesktop = useMediaQuery('(min-width: 1440px)')
  const [swiperRef, setSwiperRef] = useState()

  const displayedList = useMemo(() => imagesList.slice(0, isDesktop ? 9 : 3), [isDesktop])

  const handlePrev = useCallback(() => swiperRef?.slidePrev(), [swiperRef])
  const handleNext = useCallback(() => swiperRef?.slideNext(), [swiperRef])

  return ( 
    <div className="container">
      <div className={s.heading}>
        <div>
          <p className={s.label}>portfolio</p>
          <p className={s.title}>Some Of Our Best Works </p>
        </div>
        <ActionButton label='Load More' />
      </div>
      <div className={s.gallery}>
        {displayedList.map((galleryItem, galleryIndex) => (
          <div key={galleryItem.id} className={s.photoWrapper}>
            <Popup
              modal
              lockScroll
              trigger={
                <img
                  className={s.photo}
                  src={galleryItem.image}
                  alt={galleryItem.description}
                  width={galleryItem.size.width}
                  height={galleryItem.size.height}
                />
              }
            >
              <div className={s.content}>
                <div onClick={handlePrev} className={clsx(s.arrow, s.prev)}>
                  <svg width='100' height='100' viewBox="0 0 100 100">
                    <use href={`${Arrow}#arrow`} />
                  </svg>
                </div>
                <div onClick={handleNext} className={clsx(s.arrow, s.next)}>
                  <svg width='100' height='100' viewBox="0 0 100 100">
                    <use href={`${Arrow}#arrow`} />
                  </svg>
                </div>
                <Swiper
                  loop
                  onSwiper={setSwiperRef}
                  initialSlide={galleryIndex}
                >
                  {displayedList.map(sliderItem =>
                    <SwiperSlide
                      key={sliderItem.id}
                      className={s.portfolioSlide}
                    >
                      <img
                        src={sliderItem.image}
                        alt={sliderItem.description}
                        width={sliderItem.size.width * 2}
                        height={sliderItem.size.height * 2}
                      />
                    </SwiperSlide>
                  )}
                </Swiper>
              </div>
            </Popup>
          </div>
        ))}
      </div>
    </div>
  );
}