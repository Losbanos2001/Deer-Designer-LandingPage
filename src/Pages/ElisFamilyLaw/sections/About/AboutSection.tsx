"use client";

import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

const benefits = [
  "Stay up to date on changes in North Carolina law",
  "Get specialist legal insights to your most pressing family law questions",
  "Access exclusive guides and resources you won't find anywhere else",
];

const fields = [
  { type: "text", placeholder: "Enter your Name", autoComplete: "name" },
  { type: "email", placeholder: "Enter your Email", autoComplete: "email" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export const AboutSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#FFF7F0] px-6 py-[90px] sm:px-10 lg:px-[100px]">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ margin: "-100px" }}
        className="mx-auto flex w-full max-w-[1240px] flex-col justify-between gap-10 lg:flex-row lg:items-end lg:gap-16"
      >
        {/* LEFT CONTENT */}
        <motion.header
          variants={fadeUp}
          className="flex w-full max-w-[572.62px] flex-col items-start gap-6"
        >
          <div className="flex w-full flex-col items-start gap-1">
            <p className="font-ELLIS-label text-[length:var(--ELLIS-label-font-size)] font-[number:var(--ELLIS-label-font-weight)] leading-[var(--ELLIS-label-line-height)] tracking-[var(--ELLIS-label-letter-spacing)] text-ellis-cocoa-ash [font-style:var(--ELLIS-label-font-style)]">
              NEWSLETTER SIGNUP
            </p>

            <h2 className="font-ELLIS-h2 text-[36px] leading-[44px] tracking-[0] text-ellis-charcoal-black sm:text-[45.1px] sm:leading-[56.3px]">
              <span className="italic text-[#16191f]">
                Ex Files featuring{" "}
              </span>
              <span className="text-[#a88665]">Pour</span>
              <span className="text-[#a88665]"> Decisions</span>
            </h2>
          </div>

          <div className="flex w-full flex-col items-start gap-4">
            <motion.ul
              variants={container}
              className="font-ELLIS-body-regular list-disc space-y-0 pl-5 text-[length:var(--ELLIS-body-regular-font-size)] font-[number:var(--ELLIS-body-regular-font-weight)] leading-[var(--ELLIS-body-regular-line-height)] tracking-[var(--ELLIS-body-regular-letter-spacing)] text-ellis-charcoal-black [font-style:var(--ELLIS-body-regular-font-style)]"
            >
              {benefits.map((benefit) => (
                <motion.li key={benefit} variants={fadeUp}>
                  {benefit}
                </motion.li>
              ))}
            </motion.ul>

            <motion.p
              variants={fadeUp}
              className="font-ELLIS-body-italic text-[length:var(--ELLIS-body-italic-font-size)] font-[number:var(--ELLIS-body-italic-font-weight)] leading-[var(--ELLIS-body-italic-line-height)] tracking-[var(--ELLIS-body-italic-letter-spacing)] text-ellis-charcoal-black [font-style:var(--ELLIS-body-italic-font-style)]"
            >
              <span>
                And for a fun twist: don&apos;t miss our &quot;Pour
                Decisions&quot; section, featuring wine tips from our
                lawyer-wine specialist{" "}
              </span>
              <span className="text-[#16191f]">Deer Designer</span>
              <span>!</span>
            </motion.p>
          </div>
        </motion.header>

        {/* FORM */}
        <motion.form
          variants={fadeUp}
          className="flex w-full max-w-[475px] flex-col items-stretch justify-center gap-8"
        >
          <div className="flex w-full flex-col items-start gap-8">
            {fields.map((field) => (
              <motion.div
                key={field.placeholder}
                variants={fadeUp}
                className="w-full"
              >
                <Input
                  type={field.type}
                  autoComplete={field.autoComplete}
                  placeholder={field.placeholder}
                  className="h-[52px] rounded border-2 border-[#2b2b2b33] bg-option-1lfv-pure-white px-4 py-3 font-ELLIS-body-regular text-[length:var(--ELLIS-body-regular-font-size)] font-[number:var(--ELLIS-body-regular-font-weight)] leading-[var(--ELLIS-body-regular-line-height)] tracking-[var(--ELLIS-body-regular-letter-spacing)] text-ellis-charcoal-black placeholder:text-[#0a0a0a80] [font-style:var(--ELLIS-body-regular-font-style)] focus:scale-[1.02] focus:border-[#a88665] transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              type="submit"
              className="h-auto w-full rounded-none bg-ellis-camel-leather px-[27px] py-[17px] font-ELLIS-button text-[length:var(--ELLIS-button-font-size)] font-[number:var(--ELLIS-button-font-weight)] leading-[var(--ELLIS-button-line-height)] tracking-[var(--ELLIS-button-letter-spacing)] text-[#16181f] hover:bg-ellis-camel-leather/90 [font-style:var(--ELLIS-button-font-style)]"
            >
              SUBSCRIBE NOW
            </Button>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
};
