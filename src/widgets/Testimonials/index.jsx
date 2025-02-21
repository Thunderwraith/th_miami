import { TestimonialsCard } from 'src/entities/ui/TestimonialsCard';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonialsList } from './data';

import 'swiper/css';
import s from './index.module.sass';

export const TestimonialsBlock = () => (
  <div className={s.testimonials}>
    <div className='container'>
      <p className={s.label}>testimonials</p>
      <p className={s.title}>What our customer say</p>
      <Swiper
        loop
        centeredSlides
        spaceBetween={26}
        slidesPerView={3}
        direction='vertical'
        modules={[Autoplay]}
        className={s.testimonialSwiper}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1024: {
            spaceBetween: 30,
            slidesPerView: 1.6,
            direction: 'horizontal'
          }
        }}
      >
        {testimonialsList.map(card => (
          <SwiperSlide key={card.id}>
            <TestimonialsCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
)