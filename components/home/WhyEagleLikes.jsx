"use client";

import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import w1 from "@/public/images/w1.png";
import w2 from "@/public/images/w2.png";
import w3 from "@/public/images/w3.png";
import w4 from "@/public/images/w4.png";
import w5 from "@/public/images/w5.png";
import w6 from "@/public/images/w6.png";

const features = [
  {
    icon: w1,
    title: "Affordable Growth",
    description:
      "At Eagle Likes, we believe social media growth should be for everyone. That’s why we offer affordable packages for individuals, influencers, and businesses alike.",
  },
  {
    icon: w2,
    title: "Quality That Speaks",
    description:
      "While affordability matters, quality is our top priority. At Eagle Likes, we never compromise on service standards and every like, follower, and view is delivered with care to ensure authentic, natural growth.",
  },
  {
    icon: w3,
    title: "Speed You Can Trust",
    description:
      "In today’s fast-paced digital world, timing is key. Eagle Likes ensures fast, reliable delivery and whether you need instant likes or steady, natural growth for your profile.",
  },
  {
    icon: w4,
    title: "Safe And Secure Services",
    description:
      "Trust is at the heart of everything we do. We use safe, proven methods to protect your account and ensure natural, risk-free growth so you can grow with confidence.",
  },
  {
    icon: w5,
    title: "Customer-Centric Support",
    description:
      "We understand that every customer is unique. That’s why our dedicated support team is always ready to assist, guide, and resolve your queries from choosing the right package to ensuring smooth, hassle-free delivery.",
  },
  {
    icon: w6,
    title: "A Brand You Can Rely On",
    description:
      "Eagle Likes is more than just a service it’s your trusted partner in social media growth. Join the thousands of satisfied customers who’ve chosen us to elevate their online presence with confidence.",
  },
];

const FeatureCard = ({ item }) => (
  <div
    className="
      rounded-3xl xl:rounded-[36px]
      border border-white/10
      bg-gradient-to-br
      from-white/[0.03]
      to-transparent
      px-5 sm:px-6 xl:px-8
      py-7 sm:py-8 xl:py-10
      text-center
      transition-all duration-300
      hover:border-white/20
      hover:-translate-y-1
      h-full
    "
  >
    {/* Icon */}
    <div className="flex justify-center">
      <Image
        src={item.icon}
        alt={item.title}
        width={74}
        height={74}
        className="
          w-14 h-14
          sm:w-16 sm:h-16
          xl:w-[74px] xl:h-[74px]
          object-contain
        "
      />
    </div>

    {/* Title */}
    <h3
      className="
        mt-5 sm:mt-6 xl:mt-8
        text-xl sm:text-2xl
        font-semibold
        leading-tight
        text-white
      "
    >
      {item.title}
    </h3>

    {/* Description */}
    <p
      className="
        mt-4 sm:mt-5 xl:mt-6
        text-sm sm:text-base
        leading-6 xl:leading-7
        text-[#99A1AF]
      "
    >
      {item.description}
    </p>
  </div>
);

const WhyEagleLikes = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-16 xl:py-20">
      {/* Blue Glow */}
      <div className="absolute right-0 top-0 h-full w-[150px] md:w-[220px] xl:w-[300px] bg-blue-500/10 blur-[80px] md:blur-[120px] xl:blur-[150px]" />

      <div className="container mx-auto ">
        <SectionTitle
          title="Why"
          gradientText="Eagle Likes?"
          gradientType="blue"
          className="mb-10 md:mb-14 xl:mb-16"
        />

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1.1}
            centeredSlides
            spaceBetween={20}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {features.map((item, index) => (
              <SwiperSlide key={index}>
                <FeatureCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid gap-5 sm:gap-6 xl:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <FeatureCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEagleLikes;