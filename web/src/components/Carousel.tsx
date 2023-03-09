import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export const Carousel = () => {

  return (
     <Swiper
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        slidesPerView={2}
        centeredSlides
      >
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-1.jpg)"
          }}
        >
          Slide 1
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-2.jpg)"
          }}
        >
          Slide 2
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-3.jpg)"
          }}
        >
          Slide 3
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-4.jpg)"
          }}
        >
          Slide 4
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-5.jpg)"
          }}
        >
          Slide 5
        </SwiperSlide>
      </Swiper>
    )
}

export default Carousel