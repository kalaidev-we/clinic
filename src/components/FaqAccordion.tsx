"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What treatments do you offer for active acne and acne scars?",
    answer:
      "For active acne, we offer targeted medical-grade chemical peels, advanced comedone extraction, and light-based therapies that reduce acne-causing bacteria and sebum production. For acne scars, we use cutting-edge Micro-Needling Radio Frequency (MNRF), Subcision, and laser skin resurfacing to stimulate collagen and rebuild smooth skin texture.",
  },
  {
    question: "Are laser skin treatments safe for Indian skin types?",
    answer:
      "Yes, absolutely. At Kolours Clinic, we use advanced US FDA-approved lasers specifically designed and calibrated for Indian skin types (which range from Fitzpatrick scale III to VI). Our dermatologists carefully customize the wavelengths and energy levels to ensure maximum efficacy while preventing any risk of post-inflammatory hyperpigmentation (PIH).",
  },
  {
    question: "How does pigmentation correction work and how many sessions will I need?",
    answer:
      "Our pigmentation correction treatments target melasma, dark spots, and sun damage using Q-Switched Nd:YAG lasers, specialized depigmentation peels, and medical microdermabrasion. Most clients see visible improvement in 3 to 6 sessions, depending on the depth and type of pigmentation. We also provide a customized home-care maintenance plan.",
  },
  {
    question: "Is there any downtime or recovery period after aesthetic procedures?",
    answer:
      "Downtime depends on the intensity of the treatment. Light chemical peels and laser toning have zero downtime; you can return to work immediately. Deeper resurfacing treatments (like CO2 laser or MNRF) may cause mild redness and swelling for 2 to 4 days. Our specialists will provide complete pre- and post-procedure care instructions to ensure fast and comfortable healing.",
  },
  {
    question: "What should I expect during my first skin consultation at Kolours Clinic?",
    answer:
      "During your first consultation, our dermatologist will perform a detailed skin analysis, evaluate your medical history, discuss your skincare concerns, and examine your skin under specialized equipment. Based on this, they will design a personalized, evidence-based treatment plan that combines clinical procedures and home-care products tailored to your skin's unique needs.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-2xl transition-all duration-300 border ${
              isOpen
                ? "bg-white border-accent/30 shadow-premium"
                : "bg-white/40 border-primary/5 hover:border-accent/20 hover:bg-white/70"
            }`}
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-heading font-extrabold text-base md:text-lg text-primary select-none pr-4">
                {faq.question}
              </span>
              <span
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  isOpen ? "bg-accent/10 border-accent/20 text-accent" : "bg-primary/5 border-primary/5 text-primary"
                }`}
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-0 text-text-clinic/85 text-sm md:text-base leading-relaxed border-t border-primary/5">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
