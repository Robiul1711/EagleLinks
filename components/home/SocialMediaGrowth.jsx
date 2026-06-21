"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import smg from "@/public/images/socialgrowth.png";
import u1 from "@/public/images/u1.png";
import u2 from "@/public/images/u2.png";
import u3 from "@/public/images/u3.png";
import { FaInstagram, FaHeart, FaYoutube, FaShareAlt } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import { FiTrendingUp, FiUsers, FiTarget, FiBarChart2 } from "react-icons/fi"; // Added for grid cards
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
    <section className=" overflow-hidden container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Side: Interactive Mockup Showcase */}
        <div className="relative flex justify-center">
          <div className="relative">
            {/* Main Image */}
            <Image
              src={smg}
              width={450}
              height={550}
              alt="Social Media Growth Strategy"
              className="rounded-[40px] object-cover"
            />

            {/* Float Icon: Instagram */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 left-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 shadow-[0_0_40px_rgba(255,0,255,.4)]"
            >
              <FaInstagram className="text-3xl text-white" />
            </motion.div>

            {/* Float Icon: Heart */}
            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-40 -left-6 flex h-14 w-14 items-center justify-center rounded-full bg-pink-500 shadow-[0_0_30px_rgba(255,0,128,.4)]"
            >
              <FaHeart className="text-xl text-white" />
            </motion.div>

            {/* Float Icon: Share */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-40 -left-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#34C759] shadow-[0_0_40px_rgba(52,199,89,.4)]"
            >
              <FaShareAlt className="text-xl text-white" />
            </motion.div>

            {/* Float Icon: Youtube */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 -right-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 shadow-[0_0_40px_rgba(255,0,0,.4)]"
            >
              <FaYoutube className="text-3xl text-white" />
            </motion.div>

            {/* Float Icon: Chat */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-44 -right-4 flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 shadow-[0_0_30px_rgba(0,150,255,.4)]"
            >
              <BsChatDotsFill className="text-xl text-white" />
            </motion.div>

            {/* Floating Overlay Card (Bottom Left Corner) */}
            <div className="absolute -bottom-6 -left-4 right-4 bg-[#0D0E12]/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-2xl flex justify-between items-center">
              <div>
                <p className="text-xs text-[#99A1AF]">Followers</p>
                <p className="text-xl font-bold text-white mt-0.5">125K</p>
              </div>
              <div>
                <p className="text-xs text-[#99A1AF]">Engagement</p>
                <p className="text-xl font-bold text-white mt-0.5">4.8M</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-[#34C759] flex items-center justify-end gap-0.5">
                  ↗ 245%
                </p>
                <p className="text-xs text-[#34C759] font-medium mt-0.5">
                  Growth
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Marketing Copy & Grids */}
        <div>
          <div className="inline-flex px-5 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-sm mb-6 font-medium tracking-wide">
            ⚡ Social Media Growth
          </div>

          <SectionTitle
            gradientText="Grow Your Instagram Followers"
            gradientType="instagram"
            subtitle="Grow your Instagram audience with data-driven strategies and proven
            tactics. Build an engaged community and expand your reach
            effortlessly."
           align="start"
          />

          {/* Metrics Dashboard Cards */}
          <div className="grid grid-cols-2 gap-4 mt-10">
            {statsData.map((item, i) => (
              <div
                key={i}
                className="bg-[#0F1014] border border-white/[0.06] rounded-[24px] p-6 flex flex-col items-start"
              >
                <div
                  className={`p-3 rounded-xl ${item.iconBg} mb-4 flex items-center justify-center`}
                >
                  {item.icon}
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  {item.value}
                </h3>
                <p className="text-Secondary text-sm mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Social Proof Banner */}
          <div className="flex items-center gap-3 mt-10 pt-4 border-t border-white/[0.06]">
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
            <p className="text-sm text-[#99A1AF] font-medium">
              Join{" "}
              <span className="text-white font-semibold">50,000+ creators</span>{" "}
              growing their audience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
