"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  UserCheck,
  Cpu,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Calendar,
  Check,
  ChevronRight,
  MessageCircle
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Counter from "@/components/Counter";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import FaqAccordion from "@/components/FaqAccordion";

// Services Data
const services = [
  {
    title: "Acne Treatment",
    description: "Clinical comedone extractions, chemical peels, and bacteria-targeting light therapy for active acne.",
    tag: "Clear Skin",
    icon: Sparkles,
  },
  {
    title: "Acne Scar Treatment",
    description: "Advanced Micro-Needling RF (MNRF), subcision, and laser skin resurfacing to restore smooth skin.",
    tag: "Textural Revision",
    icon: Cpu,
  },
  {
    title: "Pigmentation Correction",
    description: "Laser toning (Q-Switched Nd:YAG) and specialized depigmentation peels to fade melasma and dark spots.",
    tag: "Even Tone",
    icon: ShieldCheck,
  },
  {
    title: "Anti-Aging Solutions",
    description: "Non-surgical skin tightening, collagen boosters, and fine line revision for a youthful lift.",
    tag: "Youth Restoring",
    icon: UserCheck,
  },
  {
    title: "Laser Treatments",
    description: "US FDA-approved lasers for permanent hair reduction, carbon laser peels, and tattoo removal.",
    tag: "Advanced Tech",
    icon: Cpu,
  },
  {
    title: "Skin Rejuvenation",
    description: "Hydrafacials, carbon facials, and oxygen therapy to immediately restore hydration and radiance.",
    tag: "Instant Glow",
    icon: Sparkles,
  },
  {
    title: "Chemical Peels",
    description: "Medical-grade salicylic, glycolic, and yellow peels designed to safely accelerate skin renewal.",
    tag: "Exfoliation",
    icon: ShieldCheck,
  },
  {
    title: "Scar Reduction",
    description: "Laser therapy and targeted medical treatments to fade surgical scars, stretch marks, and keloids.",
    tag: "Revision",
    icon: UserCheck,
  },
  {
    title: "Customized Consultation",
    description: "In-depth digital skin analysis and dermatological assessment to design your personalized regime.",
    tag: "Expert Assessment",
    icon: Sparkles,
  },
];

// Why Choose Us Data
const features = [
  { title: "Experienced Skin Specialists", description: "Our dermatologists hold MDs and are recognized experts in aesthetic medicine." },
  { title: "Advanced Technology", description: "We use only gold-standard, US FDA-approved lasers and clinical equipment." },
  { title: "Customized Treatments", description: "No pre-packaged routines. Every solution is formulated specifically for your skin." },
  { title: "Safe & Sterile Procedures", description: "We adhere strictly to hospital-grade sterilization and medical safety protocols." },
  { title: "Evidence-Based Care", description: "Every peel, laser setting, and product is backed by clinical research and studies." },
  { title: "Comfortable Environment", description: "Relax in our calming, elegant, Scandinavian-inspired wellness sanctuary." },
  { title: "Transparent Consultations", description: "No hidden charges or unrealistic promises. Clear expectations, every step." },
  { title: "Long-Term Results", description: "We heal your skin from within to ensure the glow lasts long after your sessions." },
];

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "Acne Treatment",
    date: "",
    notes: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in your Name and Phone Number.");
      return;
    }
    // Simulate API call
    setFormSubmitted(true);
  };

  // Animation constants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:py-40 overflow-hidden bg-gradient-to-b from-[#F8FBFD] via-[#F5F8FC] to-white">
        {/* Abstract luxury shapes */}
        <div className="absolute top-16 right-0 w-[420px] h-[420px] rounded-full bg-secondary/25 blur-3xl -z-10" />
        <div className="absolute bottom-10 left-8 w-[280px] h-[280px] rounded-full bg-accent/10 blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-16 items-center">
          {/* Left Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="lg:col-span-7 flex flex-col space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-white/80 py-1.5 px-4 rounded-full border border-primary/5 shadow-premium w-fit">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-xs md:text-sm font-bold tracking-wider text-primary uppercase">
                Premium Dermatology & Aesthetics
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary leading-[1.05] tracking-tight">
              Advanced dermatology for <br />
              <span className="text-accent relative inline-block">
                healthier, luminous skin
                <span className="absolute bottom-2 left-0 w-full h-[6px] bg-secondary/50 -z-10 rounded-full" />
              </span>
            </h1>

            <p className="text-text-clinic/85 text-base md:text-lg max-w-xl leading-relaxed">
              Experience science-led skincare with personalized treatment plans, premium technology, and expert dermatologists who deliver safe, lasting results.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="#appointment"
                className="bg-accent text-white text-center font-bold py-4 px-8 rounded-full shadow-premium-lg border border-accent/20 hover:bg-[#b28849] transition-all duration-300"
              >
                Book Consultation
              </Link>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-white text-primary border border-slate-200 py-4 px-8 rounded-full shadow-premium transition-all duration-300 hover:bg-accent hover:text-white"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.116-2.887-6.98a9.803 9.803 0 0 0-6.979-2.88C6.012 1.881 1.588 6.3 1.584 11.745c-.001 1.702.447 3.361 1.299 4.815L1.87 20.93l4.777-1.776zm13.14-8.083c-.3-.15-1.776-.877-2.05-.976-.275-.1-.475-.15-.675.15-.2.3-.775.976-.95 1.176-.175.2-.35.225-.65.075-1.04-.52-1.742-1.01-2.435-2.2-1.63-2.8 1.53-2.625 2.122-3.8.075-.15.038-.282-.019-.394-.056-.113-.475-1.144-.65-1.569-.17-.41-.358-.354-.49-.36l-.42-.008c-.145 0-.38.054-.578.273-.2.22-0.758.741-0.758 1.806s.775 2.091.884 2.24c.11.15 1.525 2.33 3.69 3.264 1.8.777 2.166.623 2.54.588.375-.035 1.21-.495 1.38-.973.17-.478.17-.887.12-.976-.05-.089-.2-.15-.5-.3z" />
                </svg>
                <span className="font-bold">WhatsApp Us</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-primary/5">
              {[
                { name: "Advanced Treatments", icon: Sparkles },
                { name: "Experienced Specialists", icon: ShieldCheck },
                { name: "Personalized Care", icon: UserCheck },
                { name: "Modern Technology", icon: Cpu },
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-secondary/40 flex items-center justify-center text-primary flex-shrink-0 border border-secondary">
                    <badge.icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-primary/80 leading-snug">
                    {badge.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Hero Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Background design elements */}
            <div className="absolute inset-0 border-[2px] border-accent/25 rounded-3xl translate-x-4 translate-y-4 -z-10" />
            <div className="relative w-full aspect-[4/5] md:w-[400px] lg:w-full rounded-3xl overflow-hidden shadow-premium-lg border-4 border-white">
              <Image
                src="/images/hero_model.png"
                alt="Model showing radiant skin after dermatologist treatments"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Floating Glassmorphism Cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 right-2 md:-right-8 glass py-3 px-5 rounded-2xl shadow-premium border border-white/40 flex items-center space-x-3"
            >
              <div className="w-8 h-8 rounded-full bg-success-clinic/20 border border-success-clinic flex items-center justify-center text-success-clinic">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-primary">95% Scar Reduction</p>
                <p className="text-[10px] text-text-clinic/60 font-semibold uppercase">Priya S. &bull; Patient</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-6 -left-2 md:-left-8 glass py-3 px-5 rounded-2xl shadow-premium border border-white/40 flex items-center space-x-3"
            >
              <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent">
                <Sparkles className="w-4 h-4 fill-accent" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-primary">Glowing Skin in 3 Weeks</p>
                <p className="text-[10px] text-text-clinic/60 font-semibold uppercase">Dr. Ananya S. &bull; Specialist</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-primary py-16 text-white relative overflow-hidden">
        {/* Soft light shapes */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { label: "Happy Clients", number: 5000, suffix: "+" },
              { label: "Advanced Treatments", number: 15, suffix: "+" },
              { label: "Years Experience", number: 10, suffix: "+" },
              { label: "Client Satisfaction", number: 95, suffix: "%" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col space-y-2">
                <div className="text-4xl md:text-5xl font-heading font-extrabold text-accent">
                  <Counter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-xs md:text-sm font-semibold tracking-wider text-secondary/80 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-bg-clinic">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Large Image */}
          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 border-[2px] border-accent/20 rounded-3xl -translate-x-4 translate-y-4 -z-10" />
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-premium-lg border-4 border-white">
              <Image
                src="/images/about_clinic.png"
                alt="Inside Kolours Clinic - Luxury Skincare Treatment Room in Chennai"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Small floating graphic */}
            <div className="absolute bottom-6 right-6 bg-white py-3 px-5 rounded-2xl shadow-premium border border-primary/5 flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <span className="text-xs font-bold text-primary">US FDA-Approved Lasers Only</span>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="w-12 h-1 bg-accent rounded-full" />
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary tracking-tight leading-tight">
              Your Skin Deserves Expert Care
            </h2>
            <p className="text-text-clinic/90 text-base leading-relaxed">
              Kolours Clinic is dedicated to helping individuals achieve healthy, radiant, and confident skin through advanced dermatological care and personalized treatment plans. We bridge the gap between medical diagnostics and premium luxury aesthetics.
            </p>

            {/* Mission / Values / Technology Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
              {[
                { title: "Our Mission", desc: "Delivering world-class aesthetic solutions customized to Indian skin types for safe, visible, and long-term results." },
                { title: "Core Values", desc: "Unwavering medical ethics, safety-first protocols, complete honesty, and clinical precision." },
                { title: "Advanced Technology", desc: "Equipped with state-of-the-art diagnostic imaging and top-tier US FDA-approved lasers." },
                { title: "Personalized Care", desc: "No generic plans. Every treatment regimen is tailored strictly to your skin profile and concerns." },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col space-y-1.5 p-4 bg-white rounded-2xl shadow-premium border border-primary/5 hover:border-accent/20 transition-colors">
                  <h3 className="font-heading font-extrabold text-primary text-sm tracking-wide uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-clinic/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-bg-clinic to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-4 mb-16">
            <span className="text-xs font-bold text-accent tracking-widest uppercase bg-accent/10 py-1.5 px-4 rounded-full border border-accent/20">
              Treatment Menu
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary tracking-tight">
              Premium Skincare & Aesthetic Solutions
            </h2>
            <p className="text-text-clinic/75 text-sm md:text-base leading-relaxed">
              Explore our comprehensive range of dermatological treatments designed to revitalize, clear, and rejuvenate your skin under medical supervision.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-2xl shadow-premium border border-primary/5 hover:border-accent/30 hover:shadow-premium-lg relative overflow-hidden group transition-all duration-300"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />

                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <service.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-[10px] font-bold text-accent bg-accent/10 border border-accent/15 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {service.tag}
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-xl text-primary mb-3 relative z-10">
                  {service.title}
                </h3>
                <p className="text-text-clinic/80 text-sm leading-relaxed relative z-10">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center text-xs font-bold text-primary group-hover:text-accent transition-colors duration-300 relative z-10">
                  <span>Learn details</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-24 bg-bg-clinic">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Slider Column */}
          <div className="lg:col-span-6">
            <BeforeAfterSlider
              beforeImage="/images/before_skin.png"
              afterImage="/images/after_skin.png"
              beforeLabel="Before Treatment"
              afterLabel="After 4 Weeks"
            />
            <p className="text-center text-xs text-text-clinic/60 italic font-semibold mt-4">
              *Real clinical results from a Kolours Clinic patient. Drag the slider to compare skin healing.
            </p>
          </div>

          {/* Description Column */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="w-12 h-1 bg-accent rounded-full" />
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary tracking-tight leading-tight">
              Real Transformations, Evidence-Based Results
            </h2>
            <p className="text-text-clinic/85 text-base leading-relaxed">
              We focus on restoring skin health at a cellular level. Whether you are dealing with active acne breakouts, deep pigmentation, or age-related elasticity loss, our dermatological methods yield visible, clinical improvements.
            </p>

            <div className="space-y-4 pt-2">
              {[
                "Average 90%+ improvement in acne scarring using MNRF & CO2 lasers",
                "Fading of stubborn melasma and sun damage in 3-5 laser toning sessions",
                "Safe procedures conducted under strict clinical supervision of senior MDs",
                "Detailed post-care skincare recommendations to protect your new skin",
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-primary/90">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="#appointment"
                className="inline-flex items-center space-x-2 bg-accent hover:bg-[#b28849] text-white font-bold py-3.5 px-6 rounded-full shadow-premium tracking-wide text-sm transition-all"
              >
                <span>View More Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center space-y-4 mb-16">
            <span className="text-xs font-bold text-accent tracking-widest uppercase bg-accent/10 py-1.5 px-4 rounded-full border border-accent/20">
              The Kolours Edge
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary tracking-tight">
              Why Choose Kolours Clinic?
            </h2>
            <p className="text-text-clinic/75 text-sm md:text-base leading-relaxed">
              We stand apart in our commitment to clinical integrity, cutting-edge technology, and a premium patient experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-bg-clinic p-6 rounded-2xl border border-primary/5 hover:border-accent/20 transition-all duration-300 flex flex-col space-y-3 shadow-premium hover:shadow-premium-lg"
              >
                <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
                <h3 className="font-heading font-extrabold text-base text-primary">
                  {feat.title}
                </h3>
                <p className="text-xs text-text-clinic/75 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Specialists Section */}
      <section id="specialists" className="py-24 bg-bg-clinic">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center space-y-4 mb-16">
            <span className="text-xs font-bold text-accent tracking-widest uppercase bg-accent/10 py-1.5 px-4 rounded-full border border-accent/20">
              Medical Excellence
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary tracking-tight">
              Meet Our Skincare Specialists
            </h2>
            <p className="text-text-clinic/75 text-sm md:text-base leading-relaxed">
              Your skin is in safe hands. Meet our highly certified, experienced dermatologists committed to helping you achieve clear, radiant skin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                name: "Dr. Ananya Sen",
                degree: "MD, DVL (Aesthetic Dermatology)",
                exp: "12+ Years Experience",
                specialization: "Laser Therapies, Anti-Aging & Injectables",
                image: "/images/doctor_female.png",
              },
              {
                name: "Dr. Vikram Malhotra",
                degree: "MD (Dermatology, Venereology & Leprosy)",
                exp: "10+ Years Experience",
                specialization: "Acne Scar Revision, Subcision & Hair Restoration",
                image: "/images/doctor_male.png",
              },
            ].map((doc, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl overflow-hidden shadow-premium-lg border border-primary/5 flex flex-col md:flex-row md:min-h-[320px]"
              >
                {/* Image */}
                <div className="relative w-full md:w-2/5 aspect-[4/5] md:aspect-auto md:min-h-full">
                  <Image
                    src={doc.image}
                    alt={`Portrait of dermatologist ${doc.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="object-cover"
                  />
                </div>

                {/* Details */}
                <div className="p-8 md:w-3/5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Senior Consultant
                    </span>
                    <h3 className="font-heading font-extrabold text-2xl text-primary mt-3 mb-1">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-bold text-text-clinic/70 tracking-wide uppercase">
                      {doc.degree}
                    </p>
                    <div className="h-px bg-primary/10 my-4" />

                    <div className="space-y-2 text-xs text-text-clinic/80 font-medium">
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-accent" />
                        <span>{doc.exp}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-accent" />
                        <span>{doc.specialization}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-primary/5">
                    <Link
                      href="#appointment"
                      className="text-xs font-extrabold text-primary hover:text-accent flex items-center space-x-1 transition-colors"
                    >
                      <span>Book Slot with {doc.name.split(" ")[1]}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Abstract design */}
        <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-secondary/25 blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center space-y-4 mb-16">
            <span className="text-xs font-bold text-accent tracking-widest uppercase bg-accent/10 py-1.5 px-4 rounded-full border border-accent/20">
              Patient Love
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary tracking-tight">
              Testimonials from Chennai
            </h2>
            <p className="text-text-clinic/75 text-sm md:text-base leading-relaxed">
              Read how we have helped thousands of patients regain skin clarity, health, and self-confidence.
            </p>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-bg-clinic">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center space-y-4 mb-16">
            <span className="text-xs font-bold text-accent tracking-widest uppercase bg-accent/10 py-1.5 px-4 rounded-full border border-accent/20">
              Clear Answers
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-text-clinic/75 text-sm md:text-base leading-relaxed">
              Get all the information you need before booking your procedure. Clear advice, zero jargon.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* Appointment CTA Section */}
      <section id="appointment" className="py-24 bg-primary/95 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-secondary/10 blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-left">
            <span className="text-xs font-bold text-accent tracking-widest uppercase bg-white/10 w-fit py-1.5 px-4 rounded-full border border-white/10">
              Take Action Today
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white leading-tight">
              Start Your Skin <br />
              Transformation Today
            </h2>
            <p className="text-secondary/80 text-base md:text-lg leading-relaxed">
              Book your customized skin analysis and clinical examination with our senior dermatologists. Fill in the form, and our coordinator will connect with you to confirm your preferred slot.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-3 text-secondary">
                <Check className="w-5 h-5 stroke-[3]" />
                <span className="font-semibold text-sm">Personalized, in-depth dermatological analysis</span>
              </div>
              <div className="flex items-center space-x-3 text-secondary">
                <Check className="w-5 h-5 stroke-[3]" />
                <span className="font-semibold text-sm">Full transparency on prices, recovery times, and sessions</span>
              </div>
              <div className="flex items-center space-x-3 text-secondary">
                <Check className="w-5 h-5 stroke-[3]" />
                <span className="font-semibold text-sm">Comfortable, sterile, world-class clinic in Chennai</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-6 border-t border-white/10">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-accent hover:bg-[#b28849] text-white font-bold py-3.5 px-6 rounded-full shadow-premium transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WhatsApp Consultation</span>
              </a>
            </div>
          </div>

          {/* Right Form Container */}
          <div className="lg:col-span-6 bg-white text-text-clinic p-8 md:p-10 rounded-3xl shadow-premium-lg border border-white/10 relative">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 flex flex-col items-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-success-clinic/20 border border-success-clinic flex items-center justify-center text-success-clinic">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-primary">
                  Request Received!
                </h3>
                <p className="text-text-clinic/75 text-sm max-w-sm">
                  Thank you for booking with Kolours Clinic. Our scheduling desk will call or WhatsApp you within the next 2 hours to finalize your dermatologist appointment.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-bold text-accent hover:underline pt-4"
                >
                  Need to book another slot?
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-heading font-extrabold text-2xl text-primary mb-2">
                  Request Appointment
                </h3>
                <p className="text-xs text-text-clinic/60 font-semibold mb-6">
                  Fields marked with * are required. We guarantee patient data confidentiality.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-primary tracking-wide uppercase mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Priyan"
                      className="w-full bg-bg-clinic border border-primary/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-primary tracking-wide uppercase mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-bg-clinic border border-primary/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-primary tracking-wide uppercase mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. name@example.com"
                      className="w-full bg-bg-clinic border border-primary/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="treatment" className="block text-xs font-bold text-primary tracking-wide uppercase mb-1.5">
                      Treatment Area
                    </label>
                    <select
                      id="treatment"
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleInputChange}
                      className="w-full bg-bg-clinic border border-primary/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent"
                    >
                      <option>Acne Treatment</option>
                      <option>Acne Scar Treatment</option>
                      <option>Pigmentation Correction</option>
                      <option>Anti-Aging Solutions</option>
                      <option>Laser Hair Reduction</option>
                      <option>Skin Rejuvenation</option>
                      <option>Chemical Peels</option>
                      <option>Customized Skin Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="date" className="block text-xs font-bold text-primary tracking-wide uppercase mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full bg-bg-clinic border border-primary/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label htmlFor="notes" className="block text-xs font-bold text-primary tracking-wide uppercase mb-1.5">
                    Brief skin concerns or messages (optional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Describe your concerns e.g. acne, dark patches, dark circles..."
                    className="w-full bg-bg-clinic border border-primary/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-[#b28849] text-white font-bold py-4 rounded-xl shadow-premium-lg border border-accent/20 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer mt-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Appointment</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-bg-clinic border-t border-primary/5 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          {/* Logo & About */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <Link href="#home" className="flex items-center space-x-2">
              <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-heading font-extrabold text-white text-lg border border-accent/40 shadow-premium">
                K
              </span>
              <span className="font-heading font-extrabold text-xl tracking-wider text-primary">
                KOLOURS<span className="text-accent">CLINIC</span>
              </span>
            </Link>
            <p className="text-xs text-text-clinic/75 leading-relaxed max-w-sm">
              Kolours Clinic is a premium skincare, aesthetic, and laser clinic in Chennai. Led by top certified dermatologists, we provide science-backed treatments to reveal healthy, glowing, and confident skin.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              {["facebook", "instagram", "twitter", "linkedin"].map((social, idx) => (
                <a
                  key={idx}
                  href={`https://${social}.com/koloursclinic`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white border border-primary/5 flex items-center justify-center text-text-clinic/60 hover:text-accent hover:border-accent/40 transition-colors shadow-premium"
                  aria-label={`Follow us on ${social}`}
                >
                  <span className="text-xs capitalize font-semibold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="font-heading font-extrabold text-primary text-xs uppercase tracking-widest">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2.5 text-xs font-semibold text-text-clinic/75">
              <Link href="#home" className="hover:text-accent transition-colors">Home</Link>
              <Link href="#about" className="hover:text-accent transition-colors">About Us</Link>
              <Link href="#services" className="hover:text-accent transition-colors">Services Menu</Link>
              <Link href="#why-choose-us" className="hover:text-accent transition-colors">Why Choose Us</Link>
              <Link href="#specialists" className="hover:text-accent transition-colors">Our Specialists</Link>
              <Link href="#faq" className="hover:text-accent transition-colors">FAQ</Link>
            </nav>
          </div>

          {/* Our Address & Contact */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="font-heading font-extrabold text-primary text-xs uppercase tracking-widest">
              Contact Us
            </h4>
            <div className="flex flex-col space-y-3.5 text-xs text-text-clinic/75 font-semibold">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  12, Khader Nawaz Khan Road, <br />
                  Nungambakkam, Chennai - 600006
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span>contact@koloursclinic.in</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>
                  Mon - Sat: 10:00 AM - 7:00 PM <br />
                  Sunday: Closed
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Panel */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="font-heading font-extrabold text-primary text-xs uppercase tracking-widest">
              Location Map
            </h4>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-premium border border-primary/5">
              {/* Google Maps embed code configured for Khader Nawaz Khan Road, Chennai */}
              <iframe
                title="Kolours Clinic Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7214592078696!2d80.25143397455005!3d13.061214087262657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526615b172a5a5%3A0xe54e60408c697843!2sKhader%20Nawaz%20Khan%20Rd%2C%20Nungambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600006!5e0!3m2!1sen!2sin!4v1717765100000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold text-accent hover:underline text-right"
            >
              Get directions on Google Maps
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-text-clinic/55 tracking-wider uppercase">
          <p>&copy; {new Date().getFullYear()} Kolours Clinic. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-accent">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent">Terms of Service</Link>
            <Link href="#" className="hover:text-accent">Treatment Disclaimers</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
