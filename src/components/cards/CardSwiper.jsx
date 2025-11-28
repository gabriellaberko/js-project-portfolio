import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Project } from "./Project";

export const CardSwiper = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={30}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
  >
    {Project.map((project, index) => (
      <SwiperSlide key={index}>
        <Project></Project>
      </SwiperSlide>
    ))}
  </Swiper>
  );
}