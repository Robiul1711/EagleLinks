"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Info, Sparkles } from "lucide-react";
import { FlipWords } from "@/components/ui/flipwords";
import { Switch } from "@/components/ui/switch";
import PriceCard from "./PriceCard";
const Banner = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const actionKeywords = ["deploying products", "Fast Delivery!"];

  return (
    <section className="relative w-full  flex items-center justify-center  overflow-hidden">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Floating Particles - Fixed logic */}
        {mounted &&
          [...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/70 rounded-full"
              style={{
                // Using percentages ensures they cover the screen without needing window width/height state
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 40, 0],
                x: [0, 20, -20, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
      </div>

      <div
        style={{ backgroundImage: "url('/images/grid.png')" }}
        className="text-center max-w-7xl mx-auto"
      >
        {/* Dynamic Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="2xl:mb-8 mb-4"
        >
          <div className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-bold leading-tight text-white">
            <span>Buy Instagram Followers with </span>
            <span className="">
              <FlipWords
                words={actionKeywords}
                duration={2000}
                className="font-bold text-Primary"
              />
            </span>
          </div>
          <p className="mt-3 sm:mt-5 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            Quickly get premium Instagram followers safely and easily! Boost
            your IG influence and engagement instantly! Always great prices and
            offers!
          </p>
          <div className="mt-10 mx-auto relative w-full max-w-md rounded-full p-[1px] bg-[linear-gradient(90deg,#ff007f_0%,#8b5cf6_100%)] shadow-[0_0_15px_#ff00ff90,0_0_35px_#8b5cf680]">
            <div className="flex items-center gap-5 rounded-full bg-[#0B1325] px-4 py-1.5">
              {/* Switch */}
              <div className="border border-[#fff] rounded-xl p-0.5 w-[10%] flex items-center justify-center">
                <Switch className="data-[state=checked]:bg-[#1f2a44] data-[state=unchecked]:bg-[#1f2a44] [&>span]:bg-white" />
              </div>

              {/* Label */}
              <span className="flex-1 text-[20px] font-medium text-white">
                I need vip followers
              </span>

              {/* Info */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <Info className="h-5 w-5 text-gray-300" />
              </div>
            </div>
          </div>
        </motion.div>
        <div>
          <PriceCard/>
        </div>
      </div>
    </section>
  );
};

export default Banner;
