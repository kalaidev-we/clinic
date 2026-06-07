"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Choose Us", href: "#why-choose-us" },
  { name: "Specialists", href: "#specialists" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(20,44,79,0.08)] border-b border-slate-200/70 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between gap-6">
          <Link href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-primary text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-primary/20">
              K
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold text-slate-900 tracking-tight">Kolours Clinic</span>
              <span className="text-[11px] uppercase tracking-[0.28em] text-slate-500">Dermatology & Aesthetics</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-sm text-slate-700">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative transition-colors duration-200 hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-primary hover:bg-white"
            >
              Talk with us
            </a>
            <Link
              href="#appointment"
              className="rounded-full bg-accent px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-[0_15px_40px_rgba(198,156,98,0.24)] transition hover:bg-[#b28849]"
            >
              Book a consult
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[72px] z-40 rounded-b-3xl border-b border-slate-200 bg-white/95 px-6 py-8 shadow-xl backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold text-slate-900 transition hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-slate-200 bg-slate-100 px-5 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-primary hover:bg-white"
              >
                WhatsApp Consultation
              </a>
              <Link
                href="#appointment"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-[#b28849]"
              >
                Book appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
