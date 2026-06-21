import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "../common/SectionTitle";

const faqs = [
  {
    question: "Why should I buy Instagram followers?",
    answer:
      "Buying Instagram followers can help establish social proof and improve your profile's credibility, making it easier to attract organic followers and engagement.",
  },
  {
    question: "Can buying Instagram followers boost my organic engagement?",
    answer:
      "Yes, a strong follower count can increase trust and encourage more users to interact with your content naturally.",
  },
  {
    question: "How quickly will I receive Instagram followers after purchase?",
    answer:
      "Most orders begin processing within minutes and are delivered gradually for a natural growth experience.",
  },
  {
    question: "Will my account get banned for buying Instagram followers?",
    answer:
      "No. Our delivery methods are designed to be safe and comply with Instagram's standards.",
  },
  {
    question:
      "Can buying Instagram followers help me get featured on the Explore page?",
    answer:
      "Having more followers may increase visibility, but appearing on the Explore page depends on content quality and engagement.",
  },
  {
    question:
      "How do Instagram followers from Eagle Likes help with brand growth?",
    answer:
      "More followers improve credibility and can help businesses and creators build stronger online authority.",
  },
];

export default function FAQ() {
  return (
    <section className="section-padding-x py-12 md:py-16 xl:py-20">
      <div className="container mx-auto ">
        <div className="mx-auto max-w-4xl">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Have questions? We've got answers. Here are some of the most common queries about our Instagram Followers."
          />

          <Accordion
            type="single"
            collapsible
            className="mt-8 md:mt-10 xl:mt-14 space-y-3 md:space-y-4"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="
                  rounded-xl md:rounded-2xl
                  border border-white/10
                  bg-[#0B0B0D]
                  px-4 md:px-6
                "
              >
                <AccordionTrigger
                  className="
                    py-4 md:py-5 xl:py-6
                    text-left
                    text-base sm:text-lg lg:text-xl
                    font-semibold
                    text-white
                    hover:no-underline
                  "
                >
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent
                  className="
                    pb-4 md:pb-6
                    text-sm sm:text-base
                    leading-7 md:leading-8
                    text-[#99A1AF]
                  "
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}