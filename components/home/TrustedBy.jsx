import Image from "next/image";
import trusted from "@/public/images/trustedby.png";
import { RealSVG, FastSVG, SafetySVG } from "../svg/AllSVG";
import SectionTitle from "../common/SectionTitle";

const features = [
  {
    title: "Real",
    subtitle: "Organic Growth",
    icon: <RealSVG />,
  },
  {
    title: "Fast",
    subtitle: "Instant Results",
    icon: <FastSVG />,
  },
  {
    title: "Safe",
    subtitle: "100% Secure",
    icon: <SafetySVG />,
  },
];

const TrustedBy = () => {
  return (
    <section className="relative overflow-hidden bg-black py-12 md:py-16 xl:py-20">
      {/* Blue Glow */}
      <div className="absolute bottom-0 left-0 h-[150px] w-[150px] md:h-[220px] md:w-[220px] xl:h-[300px] xl:w-[300px] rounded-full bg-blue-600/10 blur-[80px] md:blur-[120px] xl:blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-10 md:gap-14 xl:gap-20 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-5 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs sm:text-sm text-gray-300">
              <span>↗</span>
              Trusted by 100K+ creators
            </div>

            {/* Heading */}
            <SectionTitle
              title="Get Thousands of"
              gradientText="Active Followers"
              subtitle="Grow your social media presence organically with real, engaged followers. Watch your influence expand across all platforms."
              subtitleClassName="max-w-[780px]"
              gradientType="purple"
              align="start"
            />

            {/* Feature Cards */}
            <div className="mt-8 md:mt-10 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="
                    rounded-3xl xl:rounded-[28px]
                    border border-white/10
                    bg-[#0D0E12]
                    px-5 py-6
                    text-center sm:text-left
                  "
                >
                  <div className="mb-4 flex justify-center sm:justify-start">
                    {item.icon}
                  </div>

                  <h4 className="text-xl xl:text-2xl font-medium text-white">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm xl:text-base leading-6 text-[#99A1AF]">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative overflow-hidden rounded-[30px] sm:rounded-[40px]">
              <Image
                src={trusted}
                alt="Trusted"
                className="
                  w-[280px]
                  sm:w-[350px]
                  md:w-[430px]
                  xl:w-[500px]
                  h-auto
                  rounded-[30px]
                  sm:rounded-[40px]
                  object-cover
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;