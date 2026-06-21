import React from "react";
import Image from "next/image";

import SectionTitle from "../common/SectionTitle";
import { RealFollowersSVG, PricingSVG, SupportSVG, PaymentSVG, DeliverySVG, LoginSVG, ExprienceSVG, SaftySVG } from "../svg/AllSVG";

const comparisonData = [
  {
    feature: "Real Followers",
    icon: RealFollowersSVG,
    eagle: "Always Real",
    others: "Often Bots",
  },
  {
    feature: "Pricing",
    icon: PricingSVG,
    eagle: "Transparent",
    others: "Hidden Fees",
  },
  {
    feature: "Support",
    icon: SupportSVG,
    eagle: "24/7 Support Team",
    others: "Limited Help",
  },
  {
    feature: "Payment Options",
    icon: PaymentSVG,
    eagle: "All Major Cards",
    others: "Few Options",
  },
  {
    feature: "Delivery Speed",
    icon: DeliverySVG,
    eagle: "Lightning Fast",
    others: "Slow & Delayed",
  },
  {
    feature: "Login Info Needed",
    icon: LoginSVG,
    eagle: "Not Required",
    others: "Often Asked",
  },
  {
    feature: "Experience",
    icon: ExprienceSVG,
    eagle: "10+ Years",
    others: "New/Unproven",
  },
  {
    feature: "Account Safety",
    icon: SaftySVG,
    eagle: "100% Secure",
    others: "Risky / Unsafe",
  },
];

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-Primary shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const CrossIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-white/40 shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-16 xl:py-24">
      {/* Background Glows */}
      <div className="absolute left-1/4 top-1/2 h-[180px] w-[180px] md:h-[250px] md:w-[250px] xl:h-[350px] xl:w-[350px] -translate-y-1/2 rounded-full bg-Primary/5 blur-[80px] md:blur-[100px] xl:blur-[120px] pointer-events-none" />

      <div className="absolute right-1/4 top-1/2 h-[180px] w-[180px] md:h-[250px] md:w-[250px] xl:h-[350px] xl:w-[350px] -translate-y-1/2 rounded-full bg-[#8673FF]/5 blur-[80px] md:blur-[100px] xl:blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <SectionTitle title="Why Choose Us?" />

        {/* Desktop Layout */}
        <div className="hidden xmd:block relative mt-16 xl:mt-20">
                    <div className="grid grid-cols-[1fr_1.1fr_1fr] rounded-[40px] border border-white/20 bg-[#0c0d12]/30 backdrop-blur-md overflow-hidden">

            {/* Features */}
            <div className="pl-6 xl:pl-10 pr-4 xl:pr-6 py-8 xl:py-10">
              <div className="h-16 flex items-center mb-6" />

              <div className="flex flex-col">
                {comparisonData.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className={`h-[56px] xl:h-[60px] flex items-center gap-3 text-white border-b border-white/5 ${
                        index === comparisonData.length - 1
                          ? "border-none"
                          : ""
                      }`}
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 text-Secondary">
                        <Icon size={16} />
                      </div>

                      <span className="text-sm xl:text-base font-medium tracking-wide">
                        {item.feature}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Middle Spacer */}
            <div className="py-8 xl:py-10 px-4" />

            {/* Others */}
            <div className="pl-4 xl:pl-6 pr-6 xl:pr-10 py-8 xl:py-10">

              <div className="h-16 flex items-center justify-center mb-6">
                <div className="px-6 py-2 rounded-full border border-blue-500/10 bg-blue-500/5 text-blue-400 text-sm font-semibold tracking-wider">
                  Others
                </div>
              </div>

              <div className="flex flex-col">
                {comparisonData.map((item, index) => (
                  <div
                    key={index}
                    className={`h-[56px] xl:h-[60px] flex items-center gap-3 pl-8 border-b border-white/5 ${
                      index === comparisonData.length - 1
                        ? "border-none"
                        : ""
                    }`}
                  >
                    <CrossIcon />

                    <span className="text-sm xl:text-base font-normal tracking-wide">
                      {item.others}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Eagle Likes Card */}
          <div className="absolute top-[-30px] bottom-[-30px] left-[33.33%] w-[33.33%] z-10">
            <div
              className="
              h-full
              rounded-[36px]
              border-2 border-Primary
              bg-[#090b11]
              shadow-[0_0_40px_rgba(1,170,255,0.15)]
              flex flex-col
              py-8 xl:py-10
              px-5 xl:px-8
              transition-all duration-300
              hover:scale-[1.01]
              hover:shadow-[0_0_50px_rgba(1,170,255,0.22)]
            "
            >
              <div className="h-16 flex items-center justify-center gap-3 mb-6">
                <Image
                  src="/images/logo.png"
                  alt="Eagle Likes"
                  width={130}
                  height={32}
                  className="object-contain max-h-7 xl:max-h-8 w-auto"
                />
              </div>

              <div className="flex flex-col">
                {comparisonData.map((item, index) => (
                  <div
                    key={index}
                    className={`h-[56px] xl:h-[60px] flex items-center gap-3 text-white border-b border-white/10 ${
                      index === comparisonData.length - 1
                        ? "border-none"
                        : ""
                    }`}
                  >
                    <CheckIcon />

                    <span className="text-sm xl:text-base font-semibold tracking-wide">
                      {item.eagle}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
                {/* Mobile / Tablet Layout */}
{/* Mobile / Tablet Layout */}
<div className="xmd:hidden mt-8 overflow-x-auto">
  <div className="min-w-[500px] rounded-[24px] border border-white/20 bg-[#0c0d12]/30 backdrop-blur-md overflow-hidden">

    {/* Header */}
    <div className="grid grid-cols-3 border-b border-white/10">
      <div className="p-3"></div>

      <div className="flex items-center justify-center p-3 border-x border-white/10 bg-[#090b11]">
        <Image
          src="/images/logo.png"
          alt="Eagle Likes"
          width={90}
          height={20}
          className="object-contain"
        />
      </div>

      <div className="flex items-center justify-center p-3">
        <span className="rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-[10px] font-semibold text-blue-400">
          Others
        </span>
      </div>
    </div>

    {/* Rows */}
    {comparisonData.map((item, index) => {
      const Icon = item.icon;

      return (
        <div
          key={index}
          className={`grid grid-cols-3 items-center ${
            index !== comparisonData.length - 1
              ? "border-b border-white/10"
              : ""
          }`}
        >
          {/* Feature */}
          <div className="flex items-center gap-2 p-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5">
              <Icon size={14} className="text-[#99A1AF]" />
            </div>

            <span className="text-[10px] font-medium text-white">
              {item.feature}
            </span>
          </div>

          {/* Eagle */}
          <div className="flex items-center gap-2 border-x border-white/10 bg-[#090b11] p-3">
            <CheckIcon />

            <span className="text-[10px] font-semibold text-white">
              {item.eagle}
            </span>
          </div>

          {/* Others */}
          <div className="flex items-center gap-2 p-3">
            <CrossIcon />

            <span className="text-[10px] text-[#99A1AF]">
              {item.others}
            </span>
          </div>
        </div>
      );
    })}
  </div>
</div>

      </div>
    </section>
  );
};

export default WhyChooseUs;