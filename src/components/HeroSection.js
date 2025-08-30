"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";


export default function PromoSection() {
  const categories = ["Woman`s Fashion", "Men`s Fashion", "Electronics", "Home & Lifestyle", "Medicine", "Baby`s & Toys", "Health & Beauty",];

  const slides = [
    "/ads/ads_electronics.jpg",
    "/ads/ads_dress.jpg",
    "/ads/ads_toys.jpg",
  ];

  return (
    <section className="bg-white  w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 ">
        {/* Категорії */}
        <div className="hidden md:block w-full border-r border-gray-300 md:w-1/4 text-gray-900 p-4 ">
          <ul className="flex flex-col gap-1">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/category/${cat.toLowerCase().replace(/ /g, "-")}`}
                className="block px-3 py-2 hover:bg-gray-200 font-medium"
              >
                {cat}
              </Link>
            ))}
          </ul>
        </div>

        {/* Карусель */}
        <div className="w-11/12 mx-auto pt-8 md:w-3/4 overflow-visible group">
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
