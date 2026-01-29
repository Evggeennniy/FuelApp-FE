import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function ImageSwiper() {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="/banner.png" className="w-full h-full object-contain" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/banner.png" className="w-full h-full object-contain" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/banner.png" className="w-full h-full object-contain" />
      </SwiperSlide>
    </Swiper>
  );
}

export default ImageSwiper;
