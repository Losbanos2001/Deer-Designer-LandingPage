"use client";

import { motion, easeOut } from "framer-motion";
import Image from "next/image";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import FamilyLawImage from "../../../../assets/Family-Law.png";
import { GoArrowRight } from "react-icons/go";
import VectorLeft from "../../../../assets/Vector-Left.png";
import VectorRight from "../../../../assets/Vector-Right.png";
import mobileImage from "../../../../assets/family-pic.jpg";

const heroActions = [
  {
    label: "CALL NOW",
    variant: "primary" as const,
    icon: <GoArrowRight size={34} />,
  },
  {
    label: "SCHEDULE A CONSULTATION",
    variant: "secondary" as const,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const HeroIntroductionSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-[#16191F]">
      <div className="relative min-h-[693px] w-full flex flex-col lg:block">

        {/* Mobile: Image as separate block */}
        <motion.div
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full h-[300px] lg:hidden"
        >
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${mobileImage.src})` }}
          />
        </motion.div>

        {/* Desktop: Background image */}
        <motion.div
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 hidden lg:block"
        >
          <div
            className="h-full w-full bg-contain bg-no-repeat bg-center lg:bg-cover"
            style={{ backgroundImage: `url(${FamilyLawImage.src})` }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,25,31,0.8)_0%,rgba(22,25,31,0.4)_50%,rgba(22,25,31,1)_100%)]" />
        </motion.div>

        {/* Desktop vector decorations */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <Image
            className="pointer-events-none absolute hidden max-w-none lg:block"
            alt="Vector"
            src={VectorLeft}
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <Image
            className="pointer-events-none absolute right-0 hidden max-w-none lg:block"
            alt="Vector"
            src={VectorRight}
            loading="lazy"
          />
        </motion.div>

        {/* Mobile: Card as separate block */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] items-center justify-center px-4 py-16 sm:px-6 lg:px-8 lg:min-h-[693px] lg:absolute lg:inset-0">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-100px" }}
            className="w-full flex justify-center"
          >
            <motion.div
              variants={fadeUp}
              initial={{ scale: 0.96, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Card className="w-full max-w-[870px] overflow-hidden rounded-2xl border border-solid border-[#ffffff1a] bg-[#ffffff12] shadow-[0px_25px_50px_-12px_#00000040]">
                <CardContent className="flex flex-col items-center px-6 py-10 sm:px-10 sm:py-12 lg:px-[47px] lg:py-[49px]">
                  <motion.div
                    variants={container}
                    className="flex w-full max-w-[776px] flex-col items-center gap-[27px] text-center"
                  >

                    <motion.header
                      variants={fadeUp}
                      className="flex w-full flex-col items-center gap-2.5"
                    >
                      <div className="flex w-full max-w-[630px] flex-col items-center">
                        <h1 className="[font-family:'Cormorant_Garamond',Helvetica] text-center text-[42px] font-normal leading-[1.1] text-transparent sm:text-[56px] sm:leading-[72px]">
                          <span className="italic text-[#fff7f0]">
                            Your Future{" "}
                          </span>
                          <span className="text-[#c49e78]">Starts Here</span>
                        </h1>
                      </div>
                    </motion.header>

                    <motion.p
                      variants={fadeUp}
                      className="w-full max-w-[630px] font-ELLIS-body-large text-[length:var(--ELLIS-body-large-font-size)] font-[number:var(--ELLIS-body-large-font-weight)] leading-[var(--ELLIS-body-large-line-height)] tracking-[var(--ELLIS-body-large-letter-spacing)] text-[#fff7f0cc] [font-style:var(--ELLIS-body-large-font-style)]"
                    >
                      Divorce &amp; Family Law Attorneys Serving Durham, Raleigh,
                      Cary, the Triangle, and Throughout North Carolina.
                    </motion.p>

                    <motion.p
                      variants={fadeUp}
                      className="font-ELLIS-label text-[length:var(--ELLIS-label-font-size)] font-[number:var(--ELLIS-label-font-weight)] leading-[var(--ELLIS-label-line-height)] tracking-[var(--ELLIS-label-letter-spacing)] text-[#c49e78] [font-style:var(--ELLIS-label-font-style)] sm:whitespace-nowrap"
                    >
                      ★&nbsp;&nbsp;LED BY BOARD CERTIFIED SPECIALISTS IN FAMILY LAW&nbsp;&nbsp;★
                    </motion.p>

                    <motion.nav
                      variants={fadeUp}
                      aria-label="Hero actions"
                      className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
                    >
                      {heroActions.map((action) => (
                        <motion.div
                          key={action.label}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full"
                        >
                          <Button
                            type="button"
                            variant="ghost"
                            className={
                              action.variant === "primary"
                                ? "h-auto w-full sm:w-auto rounded-none bg-ellis-camel-leather px-[27px] py-[17px] text-[#16181f] hover:bg-ellis-camel-leather/90"
                                : "h-auto w-full sm:w-auto rounded-none border border-solid border-[#fffefc] bg-transparent px-[27px] py-[17px] text-[#fffefc] hover:bg-white/5"
                            }
                          >
                            <span className="flex items-center justify-center gap-2">
                              <span className="[font-family:'Aboreto',Helvetica] text-center text-base font-normal leading-5 tracking-[1.40px] whitespace-nowrap">
                                {action.label}
                              </span>

                              {action.icon && (
                                <motion.span
                                  initial={{ x: 0 }}
                                  whileHover={{ x: 6 }}
                                  transition={{ duration: 0.3 }}
                                  className="flex items-center justify-center"
                                >
                                  {action.icon}
                                </motion.span>
                              )}
                            </span>
                          </Button>
                        </motion.div>
                      ))}
                    </motion.nav>

                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};