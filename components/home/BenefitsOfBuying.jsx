"use client";

import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import higher from "@/public/images/higher.png";
import trust from "@/public/images/trust.png";
import follower from "@/public/images/follower.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";

const benefits = [
  {
    title: "Higher Visibility",
    description:
      "Instagram's algorithm favors the most popular accounts, giving them greater visibility across the platform. By gaining real followers with authentic profiles, you instantly boost your popularity and attract new audiences.",
    icon: higher,
  },
  {
    title: "Strengthen Trust",
    description:
      "Having more followers instantly boosts your Instagram credibility. When new users discover your profile, they see your popularity as proof of quality and trust.",
    icon: trust,
  },
  {
    title: "Get Real Followers",
    description:
      "As your followers increase, your posts reach more people who naturally want to follow you. Buying active followers helps accelerate growth and engagement.",
    icon: follower,
  },
];

const BenefitsOfBuying = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Right glow */}
      <div className="absolute right-0 top-0 h-full w-[150px] md:w-[250px] xl:w-[300px] bg-blue-500/10 blur-[100px] xl:blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitleClassName="max-w-[1050px] mx-auto"
          title="Benefits of Buying"
          gradientText="Instagram Followers"
          gradientType="blue"
          subtitle="Buying Instagram followers can quickly boost your credibility and visibility, helping you attract real engagement and grow faster. A larger follower count builds trust, increases exposure, and makes your profile more appealing to brands, collaborators, and new audiences. With trusted providers like Eagle Likes, you can grow safely and effectively while keeping your account secure."
        />

        {/* Mobile & Tablet Swiper */}
        <div className="mt-10 md:mt-14 xl:mt-16 lg:hidden">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".benefits-prev",
              nextEl: ".benefits-next",
            }}
            spaceBetween={20}
            slidesPerView={1.1}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            className="pb-4"
          >
            {benefits.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="
                    h-full
                    rounded-3xl
                    border border-white/10
                    bg-[#0B0B0D]
                    px-5 sm:px-6
                    py-8 sm:py-9
                    text-center
                  "
                >
                  <div className="flex justify-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                    />
                  </div>

                  <h3 className="mt-5 sm:mt-7 text-xl sm:text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 sm:mt-5 text-sm text-Secondary leading-6">
                    {item.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-4">
            <button className="benefits-prev flex items-center justify-center w-10 h-10 rounded-full bg-[linear-gradient(90deg,#018DFF_48%,#0FF_85%)] text-slate-950 hover:opacity-90 active:scale-95 transition-all disabled:opacity-40">
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
            <button className="benefits-next flex items-center justify-center w-10 h-10 rounded-full bg-[linear-gradient(90deg,#018DFF_48%,#0FF_85%)] text-slate-950 hover:opacity-90 active:scale-95 transition-all disabled:opacity-40">
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>
                {/* Desktop Grid */}
        <div className="hidden lg:grid mt-16 gap-8 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="
                rounded-[32px]
                border border-white/10
                bg-[#0B0B0D]
                px-8 py-10
                text-center
                transition-all duration-300
                hover:border-white/20
              "
            >
              {/* Icon */}
              <div className="flex justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="mt-8 text-3xl font-semibold text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-6 text-base text-Secondary leading-8">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfBuying;