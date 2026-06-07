"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, PhoneCall } from "lucide-react";
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
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-550 ${
          isScrolled
            ? "glass py-4 shadow-premium border-b border-white/20"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center space-x-2 group">
            <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-heading font-extrabold text-white text-lg border border-accent/40 shadow-premium group-hover:scale-105 transition-transform">
              K
            </span>
            <span className="font-heading font-extrabold text-xl tracking-wider text-primary group-hover:opacity-95 transition-opacity">
              KOLOURS<span className="text-accent">CLINIC</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-sm text-text-clinic/90 hover:text-primary transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Call to Actions (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 py-2.5 px-4 rounded-full shadow-premium transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.116-2.887-6.98a9.803 9.803 0 0 0-6.979-2.88C6.012 1.881 1.588 6.3 1.584 11.745c-.001 1.702.447 3.361 1.299 4.815L1.87 20.93l4.777-1.776zm13.14-8.083c-.3-.15-1.776-.877-2.05-.976-.275-.1-.475-.15-.675.15-.2.3-.775.976-.95 1.176-.175.2-.35.225-.65.075-1.04-.52-1.742-1.01-2.435-2.2-1.63-2.8 1.53-2.625 2.122-3.8.075-.15.038-.282-.019-.394-.056-.113-.475-1.144-.65-1.569-.17-.41-.358-.354-.49-.36l-.42-.008c-.145 0-.38.054-.578.273-.2.22-0.758.741-0.758 1.806s.775 2.091.884 2.24c.11.15 1.525 2.33 3.69 3.264 1.8.777 2.166.623 2.54.588.375-.035 1.21-.495 1.38-.973.17-.478.17-.887.12-.976-.05-.089-.2-.15-.5-.3z" />
              </svg>
              <span>WhatsApp Us</span>
            </a>
            <Link
              href="#appointment"
              className="bg-primary hover:bg-primary-light text-white text-xs font-bold py-2.5 px-6 rounded-full border border-primary hover:border-primary-light shadow-premium-lg transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Book Consultation</span>
              <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0" />
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-primary focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] z-40 lg:hidden bg-bg-clinic/95 backdrop-blur-lg flex flex-col justify-between p-8 border-t border-primary/10 shadow-premium-lg overflow-y-auto"
          >
            <nav className="flex flex-col space-y-6 mt-4">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-heading font-bold text-2xl text-primary hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col space-y-4 mb-8"
            >
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center space-x-2 text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 py-3.5 px-6 rounded-full shadow-premium transition-all duration-300"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.116-2.887-6.98a9.803 9.803 0 0 0-6.979-2.88C6.012 1.881 1.588 6.3 1.584 11.745c-.001 1.702.447 3.361 1.299 4.815L1.87 20.93l4.777-1.776zm13.14-8.083c-.3-.15-1.776-.877-2.05-.976-.275-.1-.475-.15-.675.15-.2.3-.775.976-.95 1.176-.175.2-.35.225-.65.075-1.04-.52-1.742-1.01-2.435-2.2-1.63-2.8 1.53-2.625 2.122-3.8.075-.15.038-.282-.019-.394-.056-.113-.475-1.144-.65-1.569-.17-.41-.358-.354-.49-.36l-.42-.008c-.145 0-.38.054-.578.273-.2.22-0.758.741-0.758 1.806s.775 2.091.884 2.24c.11.15 1.525 2.33 3.69 3.264 1.8.777 2.166.623 2.54.588.375-.035 1.21-.495 1.38-.973.17-.478.17-.887.12-.976-.05-.089-.2-.15-.5-.3z" />
                </svg>
                <span>WhatsApp Consultation</span>
              </a>
              <Link
                href="#appointment"
                onClick={() => setIsOpen(false)}
                className="bg-primary hover:bg-primary-light text-white text-center text-sm font-bold py-3.5 px-6 rounded-full border border-primary hover:border-primary-light shadow-premium-lg transition-all duration-300"
              >
                Book Appointment
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
