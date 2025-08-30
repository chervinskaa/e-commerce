"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export default function TeamSection() {
    const slides = [
        { img: "/about/team/person1.jpg", name: "Jack Smith", position: "Marketing Manager", instagram: "#", twitter: "#", linkedin: "#" },
        { img: "/about/team/person2.jpg", name: "John Doe", position: "Developer", instagram: "#", twitter: "#", linkedin: "#" },
        { img: "/about/team/person3.jpg", name: "Maria Lee", position: "Designer", instagram: "#", twitter: "#", linkedin: "#" },
        { img: "/about/team/person4.jpg", name: "David Brown", position: "CEO", instagram: "#", twitter: "#", linkedin: "#" },
    ];

    return (
        <div className="bg-white w-full mx-auto px-4 ">
            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop
                slidesPerView={3}
                spaceBetween={10}
                breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 10 },
                    640: { slidesPerView: 1, spaceBetween: 10 },
                    768: { slidesPerView: 2, spaceBetween: 10 },
                    1024: { slidesPerView: 3, spaceBetween: 10 },
                }}
                className="py-8 group"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center p-4">
                            <div className="w-64 h-64 relative  ">
                                <Image src={slide.img} alt={slide.name} fill  className="object-cover rounded-lg" />
                            </div>
                            <h3 className="mt-4 text-lg text-gray-900 font-semibold">{slide.name}</h3>
                            <p className="text-gray-500">{slide.position}</p>
                            <div className="mt-2 flex gap-4">
                                <Link href={slide.instagram} target="_blank" className="text-pink-500 hover:text-pink-600"><Instagram size={24} /></Link>
                                <Link href={slide.twitter} target="_blank" className="text-blue-400 hover:text-blue-500"><Twitter size={24} /></Link>
                                <Link href={slide.linkedin} target="_blank" className="text-blue-700 hover:text-blue-800"><Linkedin size={24} /></Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}



            </Swiper>
        </div>
    );
}
