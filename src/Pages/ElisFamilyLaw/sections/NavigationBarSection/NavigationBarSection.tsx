"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "../../../../components/ui/button";
import DeerDesigner from "../../../../assets/Header-Logo.png";

const navItems = [
  { label: "ABOUT", target: "about" },
  { label: "FAMILY LAW", target: "family-law" },
  { label: "ESTATE PLANNING", target: "estate-planning" },
  { label: "TESTIMONIALS", target: "testimonials" },
  { label: "RESOURCES", target: "footer" },
  { label: "CONTACT", target: "footer" },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const NavigationBarSection = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // FIX 1: Broadened selector from "section[id]" to "[id]"
    // so <footer id="footer">, <div id="...">, etc. are all observed
    const sections = document.querySelectorAll("[id]");

    // FIX 2: Set the first section as active on initial load
    const firstSection = document.querySelector("[id]") as HTMLElement | null;
    if (firstSection) setActiveSection(firstSection.id);

    const observerOptions = {
      root: null,
      // FIX 3: Slightly loosened rootMargin for a better "feel"
      rootMargin: "-10% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className={`w-full border-b-[0.94px] border-[#c49e7833] bg-[#16191f] transition-all duration-300 ${
        scrolled ? "shadow-lg shadow-black/20" : ""
      }`}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-6 px-6 md:px-[60px] lg:px-[100px]"
        initial={{ height: "91px", paddingTop: "21px", paddingBottom: "21px" }}
        animate={{
          height: scrolled ? "70px" : "91px",
          paddingTop: scrolled ? "12px" : "21px",
          paddingBottom: scrolled ? "12px" : "21px",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* LEFT */}
        <div className="flex min-w-0 items-center gap-6 lg:gap-[61px]">
          <Image
            className="h-[35px] w-[177px] shrink-0 object-cover"
            alt="Deer designer"
            src={DeerDesigner}
          />

          {/* DESKTOP NAV */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-[18px]">
              {navItems.map((item) => (
                <li key={item.label}>
                  <motion.button
                    type="button"
                    onClick={() => scrollTo(item.target)}
                    className="[font-family:'Aboreto',Helvetica] text-sm font-normal leading-[18.8px] tracking-[1.31px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c49e78] whitespace-nowrap"
                    style={{
                      color:
                        activeSection === item.target ? "#c49e78" : "#fff7f0",
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* DESKTOP CTA */}
          <div className="hidden lg:block">
            <Button
              type="button"
              variant="outline"
              className="h-auto shrink-0 rounded-none border-[#c49e78] bg-transparent px-[16.9px] py-[11.26px] text-ellis-camel-leather hover:bg-[#c49e78]/10 hover:text-ellis-camel-leather"
            >
              <span className="[font-family:'Aboreto',Helvetica] text-[15px] font-normal leading-[18.8px] tracking-[1.31px] whitespace-nowrap">
                SCHEDULE A CONSULTATION
              </span>
            </Button>
          </div>

          {/* HAMBURGER (mobile only) */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-ellis-pure-white"
          >
            ☰
          </button>
        </div>
      </motion.div>

      {/* FIX 4: Mobile menu wrapped in AnimatePresence for smooth open/close */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-[#c49e7833] px-6 pb-6 overflow-hidden"
          >
            <nav aria-label="Mobile Primary">
              <ul className="flex flex-col gap-4 pt-4">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <motion.button
                      type="button"
                      onClick={() => {
                        scrollTo(item.target);
                        setOpen(false);
                      }}
                      className="[font-family:'Aboreto',Helvetica] text-sm font-normal leading-[18.8px] tracking-[1.31px] whitespace-nowrap"
                      style={{
                        color:
                          activeSection === item.target
                            ? "#c49e78"
                            : "#fff7f0",
                      }}
                      whileHover={{ scale: 1.05, x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </nav>

            <Button
              type="button"
              variant="outline"
              className="mt-6 w-full h-auto rounded-none border-[#c49e78] bg-transparent px-[16.9px] py-[11.26px] text-ellis-camel-leather hover:bg-[#c49e78]/10 hover:text-ellis-camel-leather"
            >
              <span className="[font-family:'Aboreto',Helvetica] text-[15px] font-normal leading-[18.8px] tracking-[1.31px]">
                SCHEDULE A CONSULTATION
              </span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};