import {
  ShoppingCart,
  UserRoundPlus,
  Lock,
} from "lucide-react";

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
    <section className="relative overflow-hidden bg-black py-20 lg:py-28">
      {/* Right Glow */}
      <div className="absolute right-0 top-0 h-full w-[300px] bg-blue-500/10 blur-[140px]" />

      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-white md:text-6xl">
            How it works
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#99A1AF]">
            Ordering services is simple — pick your package, pay quickly,
            and watch your growth begin instantly
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent px-8 py-8"
              >
                {/* Big Number */}
                <span className="absolute right-5 top-2 text-[90px] font-bold text-white/5">
                  {step.number}
                </span>

                {/* Icon */}
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${step.iconBg}`}
                >
                  <Icon className={`h-7 w-7 ${step.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="mt-8 text-2xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-5 max-w-xs text-base leading-8 text-[#99A1AF]">
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