import React from "react";
import Image from "next/image";
import {
  Users,
  Tag,
  HelpCircle,
  CreditCard,
  Zap,
  LogIn,
  Briefcase,
  ShieldCheck,
} from "lucide-react";
import SectionTitle from "../common/SectionTitle";

const comparisonData = [
  {
    feature: "Real Followers",
    icon: Users,
    eagle: "Always Real",
    others: "Often Bots",
  },
  {
    feature: "Pricing",
    icon: Tag,
    eagle: "Transparent",
    others: "Hidden Fees",
  },
  {
    feature: "Support",
    icon: HelpCircle,
    eagle: "24/7 Support Team",
    others: "Limited Help",
  },
  {
    feature: "Payment Options",
    icon: CreditCard,
    eagle: "All Major Cards",
    others: "Few Options",
  },
  {
    feature: "Delivery Speed",
    icon: Zap,
    eagle: "Lightning Fast",
    others: "Slow & Delayed",
  },
  {
    feature: "Login Info Needed",
    icon: LogIn,
    eagle: "Not Required",
    others: "Often Asked",
  },
  {
    feature: "Experience",
    icon: Briefcase,
    eagle: "10+ Years",
    others: "New/Unproven",
  },
  {
    feature: "Account Safety",
    icon: ShieldCheck,
    eagle: "100% Secure",
    others: "Risky / Unsafe",
  },
];

// Custom SVGs for consistent and clean indicators
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-Primary shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
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
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Background Glows */}
      <div className="absolute left-1/4 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-Primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute right-1/4 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-[#8673FF]/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Title */}
        <SectionTitle
          title="Why Choose Us?"

        />

        {/* Desktop Layout (>= 992px) */}
        <div className="hidden xmd:block relative mt-20">
          {/* Main Outer Container for Left and Right panels */}
          <div className="grid grid-cols-[1fr_1.1fr_1fr] rounded-[40px] border border-white/20 bg-[#0c0d12]/30 backdrop-blur-md overflow-hidden">
            
            {/* Features (Left Column) */}
            <div className="pl-10 pr-6 py-10">
              {/* Feature Header Space (aligned with other headers) */}
              <div className="h-16 flex items-center mb-6" />

              {/* Rows */}
              <div className="flex flex-col">
                {comparisonData.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className={`h-[60px] flex items-center gap-3 text-white border-b border-white/5 ${
                        index === comparisonData.length - 1 ? "border-none" : ""
                      }`}
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 text-Secondary">
                        <Icon size={16} />
                      </div>
                      <span className="text-base font-medium tracking-wide">
                        {item.feature}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Middle Spacer - the grid needs a middle column cell to let the absolute container render */}
            <div className="py-10 px-4" />

            {/* Others (Right Column) */}
            <div className="pl-6 pr-10 py-10">
              {/* Header */}
              <div className="h-16 flex items-center justify-center mb-6">
                <div className="px-6 py-2 rounded-full border border-blue-500/10 bg-blue-500/5 text-blue-400 text-sm font-semibold tracking-wider">
                  Others
                </div>
              </div>

              {/* Rows */}
              <div className="flex flex-col">
                {comparisonData.map((item, index) => (
                  <div
                    key={index}
                    className={`h-[60px] flex items-center justify-start gap-3 pl-8 border-b border-white/5 ${
                      index === comparisonData.length - 1 ? "border-none" : ""
                    }`}
                  >
                    <CrossIcon />
                    <span className="text-base font-normal tracking-wide">
                      {item.others}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Eagle Likes Hero Column (Absolute positioning to overlay perfectly) */}
          <div className="absolute top-[-30px] bottom-[-30px] left-[33.33%] w-[33.33%] z-10">
            <div className="h-full rounded-[36px] border-2 border-Primary bg-[#090b11] shadow-[0_0_40px_rgba(1,170,255,0.15)] flex flex-col py-10 px-8 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_50px_rgba(1,170,255,0.22)]">
              {/* Eagle Likes Logo Header */}
              <div className="h-16 flex items-center justify-center gap-3 mb-6">
                <Image
                  src="/images/logo.png"
                  alt="Eagle Likes"
                  width={150}
                  height={32}
                  className="object-contain max-h-8 w-auto"
                />
              </div>

              {/* Rows */}
              <div className="flex flex-col">
                {comparisonData.map((item, index) => (
                  <div
                    key={index}
                    className={`h-[60px] flex items-center justify-start gap-3 text-white border-b border-white/10 ${
                      index === comparisonData.length - 1 ? "border-none" : ""
                    }`}
                  >
                    <CheckIcon />
                    <span className="text-base font-semibold tracking-wide">
                      {item.eagle}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Mobile / Tablet Layout (< 992px) */}
        <div className="xmd:hidden grid gap-6 sm:grid-cols-2 mt-8">
          {comparisonData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-3xl border border-white/5 bg-[#0c0d12]/50 p-6 backdrop-blur-md flex flex-col justify-between"
              >
                {/* Feature Header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/5">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 text-Secondary">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-white tracking-wide">
                    {item.feature}
                  </h4>
                </div>

                {/* Comparison Columns */}
                <div className="flex flex-col gap-3">
                  {/* Eagle Likes */}
                  <div className="flex items-center gap-3 p-3.5 rounded-2xl border border-Primary/20 bg-Primary/5 text-white">
                    <CheckIcon />
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-Primary">
                        Eagle Likes
                      </span>
                      <span className="text-sm font-semibold tracking-wide">
                        {item.eagle}
                      </span>
                    </div>
                  </div>

                  {/* Others */}
                  <div className="flex items-center gap-3 p-3.5 rounded-2xl border border-white/5 bg-white/[0.02] text-[#99A1AF]">
                    <div className="flex items-center justify-center w-5 h-5">
                      <CrossIcon />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#99A1AF]/50">
                        Others
                      </span>
                      <span className="text-sm font-medium tracking-wide">
                        {item.others}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;