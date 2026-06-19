import Banner from "@/components/home/banner";
import FAQ from "@/components/home/faq";
import LightRays from "../components/ui/LightRays";

export default function Home() {
  return (
    <main className="section-padding-x">
  <div className="absolute top-0 left-0 w-full h-screen z-10 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#01AAFF"
          raysSpeed={1.5}
          lightSpread={2.8}
          rayLength={3.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <Banner />
      <FAQ />
    </main>
  );
}
