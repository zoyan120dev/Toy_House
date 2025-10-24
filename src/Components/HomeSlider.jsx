import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import coverOne from '../assets/cover-1.jpg'
import coverTwo from '../assets/cover-2.jpg'
import coverThree from '../assets/cover-3.jpg'

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={coverOne}
            className="object-cover w-full h-[500px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={coverTwo}
            className="object-cover w-full h-[500px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={coverThree}
            className="object-cover w-full h-[500px]"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
