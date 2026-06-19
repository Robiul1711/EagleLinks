export default function FAQ() {
  const faqs = [
    {
      question: "What is this template about?",
      answer: "It is a standard landing page skeleton with organized folder structures and pre-configured fonts.",
    },
    {
      question: "How do I use the different font families?",
      answer: "We configure Inter, Open Sans, and Rethink Sans in globals.css. You can apply them using the classes font-inter, font-open-sans, or font-rethink-sans.",
    },
    {
      question: "Do I need to run additional setups?",
      answer: "No, the files are set up cleanly within the project structure, resolving correctly under path aliases.",
    },
  ];

  return (
    <section className="bg-background py-24 sm:py-32 font-open-sans" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center font-inter mb-12">
            Frequently Asked Questions
          </h2>
          <dl className="mt-10 space-y-8 divide-y divide-border">
            {faqs.map((faq, index) => (
              <div key={index} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                <dt className="text-base font-semibold leading-7 text-foreground lg:col-span-5 font-inter">
                  {faq.question}
                </dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base leading-7 text-muted-foreground font-open-sans">
                    {faq.answer}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
