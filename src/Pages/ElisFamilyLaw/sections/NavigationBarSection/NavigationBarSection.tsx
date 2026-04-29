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
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
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
    const sections = document.querySelectorAll("[id]");

    const firstSection = document.querySelector("[id]") as HTMLElement | null;
    if (firstSection) setActiveSection(firstSection.id);

    const observerOptions = {
      root: null,
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

  const handleMobileNavClick = (target: string) => {
    setOpen(false);
    setTimeout(() => {
      scrollTo(target);
    }, 300);
  };

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
          <button
            type="button"
            onClick={() => scrollTo("home")}
            className="shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c49e78]"
            aria-label="Go to home"
          >
            <Image
              className="h-[35px] w-[177px] object-cover"
              alt="Deer designer"
              src={DeerDesigner}
            />
          </button>

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
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden text-ellis-pure-white p-2 -mr-2 active:opacity-70 transition-opacity"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </motion.div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-[#c49e7833] relative z-50 bg-[#16191f]"
          >
            <div className="px-6 pb-6">
              <nav aria-label="Mobile Primary">
                <ul className="flex flex-col gap-1 pt-4">
                  <li>
                    <button
                      type="button"
                      onClick={() => handleMobileNavClick("home")}
                      className="[font-family:'Aboreto',Helvetica] text-sm font-normal leading-[18.8px] tracking-[1.31px] whitespace-nowrap w-full text-left py-3 px-2 active:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c49e78]"
                      style={{
                        color: activeSection === "" ? "#c49e78" : "#fff7f0",
                      }}
                    >
                      HOME
                    </button>
                  </li>
                  {navItems.map((item) => (
                    <li key={item.label}>
                      <button
                        type="button"
                        onClick={() => handleMobileNavClick(item.target)}
                        className="[font-family:'Aboreto',Helvetica] text-sm font-normal leading-[18.8px] tracking-[1.31px] whitespace-nowrap w-full text-left py-3 px-2 active:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c49e78]"
                        style={{
                          color:
                            activeSection === item.target
                              ? "#c49e78"
                              : "#fff7f0",
                        }}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              <Button
                type="button"
                variant="outline"
                className="mt-6 w-full h-auto rounded-none border-[#c49e78] bg-transparent px-[16.9px] py-[11.26px] text-ellis-camel-leather hover:bg-[#c49e78]/10 hover:text-ellis-camel-leather active:bg-[#c49e78]/20"
              >
                <span className="[font-family:'Aboreto',Helvetica] text-[15px] font-normal leading-[18.8px] tracking-[1.31px]">
                  SCHEDULE A CONSULTATION
                </span>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};