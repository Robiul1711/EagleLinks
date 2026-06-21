import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import higher from "@/public/images/higher.png";
import trust from "@/public/images/trust.png";
import follower from "@/public/images/follower.png";

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
    <section className="relative overflow-hidden py-12 md:py-16 xl:py-24">
      {/* Right glow */}
      <div className="absolute right-0 top-0 h-full w-[150px] md:w-[250px] xl:w-[300px] bg-blue-500/10 blur-[100px] xl:blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitleClassName="max-w-[1050px] mx-auto"
          title="Benefits of Buying"
          gradientText="Instagram Followers"
          gradientType="blue"
          subtitle="Buying Instagram followers can quickly boost your credibility and visibility, helping you attract real engagement and grow faster. A larger follower count builds trust, increases exposure, and makes your profile more appealing to brands, collaborators, and new audiences. With trusted providers like Eagle Likes, you can grow safely and effectively while keeping your account secure."
        />

        <div className="mt-10 md:mt-14 xl:mt-16 grid gap-5 md:gap-6 xl:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="
                rounded-3xl xl:rounded-[32px]
                border border-white/10
                bg-[#0B0B0D]
                px-5 sm:px-6 xl:px-8
                py-8 sm:py-9 xl:py-10
                text-center
                transition-all duration-300
                hover:border-white/20
              "
            >
              <div className="flex justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="w-14 h-14 sm:w-16 sm:h-16 xl:w-20 xl:h-20 object-contain"
                />
              </div>

              <h3 className="mt-5 sm:mt-7 xl:mt-8 text-xl sm:text-2xl xl:text-3xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 sm:mt-5 xl:mt-6 text-sm xl:text-base text-Secondary leading-6 xl:leading-8">
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