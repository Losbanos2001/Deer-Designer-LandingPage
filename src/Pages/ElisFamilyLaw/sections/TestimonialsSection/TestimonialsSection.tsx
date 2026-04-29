"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "../../../../components/ui/button";
import Quote from "../../../../assets/quote.png";
import Avatar from "../../../../assets/image.png";
import { GoArrowRight } from "react-icons/go";

const TABS = ["Family", "Divorce", "Child Custody", "Domestic Violence"];

const TESTIMONIALS = [
  {
    name: "Mary",
    sub: "Placeholder",
    quote:
      "Autumn Osbourne offered top-notch counsel and legal support during a difficult, high-conflict divorce. My family wouldn't be where we are today without her. The entire Deer Designer Family Law team — from Autumn to paralegals to office staff — consistently goes above and beyond for their clients. I can't recommend Autumn and Deer Designer Family Law enough. Thank you!",
  },
  {
    name: "David and Pam",
    sub: "Placeholder",
    quote:
      "We highly recommend the legal services of attorney Buckley. Attorney Buckley has represented us in a very difficult family issue and we have been more than satisfied. The firm is extremely knowledgeable about family law and has consistently conducted themselves with the utmost professionalism. We would not think of going into a courtroom without them.",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function TestimonialCard({
  name,
  sub,
  quote,
  index,
  inView,
}: {
  name: string;
  sub: string;
  quote: string;
  index: number;
  inView: boolean;
}) {
  return (
    <div
      className="testimonial-card flex w-full flex-col items-center rounded-[5px] border border-[#1c2a3e] px-[30px] py-7 text-center backdrop-blur-md h-full"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(36px)",
        transition: `opacity 0.65s ease ${index * 0.15}s, transform 0.65s ease ${index * 0.15}s`,
      }}
    >
      <Image
        src={Quote}
        alt="quote"
        className="mb-5 h-[72px] w-auto opacity-70"
        aria-hidden
        loading="lazy"
      />

      <p className="mb-[22px] flex-1 font-['Cormorant_Garamond',serif] font-normal italic text-[26px] leading-[1.78] text-[#b8b0a7]">
        {quote}
      </p>

      <div className="mt-auto flex items-center gap-[10px]">
        <Image src={Avatar} alt="avatar" className="h-[38px] w-[38px] rounded-full" loading="lazy" />
        <div>
          <p className="mb-[3px] text-left font-['Aboreto',serif] text-[16.02px] font-normal uppercase tracking-[2px] text-[#C49E78]">
            {name}
          </p>
          <p className="text-left font-serif italic text-[12.5px] text-[#5a4e46]">{sub}</p>
        </div>
      </div>
    </div>
  );
}

/* ── Mobile Swipe Carousel ── */
function MobileCarousel({ inView }: { inView: boolean }) {
  const [current, setCurrent] = useState(0);
  const startX = useRef<number | null>(null);

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    startX.current = null;
  };

  return (
    <div className="w-full max-w-[600px] mx-auto">
      <div
        className="overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex"
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: "transform 0.45s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="w-full flex-shrink-0 px-1">
              <TestimonialCard {...t} index={i} inView={inView} />
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators — reuse the same style as the desktop dots */}
      <div className="mt-5 flex justify-center items-center gap-2">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          >
            <span
              className="block rounded-[3px]"
              style={{
                width: i === current ? "28px" : "9px",
                height: i === current ? "5px" : "9px",
                backgroundColor: i === current ? "#C49E78" : "transparent",
                border: i === current ? "none" : "1px solid #3a4a5e",
                borderRadius: i === current ? "3px" : "50%",
                transition: "all 0.3s ease",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState("Family");
  const { ref: sectionRef, inView } = useInView();

  return (
    <>
      <style>{`
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .section-label   { animation: fadeSlideDown 0.55s ease both; }
        .section-heading { animation: fadeSlideDown 0.6s ease 0.1s both; }
        .tabs-row        { animation: fadeSlideDown 0.6s ease 0.2s both; }
        .dots-row        { animation: fadeSlideUp  0.55s ease 0.4s both; }
        .cta-btn         { animation: fadeSlideUp  0.55s ease 0.5s both; }

        .tab-btn {
          transition: border-color 0.25s ease, background-color 0.25s ease, color 0.25s ease, transform 0.15s ease;
        }
        .tab-btn:hover { transform: translateY(-1px); }
        .tab-btn:active { transform: translateY(0); }

        .testimonial-card {
          transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
        }
        .testimonial-card:hover {
          box-shadow: 0 8px 32px rgba(196,158,120,0.10);
          border-color: rgba(196,158,120,0.35);
          transform: translateY(-4px);
        }
      `}</style>

      <section
        ref={sectionRef}
        className="flex w-full flex-col items-center px-4 sm:px-6 md:px-10 py-[52px]"
      >
        <p className="section-label mb-[10px] font-['Aboreto',serif] text-[15.02px] font-normal uppercase tracking-[3.5px] text-[#C49E78]">
          Testimonials
        </p>

        <h2 className="section-heading mb-[26px] text-center font-['Cormorant_Garamond',serif] font-normal italic text-[32px] sm:text-[42px] md:text-[56.32px] leading-[1.15] text-[#e8ddd3]">
          Hear What Our Clients Have to Say
        </h2>

        <div className="tabs-row mb-[30px] flex items-center gap-2 flex-wrap justify-center sm:flex-nowrap overflow-x-auto max-w-full pb-1">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab-btn whitespace-nowrap rounded-full border-2 font-['Aboreto',serif] text-[13px] sm:text-[15px] md:text-[18px] font-normal uppercase tracking-[2.5px] px-[14px] sm:px-[18px] py-[5px] leading-[1.6] ${tab === activeTab
                  ? "border-[#C49E78] bg-[#C49E78] text-[#1a1008]"
                  : "border-[rgba(184,147,95,0.35)] bg-transparent text-[#7a6e65]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Mobile: 1 card at a time, swipeable */}
        <div className="block md:hidden w-full mb-6">
          <MobileCarousel inView={inView} />
        </div>

        {/* Desktop: 2-column grid */}
        <div className="hidden md:grid w-full max-w-[1242px] grid-cols-2 gap-5 mb-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} {...t} index={i} inView={inView} />
          ))}
        </div>

        {/* Desktop-only static dots */}
        <div className="dots-row mb-[26px] hidden md:flex items-center gap-[5px]">
          <span className="h-[5px] w-7 rounded-[3px] bg-[#C49E78]" />
          <span className="h-[9px] w-[9px] rounded-full border border-[#3a4a5e]" />
          <span className="h-[9px] w-[9px] rounded-full border border-[#3a4a5e]" />
        </div>

        <div className="cta-btn">
          <Button
            variant="outline"
            className="h-auto rounded-none border-[#c49e78] bg-[#c49e78] px-6 py-3 font-ELLIS-button text-[length:var(--ELLIS-button-font-size)] font-[number:var(--ELLIS-button-font-weight)] uppercase tracking-[var(--ELLIS-button-letter-spacing)] text-[#12161e] hover:bg-[#d3ad87] hover:text-[#12161e] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Read More Testimonials <GoArrowRight />
          </Button>
        </div>
      </section>
    </>
  );
}