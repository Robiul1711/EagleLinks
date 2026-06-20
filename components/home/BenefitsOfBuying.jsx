import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import higher from "@/public/images/higher.png"
import trust from "@/public/images/trust.png"
import follower from "@/public/images/follower.png"
const benefits = [
  {
    title: "Higher Visibility",
    description:
      "Instagram's algorithm favors the most popular accounts, giving them greater visibility across the platform. By gaining real followers with authentic profiles, you instantly boost your popularity and attract new audiences.",
    icon: higher,
  },
  {
    title: "Strengthen Trust",
    description:
      "Having more followers instantly boosts your Instagram credibility. When new users discover your profile, they see your popularity as proof of quality and trust.",
    icon: trust,
  },
  {
    title: "Get Real Followers",
    description:
      "As your followers increase, your posts reach more people who naturally want to follow you. Buying active followers helps accelerate growth and engagement.",
    icon: follower,
  },
];

const BenefitsOfBuying = () => {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* Right glow */}
      <div className="absolute right-0 top-0 h-full w-[300px] bg-blue-500/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
        subtitleClassName="max-w-[1050px] mx-auto"
          title="Benefits of Buying"
          gradientText="Instagram Followers"
          subtitle="Buying Instagram followers can quickly boost your credibility and visibility, helping you attract real engagement and grow faster. A larger follower count builds trust, increases exposure, and makes your profile more appealing to brands, collaborators, and new audiences. With trusted providers like Eagle Likes, you can grow safely and effectively while keeping your account secure."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="rounded-[32px] border border-white/10 bg-[#0B0B0D] px-8 py-10 text-center transition-all duration-300 hover:border-white/20"
            >
              <div className="flex justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              <h3 className="mt-8 text-4xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-6 text-[#99A1AF] leading-9">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfBuying;