import { ShoppingCart, UserRoundPlus, Lock } from "lucide-react";
import SectionTitle from "../common/SectionTitle";

const steps = [
  {
    number: "01",
    title: "Pick a Service",
    description:
      "Pick the service that fits your goals and start growing now",
    icon: ShoppingCart,
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
  },
  {
    number: "02",
    title: "Enter Information",
    description:
      "Enter your information to get started quickly and securely!",
    icon: UserRoundPlus,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    number: "03",
    title: "Pay Securely",
    description:
      "Pay securely and complete your order in seconds!",
    icon: Lock,
    iconBg: "bg-green-500/10",
    iconColor: "text-green-400",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden bg-black py-12 md:py-16 xl:py-20 2xl:py-28">
      {/* Right Glow */}
      <div className="absolute right-0 top-0 h-full w-[150px] md:w-[220px] xl:w-[300px] bg-blue-500/10 blur-[80px] md:blur-[120px] xl:blur-[140px]" />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <SectionTitle
          title="How it works"
          subtitle="Ordering services is simple — pick your package, pay quickly, and watch your growth begin instantly"
        />

        {/* Cards */}
        <div className="mt-10 md:mt-14 xl:mt-16 grid gap-5 sm:gap-6 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="
                  relative overflow-hidden
                  rounded-3xl xl:rounded-[30px]
                  border border-white/10
                  bg-gradient-to-br
                  from-white/[0.03]
                  to-transparent
                  px-5 sm:px-6 xl:px-8
                  py-6 sm:py-7 xl:py-8
                "
              >
                {/* Big Number */}
                <span
                  className="
                    absolute
                    right-4 top-2
                    text-[60px]
                    sm:text-[75px]
                    xl:text-[90px]
                    font-bold
                    text-white/5
                  "
                >
                  {step.number}
                </span>

                {/* Icon */}
                <div
                  className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl ${step.iconBg}`}
                >
                  <Icon
                    className={`h-6 w-6 sm:h-7 sm:w-7 ${step.iconColor}`}
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-6 sm:mt-7 xl:mt-8
                    text-xl sm:text-2xl
                    font-semibold
                    text-white
                  "
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-4 sm:mt-5
                    max-w-xs
                    text-sm sm:text-base
                    leading-7 xl:leading-8
                    text-[#99A1AF]
                  "
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;