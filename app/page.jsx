import Banner from "@/components/home/Banner";
import FAQ from "@/components/home/FAQ";
// import LightRays from "../components/ui/LightRays";
import BenefitsOfBuying from "../components/home/BenefitsOfBuying";
import TrustedBy from "../components/home/TrustedBy";
import YourPrivacy from "../components/home/YourPrivecy";
import WhyImportant from "../components/home/WhyImportant";
import HowItWorks from "../components/home/HowItWorks";
import SocialMediaGrowth from "../components/home/SocialMediaGrowth";
import WhyEagleLikes from "../components/home/WhyEagleLikes";
import Brand from "../components/home/Brand";
import PackageCard from "../components/home/PackageCard";
import BackgroundShapes from "@/components/home/BackgroundShapes";
import WhyChooseUs from "../components/home/WhyChooseUs";

export default function Home() {
  return (
    <main className="relative overflow-hidden w-full">
      {/* Background Elements */}
      <BackgroundShapes />

      {/* Light Rays */}
      {/* <div className="absolute top-0 left-0 w-full h-screen z-10 pointer-events-none">
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
      </div> */}

      {/* Content */}
      <div className="relative z-20">
        <Banner />
        <PackageCard />
        <Brand />
        <WhyEagleLikes />
        <SocialMediaGrowth />
        <HowItWorks />
        <WhyImportant />
        <WhyChooseUs />
        <YourPrivacy />
        <TrustedBy />
        <BenefitsOfBuying />
        <FAQ />
      </div>
    </main>
  );
}