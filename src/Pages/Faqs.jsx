import React, { useState } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide a comprehensive suite of digital services including SEO, content marketing, social media management, paid advertising (PPC), web design, and branding solutions.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can contact our support team via email at support@youragency.com or by phone at (123) 456-7890. We’re available Monday to Friday, 9 AM – 6 PM.",
    },
    {
      question: "How do I start a project with you?",
      answer:
        "Start by filling out our contact form or scheduling a free consultation. Our team will assess your needs and guide you through the onboarding process.",
    },
    {
      question: "What is your typical project turnaround time?",
      answer:
        "Turnaround time depends on the project scope. For example, a standard website takes 4–6 weeks, while ongoing marketing campaigns operate on monthly cycles with regular updates and optimizations.",
    },
    {
      question: "Do you offer custom packages or only standard plans?",
      answer:
        "Yes, we offer fully customized packages tailored to your business goals and budget. During your consultation, we'll create a strategy that aligns with your needs.",
    },
    {
      question: "Can I see examples of your past work?",
      answer:
        "Absolutely! Visit our 'Portfolio' page to explore case studies and examples of how we've helped clients succeed across various industries.",
    },
  ];

  return (
    <section id="faqs" className="py-20 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-10 pt-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 last:border-none"
          >
            <div
              className="flex justify-between items-center py-5 cursor-pointer"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <span
                className={`text-xl transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>
            {activeIndex === index && (
              <p className="text-gray-600 text-sm pb-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
