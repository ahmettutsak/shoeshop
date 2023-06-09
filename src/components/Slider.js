"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import Image from "next/image";
import first from "@/../public/sliderimg/1.jpg";
import sec from "@/../public/sliderimg/2.png";
import third from "@/../public/sliderimg/3.jpg";

import "swiper/css";
import "swiper/css/autoplay";

export default function Slider() {
  return (
    <div>
      <div className="w-[600px]">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={true}
        >
          <SwiperSlide>
            <Image
              className="rounded-xl"
              width={600}
              height={600}
              src={first}
              alt="shoe"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="rounded-xl"
              width={600}
              height={600}
              src={sec}
              alt="shoe"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="rounded-xl"
              width={600}
              height={600}
              src={third}
              alt="shoe"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
