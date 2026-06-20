"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/flipwords";

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
      <div className="">
        <div
          style={{ backgroundImage: "url('/images/grid.png')" }}
          className="text-center max-w-4xl mx-auto py-16 mt-20"
        >
          {/* Dynamic Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="2xl:mb-8 mb-4"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl 2xl:text-[54px] font-bold leading-tight text-white">
              <span>Buy Instagram Followers with </span>
              <span className="">
                <FlipWords
                  words={actionKeywords}
                  duration={2000}
                  className="font-bold text-Primary"
                />
              </span>
            </div>
            <p className="mt-3 sm:mt-5 text-lg  text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
              Quickly get premium Instagram followers safely and easily! Boost
              your IG influence and engagement instantly! Always great prices
              and offers!
            </p>
          </motion.div>
        </div>
        <div>
          <PriceCard />
        </div>
      </div>
    </section>
  );
};

export default Banner;
