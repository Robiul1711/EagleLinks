import Image from "next/image";
import trusted from "@/public/images/trustedby.png"
import { RealSVG, FastSVG, SafetySVG } from "../svg/AllSVG";

const features = [
  {
    title: "Real",
    subtitle: "Organic Growth",
    icon: <RealSVG/>,
  },
  {
    title: "Fast",
    subtitle: "Instant Results",
    icon: <FastSVG/>,
  },
  {
    title: "Safe",
    subtitle: "100% Secure",
    icon: <SafetySVG/>,
  },
];

const TrustedBy = () => {
  return (
    <section className="relative overflow-hidden bg-black py-20">
      {/* Blue Glow */}
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="container mx-auto">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm text-gray-300">
              <span>↗</span>
              Trusted by 100K+ creators
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-5xl font-bold leading-tight text-white">
              Get Thousands of
              <br />
              <span className="bg-[linear-gradient(90deg,#C27AFF_0%,#FB64B6_50%,#51A2FF_100%)] bg-clip-text text-transparent">
                Active Followers
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-md text-lg leading-8 text-[#99A1AF]">
              Grow your social media presence organically with real, engaged
              followers. Watch your influence expand across all platforms.
            </p>

            {/* Feature Cards */}
            <div className="mt-10 flex flex-wrap gap-4">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="w-[140px] rounded-[28px] border border-white/10 bg-[#0D0E12] px-4 py-6"
                >
                  <div className="mb-3 text-xl">{item.icon}</div>

                  <h4 className="text-2xl font-medium text-white">
                    {item.title}
                  </h4>

                  <p className="mt-3  leading-6 text-[#99A1AF]">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative overflow-hidden rounded-[40px]">
              <Image
                src={trusted}
                alt="Trusted"
                width={500}
                height={600}
                className="rounded-[40px] object-cover"
              />

        
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;