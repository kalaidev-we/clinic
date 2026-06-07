"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Priyanka Sen",
    role: "Marketing Director",
    location: "Nungambakkam, Chennai",
    rating: 5,
    text: "I was struggling with severe pigmentation and uneven skin tone for years. After visiting Kolours Clinic, the dermatologists recommended a customized chemical peel and laser therapy regimen. The results are outstanding. My skin feels fresh, clear, and glowing. Best clinic in Chennai!",
    imageLetter: "P",
    bgColor: "bg-amber-100 text-amber-800"
  },
  {
    id: 2,
    name: "Abhishek Raman",
    role: "IT Professional",
    location: "Adyar, Chennai",
    rating: 5,
    text: "Excellent treatment for acne scars. The micro-needling RF procedures they perform here are top-notch. They use state-of-the-art US FDA-approved lasers, and the doctor was extremely transparent about the recovery time and expectations. Highly recommended!",
    imageLetter: "A",
    bgColor: "bg-blue-100 text-blue-800"
  },
  {
    id: 3,
    name: "Meera Krishnan",
    role: "Bride-to-be",
    location: "ECR, Chennai",
    rating: 5,
    text: "I came to Kolours Clinic for a pre-bridal skin rejuvenation package. The personalized care and attention detail by the specialists made me feel so comfortable. My skin looked absolutely flawless and radiant on my wedding day. They truly deserve five stars!",
    imageLetter: "M",
    bgColor: "bg-emerald-100 text-emerald-800"
  },
  {
    id: 4,
    name: "Dr. Rajesh Kumar",
    role: "Orthopedic Surgeon",
    location: "Anna Nagar, Chennai",
    rating: 5,
    text: "As a medical professional, I am highly critical of clinical environments. Kolours Clinic impressed me with its sterile standards, evidence-based care plans, and advanced dermatological technology. Their anti-aging solutions are highly effective and safe.",
    imageLetter: "R",
    bgColor: "bg-purple-100 text-purple-800"
  }
];

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial, isHovered]);

  return (
    <div
      className="relative w-full max-w-4xl mx-auto px-4 py-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden min-h-[340px] md:min-h-[280px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            <div className="glass p-8 md:p-10 rounded-2xl shadow-premium-lg border border-white/40 flex flex-col md:flex-row gap-6 md:gap-8 items-start relative">
              <div className="absolute top-6 right-8 text-accent/25 pointer-events-none">
                <Quote className="w-16 h-16 fill-current" />
              </div>

              {/* Avatar */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center font-heading font-bold text-2xl shadow-premium border-2 border-white ${testimonials[activeIndex].bgColor}`}>
                  {testimonials[activeIndex].imageLetter}
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-text-clinic/90 italic text-base md:text-lg leading-relaxed mb-6 font-medium">
                    &ldquo;{testimonials[activeIndex].text}&rdquo;
                  </p>
                </div>

                <div className="mt-auto">
                  <h4 className="font-heading font-extrabold text-lg text-primary">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-xs text-text-clinic/70 font-semibold tracking-wide uppercase mt-0.5">
                    {testimonials[activeIndex].role} &bull; <span className="text-accent">{testimonials[activeIndex].location}</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Manual Navigation Controls */}
      <div className="flex justify-center items-center space-x-6 mt-8">
        <button
          onClick={prevTestimonial}
          className="w-10 h-10 rounded-full bg-white hover:bg-primary hover:text-white text-primary border border-primary/10 shadow-premium flex items-center justify-center transition-all duration-300 group"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Bullet indicators */}
        <div className="flex items-center space-x-2.5">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-8 bg-accent" : "w-2.5 bg-primary/20 hover:bg-primary/45"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextTestimonial}
          className="w-10 h-10 rounded-full bg-white hover:bg-primary hover:text-white text-primary border border-primary/10 shadow-premium flex items-center justify-center transition-all duration-300 group"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}
