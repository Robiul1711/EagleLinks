import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import whub from "@/public/images/whybuy.png";
import whub2 from "@/public/images/boost.png";
const WhyImportant = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-0 bottom-0 h-[300px] w-[300px] bg-blue-500/10 blur-[150px]" />
      <div className="absolute right-0 top-0 h-full w-[300px] bg-blue-500/10 blur-[150px]" />

      <div className="container mx-auto px-4">
        <SectionTitle
          title="Why Are"
          gradientText="Instagram Followers Important?"
          subtitle="The followers are important because they represent your audience, your credibility, and your influence. A larger, more engaged following equates to reaching more people, building trust, and creating real opportunities for growth and brand success."
          subtitleClassName="max-w-[780px]"
          gradientType="instagram"
        />

        <div className="space-y-16">
          {/* First Row */}
          <div className="grid items-center gap-10 lg:grid-cols-2 mt-16">
            {/* Content */}
            <div className="max-w-2xl ">
              <SectionTitle
                title="Why Buy Instagram Followers?"
                subtitle={<>
                Buying Instagram followers can help you grow faster and
                  establish instant credibility in a competitive space. A
                  larger follower count makes your profile look trustworthy,
                  attracts real engagement, and increases your chances of being
                  discovered by new audiences.  
                  <br />
                  <br />
                  Whether you're a brand, influencer, or creator, more
                  followers can boost visibility, strengthen your reputation,
                  and open doors to new opportunities and collaborations.
                </>}
                align="start"
              />
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src={whub}
                alt="Why Buy Followers"
                width={420}
                height={520}
                className="rounded-[60px] object-cover drop-shadow-[0_0_40px_rgba(0,153,255,.5)]"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Image */}
            <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
              <Image
                src={whub2}
                alt="Boost Organic Growth"
                width={420}
                height={520}
                className="rounded-[60px] object-cover drop-shadow-[0_0_40px_rgba(0,153,255,.5)]"
              />
            </div>

            {/* Content */}
            <div className="order-1 max-w-2xl lg:order-2">
                      <SectionTitle
                title="    Boost Organic Growth"
                subtitle={<>
                          Boost your organic growth on Instagram by buying followers
                  from Eagle Likes. Our high-quality, real followers help
                  increase your visibility and attract genuine engagement. With
                  a stronger follower base, your content reaches more people
                  naturally, enhancing credibility and trust.
                  <br />
                  <br />
         Eagle Likes makes it easy to kickstart your growth and build
                  lasting success on Instagram—safely, quickly, and effectively.
                </>}
                align="start"
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyImportant;
