"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

export default function PromoSection() {
  const categories = ["Жіноче", "Чоловіче", "Здоров’я", "Краса", "Для дому"];

  const slides = [
    "/ads/ads_electronics.jpg",
    "/ads/ads_dress.jpg",
    "/ads/ads_toys.jpg",
  ];

  return (
    <section className="bg-white  w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Категорії */}
        <div className="w-full border-r border-gray-300 md:w-1/4 text-gray-900 p-4 ">
          <h3 className=" text-lg font-semibold mb-4">Категорії</h3>
          <ul className="flex flex-col gap-3">
            {categories.map((cat) => (
              <li key={cat}>
                <a
                  href="#"
                  className="block px-3 py-2  hover:bg-gray-200 font-medium"
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Карусель */}
        <div className="w-full py-8 md:w-3/4">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000 }}
            loop
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={slide}
                  alt={`Banner ${index + 1}`}
                  width={800}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover "
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
