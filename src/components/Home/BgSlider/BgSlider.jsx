"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import slider1 from "@/assets/slider/slider1.jpg";
import slider2 from "@/assets/slider/slider4.jpg";
import slider3 from "@/assets/slider/slider3.jpg";

const sliderImages = [
  {
    id: 1,
    bg: slider1,
    title: "ECKART-BD.COM",
    desc: "খাঁটি পণ্যের এক বিশ্বস্ত প্রতিষ্ঠান",
  },
  {
    id: 2,
    bg: slider3,
    title: "ECKART-BD.COM",
    desc: "খাঁটি পণ্যের এক বিশ্বস্ত প্রতিষ্ঠান",
  },
  {
    id: 3,
    bg: slider2,
    title: "ECKART-BD.COM",
    desc: "খাঁটি পণ্যের এক বিশ্বস্ত প্রতিষ্ঠান",
  },
];

const BgSlider = () => {
  return (
    <section className="my-1">
      <Swiper
        loop
        autoplay
        effect="fade"
        delay={3000}
        slidesPerView={1}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        {sliderImages.map((slider) => (
          <SwiperSlide key={slider.id}>
            <div
              className="min-h-[600px] bg-no-repeat bg-cover bg-center bg-slate-300 bg-blend-multiply"
              style={{ backgroundImage: `url(${slider?.bg?.src})` }}
            ></div>
            <div className="absolute bottom-10 left-5 w-full">
              <h1 className="badge badge-warning p-5 text-xl font-bold">
                {slider.title}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BgSlider;
