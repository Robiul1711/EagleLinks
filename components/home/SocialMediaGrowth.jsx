"use client";

import Image from "next/image";
import smg from "@/public/images/socialgrowth.png";
import u1 from "@/public/images/u1.png";
import u2 from "@/public/images/u2.png";
import u3 from "@/public/images/u3.png";

import {
  FaInstagram,
  FaHeart,
  FaYoutube,
  FaShareAlt,
} from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import {
  FiTrendingUp,
  FiUsers,
  FiTarget,
  FiBarChart2,
} from "react-icons/fi";

import SectionTitle from "../common/SectionTitle";

export default function SocialMediaGrowth() {
  const statsData = [
    {
      value: "+245%",
      label: "Engagement Rate",
      icon: <FiTrendingUp className="text-xl text-white" />,
      iconBg: "bg-[#FF3B30]",
    },
    {
      value: "+180%",
      label: "Followers Growth",
      icon: <FiUsers className="text-xl text-white" />,
      iconBg: "bg-[#AF52DE]",
    },
    {
      value: "+320%",
      label: "Reach Increase",
      icon: <FiTarget className="text-xl text-white" />,
      iconBg: "bg-[#007AFF]",
    },
    {
      value: "10x",
      label: "Content Impact",
      icon: <FiBarChart2 className="text-xl text-white" />,
      iconBg: "bg-[#34C759]",
    },
  ];

  return (
    <section className="container mx-auto px-4 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-center">

        {/* Left Side */}
        <div className="relative flex justify-center">
          <div className="relative">

            {/* Main Image */}
            <Image
              src={smg}
              alt="Social Media Growth"
              className="w-[260px] sm:w-[340px] md:w-[400px] xl:w-[450px] h-auto rounded-[30px] xl:rounded-[40px] object-cover"
            />

            {/* Instagram */}
            <div className="absolute -top-4 sm:-top-8 left-6 sm:left-10 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 shadow-[0_0_40px_rgba(255,0,255,.4)]">
              <FaInstagram className="text-2xl sm:text-3xl text-white" />
            </div>

            {/* Heart */}
            <div className="absolute top-28 sm:top-40 -left-3 sm:-left-6 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-pink-500 shadow-[0_0_30px_rgba(255,0,128,.4)]">
              <FaHeart className="text-lg sm:text-xl text-white" />
            </div>

            {/* Share */}
            <div className="absolute bottom-28 sm:bottom-40 -left-4 sm:-left-8 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#34C759] shadow-[0_0_40px_rgba(52,199,89,.4)]">
              <FaShareAlt className="text-lg sm:text-xl text-white" />
            </div>

            {/* Youtube */}
            <div className="absolute top-10 sm:top-20 -right-4 sm:-right-8 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-red-600 shadow-[0_0_40px_rgba(255,0,0,.4)]">
              <FaYoutube className="text-2xl sm:text-3xl text-white" />
            </div>

            {/* Chat */}
            <div className="absolute top-32 sm:top-44 right-0 sm:-right-4 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-sky-500 shadow-[0_0_30px_rgba(0,150,255,.4)]">
              <BsChatDotsFill className="text-lg sm:text-xl text-white" />
            </div>

            {/* Bottom Overlay */}
            <div
              className="
              absolute
              -bottom-4
              left-1/2
              -translate-x-1/2
              w-[95%]
              sm:w-auto
              sm:left-auto
              sm:-left-4
              sm:right-4
              sm:translate-x-0
              bg-[#0D0E12]/90
              backdrop-blur-md
              border border-white/10
              rounded-2xl
              p-3 sm:p-4
              shadow-2xl
              flex justify-between items-center gap-4
            "
            >
              <div>
                <p className="text-xs text-[#99A1AF]">
                  Followers
                </p>
                <p className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  125K
                </p>
              </div>

              <div>
                <p className="text-xs text-[#99A1AF]">
                  Engagement
                </p>
                <p className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  4.8M
                </p>
              </div>

              <div className="text-right">
                <p className="text-xs text-[#34C759]">
                  ↗ 245%
                </p>

                <p className="text-xs text-[#34C759] font-medium mt-0.5">
                  Growth
                </p>
              </div>
            </div>

          </div>
        </div>
                {/* Right Side */}
        <div className="">
          {/* Badge */}
          <div className="inline-flex px-4 sm:px-5 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-xs sm:text-sm mb-6 font-medium tracking-wide">
            ⚡ Social Media Growth
          </div>

          <SectionTitle
            gradientText="Grow Your Instagram Followers"
            gradientType="instagram"
            subtitle="Grow your Instagram audience with data-driven strategies and proven tactics. Build an engaged community and expand your reach effortlessly."
            align="start"
          />

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-10">
            {statsData.map((item, i) => (
              <div
                key={i}
                className="
                  bg-[#0F1014]
                  border border-white/[0.06]
                  rounded-2xl xl:rounded-[24px]
                  p-4 sm:p-6
                  flex flex-col items-start
                "
              >
                <div
                  className={`p-3 rounded-xl ${item.iconBg} mb-4 flex items-center justify-center`}
                >
                  {item.icon}
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  {item.value}
                </h3>

                <p className="text-Secondary text-xs sm:text-sm mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 sm:mt-10 pt-4 border-t border-white/[0.06]">
            <div className="flex -space-x-2 overflow-hidden">
              <Image
                className="inline-block h-8 w-8 rounded-full ring-2 ring-black object-cover"
                src={u1}
                alt="User 1"
                width={32}
                height={32}
              />

              <Image
                className="inline-block h-8 w-8 rounded-full ring-2 ring-black object-cover"
                src={u2}
                alt="User 2"
                width={32}
                height={32}
              />

              <Image
                className="inline-block h-8 w-8 rounded-full ring-2 ring-black object-cover"
                src={u3}
                alt="User 3"
                width={32}
                height={32}
              />
            </div>

            <p className="text-center sm:text-left text-sm text-[#99A1AF] font-medium">
              Join{" "}
              <span className="text-white font-semibold">
                50,000+ creators
              </span>{" "}
              growing their audience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}