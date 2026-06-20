import Banner from "@/components/home/banner";
import FAQ from "@/components/home/faq";
import LightRays from "../components/ui/LightRays";
import BenefitsOfBuying from "../components/home/BenefitsOfBuying";
import TrustedBy from "../components/home/TrustedBy";
import YourPrivacy from "../components/home/YourPrivecy";
import WhyImportant from "../components/home/WhyImportant";
import HowItWorks from "../components/home/HowItWorks";
import SocialMediaGrowth from "../components/home/SocialMediaGrowth";
import WhyEagleLikes from "../components/home/WhyEagleLikes";
import Brand from "../components/home/Brand";
import PackageCard from "../components/home/PackageCard";

export default function Home() {
  return (
    <main className="relative overflow-hidden w-full">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Light Balls */}
        <div
          className="absolute left-[-490px] top-[-100px] w-[979px] h-[979px] bg-no-repeat"
          style={{ backgroundImage: "url('/images/lightball.png')" }}
        />

        <div
          className="absolute right-[-490px] top-[-100px] w-[979px] h-[979px] bg-no-repeat"
          style={{ backgroundImage: "url('/images/lightball.png')" }}
        />

        <div
          className="absolute left-1/2 top-[-490px] w-[979px] h-[979px] -translate-x-1/2 bg-no-repeat"
          style={{ backgroundImage: "url('/images/lightball.png')" }}
        />

        {/* Side Shapes */}
        <div
          className="absolute right-0 top-20 h-full w-[10%] bg-no-repeat"
          style={{ backgroundImage: "url('/images/right.png')" }}
        />

        <div
          className="absolute left-0 top-90 h-full w-[10%] bg-no-repeat"
          style={{ backgroundImage: "url('/images/left.png')" }}
        />
      </div>

      {/* Light Rays */}
      <div className="absolute top-0 left-0 w-full h-screen z-10 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#01AAFF"
          raysSpeed={1.5}
          lightSpread={4.8}
          rayLength={3.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* Content */}
      <div className="relative z-20">
        <Banner />
        <PackageCard />
        <Brand />
        <WhyEagleLikes />
        <SocialMediaGrowth />
        <HowItWorks />
        <WhyImportant />
        <YourPrivacy />
        <TrustedBy />
        <BenefitsOfBuying />
        <FAQ />
      </div>
    </main>
  );
}