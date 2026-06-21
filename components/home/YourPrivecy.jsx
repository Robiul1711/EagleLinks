import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import secure from "@/public/images/secure.png"
import protection from "@/public/images/protection.png"
const YourPrivacy = () => {
  return (
    <section className="relative overflow-hidden py-20 ">
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

        <div className="mt-16 space-y-10">
          {/* Row 1 */}
          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* Content */}
            <div className="max-w-2xl">
                      <SectionTitle
                title="Secure Payments"
                subtitle={<>
             Your online payment details can be vulnerable without proper
                protection. That's why we use the latest security protocols and
                advanced fraud prevention systems to keep your information
                completely safe.
                  <br />
                  <br />
                     Every transaction on our platform is securely encrypted, and we
                operate on advanced, protected servers to ensure your financial
                information stays completely safe from hackers and
                cybercriminals.
                </>}
                align="start"
              />
   
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
            <div className="order-1 max-w-2xl lg:order-2">
                      <SectionTitle
                title="Secure Payments"
                subtitle={<>
            Your privacy is our top priority. No one will ever know you’ve purchased Instagram followers from Eagle Likes. We strictly protect all client data, including your identity and account details, with advanced encryption and security. We never share customer information—ever.
                  <br />
                  <br />
                You can order privately no full name required and we offer privacy-friendly payment options like Bitcoin and cards. We also never ask for your Instagram password, so your account remains fully secure.
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

export default YourPrivacy;