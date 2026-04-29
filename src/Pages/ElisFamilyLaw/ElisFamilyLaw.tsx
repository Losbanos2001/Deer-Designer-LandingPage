import Image from "next/image";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { HeroIntroductionSection } from "./sections/HeroIntroductionSection/HeroIntroductionSection";
import { AboutSection } from "./sections/About/AboutSection";
import { FamilyLawSection } from "./sections/FamilyLawSection/FamilyLawSection";
import { AccoladeSection } from "./sections/EstatePlaningSection";
import { FooterSection } from "./sections/FooterSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import HeaderTop from "../../assets/Header-Top.png";

const topBarItems = [
  {
    label: "CALL",
    value: "919-626-9148",
  },
];

export const ElisFamilyLaw = (): JSX.Element => {
  return (
    <main className="relative flex min-h-screen w-full flex-col bg-[#12161E] text-ellis-pure-white">
      <div className="sticky top-0 z-50 w-full bg-[#12161E]">
        <section
          className="w-full border-b border-[#c49e7833] bg-[#12161E]"
          aria-label="Contact information"
        >
          <div className="mx-auto flex min-h-10 w-full max-w-[1440px] items-center justify-between gap-4 px-4 py-1.5 sm:px-6 lg:px-[100px]">
            <Image
              className="h-auto max-w-full shrink-0"
              alt="Header Top"
              src={HeaderTop}
            />
            <div className="flex items-center gap-2">
              {topBarItems.map((item) => (
                <div key={item.value} className="inline-flex items-center gap-2">
                  <span className="font-ELLIS-subheadings text-[length:var(--ELLIS-subheadings-font-size)] font-[number:var(--ELLIS-subheadings-font-weight)] leading-[var(--ELLIS-subheadings-line-height)] tracking-[var(--ELLIS-subheadings-letter-spacing)] text-[#c49e78] [font-style:var(--ELLIS-subheadings-font-style)] whitespace-nowrap">
                    {item.label}
                  </span>
                  <a
                    href={`tel:${item.value}`}
                    className="font-ELLIS-subheadings text-[length:var(--ELLIS-subheadings-font-size)] font-[number:var(--ELLIS-subheadings-font-weight)] leading-[var(--ELLIS-subheadings-line-height)] tracking-[var(--ELLIS-subheadings-letter-spacing)] text-[#fff7f099] [font-style:var(--ELLIS-subheadings-font-style)] whitespace-nowrap transition-colors hover:text-ellis-pure-white"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        <NavigationBarSection />
      </div>
      <HeroIntroductionSection />
      <div id="about"><AboutSection /></div>
      <div id="family-law"><FamilyLawSection /></div>
      <div id="estate-planning"><AccoladeSection /></div>
      <div id="testimonials"><TestimonialsSection /></div>
      <div id="footer"><FooterSection /></div>
    </main>
  );
};
