import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import secure from "@/public/images/secure.png"
import protection from "@/public/images/protection.png"
const YourPrivacy = () => {
  return (
    <section className="relative overflow-hidden bg-black py-20 lg:py-28">
      {/* Blue Glow */}
      <div className="absolute top-0 right-0 h-full w-[300px] bg-blue-600/10 blur-[180px]" />
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] bg-blue-600/10 blur-[180px]" />

      <div className="container mx-auto px-4">
        {/* Title */}
        <SectionTitle
        subtitleClassName="max-w-[880px]"
          title="Your Privacy is Our Focus"
          subtitle="Being careful about your safety online is smart, scammers constantly look for ways to steal from unsuspecting users. You should also protect your social media accounts, as platforms have detailed rules that can be violated easily by mistake."
        />

        <div className="mt-20 space-y-24">
          {/* Row 1 */}
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Content */}
            <div className="max-w-lg">
              <h2 className="text-4xl font-bold text-white lg:text-5xl">
                Secure Payments
              </h2>

              <p className="mt-8 text-lg leading-9 text-[#99A1AF]">
                Your online payment details can be vulnerable without proper
                protection. That's why we use the latest security protocols and
                advanced fraud prevention systems to keep your information
                completely safe.
              </p>

              <p className="mt-6 text-lg leading-9 text-[#99A1AF]">
                Every transaction on our platform is securely encrypted, and we
                operate on advanced, protected servers to ensure your financial
                information stays completely safe from hackers and
                cybercriminals.
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src={secure}
                alt="Secure Payments"
                width={420}
                height={520}
                className="rounded-[60px] object-cover drop-shadow-[0_0_40px_rgba(0,153,255,.45)]"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Image */}
            <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
              <Image
                src={protection}
                alt="Data Protection"
                width={420}
                height={520}
                className="rounded-[60px] object-cover drop-shadow-[0_0_40px_rgba(0,153,255,.45)]"
              />
            </div>

            {/* Content */}
            <div className="order-1 max-w-lg lg:order-2">
              <h2 className="text-4xl font-bold text-white lg:text-5xl">
                Data Protection
              </h2>

              <p className="mt-8 text-lg leading-9 text-[#99A1AF]">
                Your privacy is our top priority. No one will ever know you've
                purchased Instagram followers. We strictly protect all client
                data, including your identity and account details, with advanced
                encryption and security.
              </p>

              <p className="mt-6 text-lg leading-9 text-[#99A1AF]">
                You can order privately with multiple payment options, and we
                never ask for your Instagram password, ensuring your account
                remains completely secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourPrivacy;