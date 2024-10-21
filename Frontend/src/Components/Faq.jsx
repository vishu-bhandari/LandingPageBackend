import React from "react";

export default function Faq() {
  const faqItems = [
    {
      question: "How should I prepare for this masterclass?",
      answer:
        "You just need a stable internet connection and a curious mind to absorb, implement, and improve your skillset and mindset. You may also make notes if you feel the need.",
    },
    {
      question: "Is this masterclass interactive or only one-sided?",
      answer:
        "This masterclass is highly interactive! You will not only enjoy engaging activities but also interact with the trainer in different ways:\n1. You can participate in live activities and interact with Coach Sushant Singhal\n2. You can participate in speaking exercises being discussed and get live feedback from coach Sushant\n3. You can also ask your questions throughout the exclusive Q&A session.",
    },
    {
      question: "Will I get a reminder before the masterclass begins?",
      answer:
        "Absolutely! You will receive an email around 1 hour before the live training schedule.",
    },
    {
      question: "Whom should I contact if I need any assistance before the Masterclass?",
      answer:
        "Write to us at sushant.publicspeaker@gmail.com. We will get back to you in less than 48 hours.",
    },
    {
      question: "How will I join the online masterclass?",
      answer:
        "Post-booking you will receive a confirmation email within 1 hour. Please check your junk/spam/promotions if not received. The Zoom link would be shared 1-2 hours before the Masterclass via e-mail and the WhatsApp group.",
    },
    {
      question: "What if I am not able to attend the live masterclass?",
      answer:
        "You may write to us at sushant.publicspeaker@gmail.com & we can try to accommodate you in the next session (only if seats are available).",
    },
    {
      question: "Can I get a refund?",
      answer:
        "No. We don't provide refunds in any case. If you are not sure about the workshop, do visit our website www.coachsushantsinghal.com, check out the testimonials, read more about the trainer and make an informed decision.",
    },
  ];

  return (
    <>
      <section className="relative isolate overflow-x-hidden lg:overflow-visible lg:px-0 max-w-8xl m-auto border-gray-100 rounded-xl">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-6 bg-gradient-to-r from-[#0A192F] via-[#0A192F] to-teal-800">
          <div className="relative isolate overflow-hidden bg-custom">
            <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
              <div className="flex flex-col text-left basis-1/2">
                <p className="inline-block font-semibold text-secondary mb-4">
                  F.A.Q
                </p>
                <p className="sm:text-4xl text-3xl font-extrabold text-base-content text-white">
                  Frequently Asked Questions
                </p>
              </div>
              <ul className="basis-[80%] text-white">
                {faqItems.map((item, index) => (
                  <li key={index} className="group">
                    <button
                      className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                      aria-expanded="false"
                    >
                      <span className="flex-1 text-base-content">
                        {item.question}
                      </span>
                      <svg
                        className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="7"
                          width="16"
                          height="2"
                          rx="1"
                          className="transform origin-center transition duration-200 ease-out false"
                        ></rect>
                        <rect
                          y="7"
                          width="16"
                          height="2"
                          rx="1"
                          className="block group-hover:opacity-0 origin-center rotate-90 transition duration-200 ease-out false"
                        ></rect>
                      </svg>
                    </button>
                    <div
                      className="transition-all duration-300 ease-in-out group-hover:max-h-60 max-h-0 overflow-hidden"
                      style={{ transition: "max-height 0.3s ease-in-out 0s" }}
                    >
                      <div className="pb-5 leading-relaxed">
                        <div className="space-y-2 leading-relaxed whitespace-pre-wrap">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
                <li>
                  <a
                    href="#"
                    className="text-orange-500 mt-3 inline-flex font-medium no-underline group  py-2 items-center -tracking-tight"
                  >
                   Register Now
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500 ease-in-out"
                      viewBox="0 0 100 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M78.1233 27.7777H21.8758C20.1259 27.7777 18.751 26.5555 18.751 24.9999C18.751 23.4444 20.1259 22.2222 21.8758 22.2222H78.1233C79.8732 22.2222 81.2482 23.4444 81.2482 24.9999C81.2482 26.5555 79.8732 27.7777 78.1233 27.7777Z"
                        fill="#FF8E26"
                      />
                      <path
                        d="M62.4999 47.2222C62.09 47.2266 61.6837 47.1548 61.307 47.0112C60.9302 46.8677 60.5915 46.6557 60.3125 46.3888C59.0625 45.2777 59.0625 43.5555 60.3125 42.4444L79.9991 24.9444L60.3125 7.4444C59.0625 6.33329 59.0625 4.61107 60.3125 3.49996C61.5624 2.38885 63.4998 2.38885 64.7498 3.49996L86.6238 22.9444C87.8737 24.0555 87.8737 25.7777 86.6238 26.8888L64.7498 46.3333C64.1248 46.8888 63.3123 47.1666 62.5624 47.1666L62.4999 47.2222Z"
                        fill="#FF8E26"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
