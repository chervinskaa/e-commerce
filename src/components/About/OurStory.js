"use client";

import Image from "next/image";

export default function OurStory() {
    return (
        <section className="bg-white text-gray-900 py-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-6">

                {/* Ліва частина: заголовок та текст */}
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        We started our business over 10 years ago with the aim of providing our customers
                        with quality products and services. Every year we expand our range and improve
                        our service to meet the needs of each customer.
                    </p>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
                        Our mission has always been to put the customer first. We believe in building
                        long-term relationships and earning trust through consistency, reliability,
                        and attention to detail. Every team member contributes to making each
                        experience memorable.
                    </p>
                </div>

                {/* Права частина: зображення */}
                <div className="md:w-1/2">
                    <Image
                        src="/about/our_story.svg"
                        alt="Our Story"
                        width={500}
                        height={400}
                        className="w-full h-auto rounded-lg object-cover"
                    />
                </div>

            </div>
        </section>
    );
}
