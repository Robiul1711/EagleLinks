"use client";

import { useState } from "react";
import Image from "next/image";
import { FaCheck, FaStar, FaUser } from "react-icons/fa";

const packages = [
  { amount: 100, discount: "18%off" },
  { amount: 250, discount: "40%off" },
  { amount: 500, discount: "52%off" },
  { amount: 1000, discount: "63%off" },
  { amount: 2500, discount: "68%off" },
  { amount: 5000, discount: "70%off" },
  { amount: 10000, discount: "83%off" },
  { amount: 20000, discount: "85%off" },
];

const followers = [
  { image: "/images/u1.png", text: "started following you.", time: "10m" },
  { image: "/images/u2.png", text: "started following you.", time: "15m" },
  { image: "/images/u3.png", text: "started following you.", time: "20m" },
  { image: "/images/u4.png", text: "started following you.", time: "30m" },
  { image: "/images/u5.png", text: "started following you.", time: "50m" },
  { image: "/images/u6.png", text: "started following you.", time: "55m" },
  { image: "/images/u1.png", text: "started following you.", time: "1h" },
  { image: "/images/u2.png", text: "started following you.", time: "1h 10m" },
  { image: "/images/u3.png", text: "started following you.", time: "1h 30m" },
  { image: "/images/u4.png", text: "started following you.", time: "2h" },
  { image: "/images/u5.png", text: "started following you.", time: "2h 20m" },
  { image: "/images/u6.png", text: "started following you.", time: "3h" },
];

export default function PackageCard() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-3xl mx-auto ">

        {/* Package Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {packages.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelected(index)}
              className={`overflow-hidden rounded-2xl sm:rounded-3xl xl:rounded-[30px] border transition-all duration-300 ${
                selected === index
                  ? "border-[#0D7FFF] shadow-[0_0_25px_rgba(13,127,255,.5)]"
                  : "border-white/10"
              }`}
            >
              <div
                className={`py-3 sm:py-4 xl:py-5 ${
                  selected === index
                    ? "bg-gradient-to-r from-[#0D7FFF] to-[#1BB1FF]"
                    : "bg-white/10"
                }`}
              >
                <h3 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-white">
                  {item.amount}
                </h3>
              </div>

              <div className="bg-[#111111] py-3 sm:py-4 xl:py-5">
                <p className="text-base sm:text-xl xl:text-2xl text-white">
                  {item.discount}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Price + Button */}
        <div className="mt-8 xl:mt-10 flex flex-col gap-6 xl:flex-row items-center justify-between">
          <div>
            <div className="flex items-start">
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                $2.97
              </h2>

              <span className="ml-2 mt-2 text-lg sm:text-xl xl:text-2xl text-white/50 line-through">
                $3.62
              </span>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <p className="text-base xl:text-xl text-white">
                you're saving
              </p>

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111]">
                <FaUser className="text-[#00B7FF]" />
              </div>

              <span className="text-base xl:text-xl font-semibold text-[#00B7FF]">
                $0.65
              </span>
            </div>
          </div>

          <button className="h-12 sm:h-14 xl:h-16 w-full max-w-[360px] rounded-xl bg-gradient-to-r from-[#0D7FFF] to-[#1BB1FF] text-lg sm:text-xl xl:text-2xl font-bold text-white shadow-[0_0_25px_rgba(13,127,255,.5)]">
            Buy Now
          </button>
        </div>

        {/* Reviews */}
        <div className="mt-10 xl:mt-14 flex flex-col items-center gap-5 lg:flex-row">
          <div className="flex gap-1 text-xl xl:text-2xl text-[#00B7FF]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <div className="flex -space-x-4">
            {["u1", "u2", "u3", "u4"].map((img) => (
              <Image
                key={img}
                src={`/images/${img}.png`}
                alt=""
                width={55}
                height={55}
                className="w-10 h-10 sm:w-12 sm:h-12 xl:w-[55px] xl:h-[55px] rounded-full border-2 border-black"
              />
            ))}
          </div>

          <div className="text-center lg:text-left">
            <p className="text-2xl xl:text-3xl text-white">
              38,571 people
            </p>

            <p className="text-lg xl:text-2xl text-[#00B7FF]">
              purchased 2+ times
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">

        {/* Features */}
        <div className="mt-10 flex flex-col gap-4 rounded-3xl md:rounded-full border border-white/10 bg-white/5 px-5 sm:px-8 py-4 sm:py-5 md:flex-row md:justify-between">
          {["Fast Checkout", "100% Guarantee", "24/7 Support"].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0D7FFF]">
                <FaCheck className="text-white" />
              </div>

              <span className="text-sm sm:text-base text-white">
                {item}
              </span>
            </div>
          ))}
        </div>
                {/* Followers Preview */}
        <div className="mt-8 xl:mt-10 rounded-3xl xl:rounded-[35px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-4 sm:p-5">
          {/* Header */}
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between border-b border-white/10 pb-4 xl:pb-6">
            <div className="flex items-center gap-3">
              <FaUser className="text-xl xl:text-2xl text-[#00B7FF]" />

              <h3 className="text-xl xl:text-2xl font-bold text-white">
                Followers Preview
              </h3>
            </div>

            <div className="w-fit rounded-full bg-white/10 backdrop-blur-xl px-4 xl:px-5 py-2 xl:py-3 text-sm xl:text-base text-[#00B7FF]">
              ★ Real Followers
            </div>
          </div>

          {/* Scroll Area */}
          <div className="mt-5 overflow-x-auto pb-4 scrollbar-thin scrollbar-track-white/10 scrollbar-thumb-white/50">
            <div className="grid grid-flow-col grid-rows-3 gap-4 min-w-[900px] xl:min-w-[1100px]">
              {followers.map((item, index) => (
                <div
                  key={index}
                  className="
                  flex items-center justify-between
                  rounded-2xl xl:rounded-3xl
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  px-3 xl:px-4
                  py-2 xl:py-3
                  min-w-[250px] sm:min-w-[280px] xl:min-w-[320px]
                "
                >
                  <div className="flex items-center gap-3 xl:gap-4">
                    <Image
                      src={item.image}
                      alt=""
                      width={50}
                      height={50}
                      className="w-10 h-10 xl:w-[50px] xl:h-[50px] rounded-full"
                    />

                    <p className="text-sm xl:text-base text-white">
                      {item.text}
                    </p>
                  </div>

                  <span className="text-xs xl:text-sm text-Secondary">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 xl:mt-10 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
            <div className="flex justify-center items-center gap-1 text-[#0D7FFF] text-lg xl:text-xl">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="text-sm sm:text-base text-white">
              8000+ Verified Customer Reviews
            </p>
          </div>

          <p className="mt-4 text-sm sm:text-base text-gray-400">
            5 million individual users and counting
          </p>
        </div>
      </div>
    </section>
  );
}