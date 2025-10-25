import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { CiStar } from "react-icons/ci";


import "swiper/css";
import "swiper/css/pagination";




import { Pagination } from "swiper/modules";

function CustomreReview() {
  return (
    <>
      <div className="py-5 container mx-auto">
         <p className="text-3xl font-bold mb-5">Customer Review</p>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div className="bg-gray-100">
            <SwiperSlide className="bg-gray-100 p-10 rounded-2xl gap-3">
              <div className="flex justify-center flex-col items-center">
                <img
                  src="https://i.pravatar.cc/50?img=1"
                  alt=""
                  className="w-14 rounded-full object-cover"
                />
                <p className="text-accent text-lg mb-3">Jhon Deo</p>
              </div>
              <p className="text-accent">
                My kids absolutely love this toy house! Super fun and safe.
              </p>
              <p className="text-xl text-yellow-500 font-bold mt-5 flex">
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
              </p>
            </SwiperSlide>
          </div>
          <SwiperSlide className="bg-gray-100 p-10 rounded-2xl">
            <div className="flex justify-center flex-col items-center">
              <img
                src="https://i.pravatar.cc/50?img=2"
                alt=""
                className="w-14 rounded-full object-cover"
              />
              <p className="text-accent text-lg mb-3">Babu</p>
            </div>
            <p className="text-accent">
              Good quality and very durable. My daughter plays with it every
              day.
            </p>
            <p className="text-xl text-yellow-500 font-bold mt-5 flex">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </p>
          </SwiperSlide>

          <SwiperSlide className="bg-gray-100 p-10 rounded-2xl">
            <div className="flex justify-center flex-col items-center gap-2">
              <img
                src="https://i.pravatar.cc/50?img=3"
                alt=""
                className="w-14 rounded-full object-cover"
              />
              <p className="text-accent text-lg mb-3">chini na</p>
            </div>
            <p className="text-accent">
              Perfect size for small rooms. Highly recommend!
            </p>
            <p className="text-xl text-yellow-500 font-bold mt-5 flex">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </p>
          </SwiperSlide>
          <SwiperSlide className="bg-gray-100 p-10 rounded-2xl">
            <div className="flex justify-center flex-col items-center gap-3">
              <img
                src="https://i.pravatar.cc/50?img=1"
                alt=""
                className="w-14 rounded-full object-cover"
              />
              <p className="text-accent text-lg mb-2">Jhon Deo</p>
            </div>
            <p className="text-accent">
              Assembly was easy and all parts are sturdy. Kids love the colors!
            </p>
            <p className="text-xl text-yellow-500 font-bold mt-5 flex">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </p>
          </SwiperSlide>
          <SwiperSlide className="bg-gray-100 p-10 rounded-2xl">
            <div className="flex justify-center flex-col items-center">
              <img
                src="https://i.pravatar.cc/50?img=2"
                alt=""
                className="w-14 rounded-full object-cover"
              />
              <p className="text-accent text-lg mb-2">babu</p>
            </div>
            <p className="text-accent">
              Nice design and very safe for younger kids. Would buy again.
            </p>
            <p className="text-xl text-yellow-500 font-bold mt-5 flex">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}


export default CustomreReview