"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/bundle";

const sliderData = [
  {
    id: 1,
    bg: "slider1.jpg",
    title: "হাট-বাজার.কম",
    desc: "খাঁটি পণ্যের এক বিশ্বস্ত প্রতিষ্ঠান",
  },
  {
    id: 2,
    bg: "slider2.webp",
    title: "হাট-বাজার.কম",
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
        pagination={{ clickable: true }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        {sliderData.map((slider) => (
          <SwiperSlide key={slider.id}>
            <div
              className="min-h-[500px] bg-no-repeat bg-cover bg-center bg-slate-300 bg-blend-multiply"
              style={{ backgroundImage: `url(${slider?.bg})` }}
            ></div>
            <div className="absolute top-16 text-center w-full">
              <h1 className="text-5xl md:text-7xl text-red-500 font-bold">
                {slider.title}
              </h1>
              <h4 className="text-2xl md:text-3xl font-bold mt-7">
                {slider.desc}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BgSlider;
