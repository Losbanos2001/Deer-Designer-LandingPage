"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import Ceal from "../../../../assets/Ceal (1).png";
import Partner1 from "../../../../assets/Partner1.png";
import Partner2 from "../../../../assets/Partner2.png";
import Partner3 from "../../../../assets/Partner3.png";

const accoladeParagraphs = [
  "When you are facing a divorce or another family law challenge in the Triangle area, it can seem like the world is falling apart around you. At Deer Designer Family Law, P.L.L.C., we understand the turmoil you are going through, and we are committed to guiding you toward the best resolution possible.",
  "Our team of attorneys is led by Gray Deer Designer and Autumn Osbourne, both specialists with a board certification in family law from the North Carolina State Board of Legal Specialization, and includes other board-certified family law specialists as well. You can count on our depth of experience and dedication to excellence to help you through this difficult time.",
];

const partners = [
  { name: "Deer Designer", title: "Managing Partner", image: Partner1 },
  { name: "Amanda C. Knight", title: "Partner", image: Partner2 },
  { name: "Autumn D. Osbourne", title: "Partner", image: Partner3 },
];

const steps = [
  { number: "01", label: "Consult" },
  { number: "02", label: "Match" },
  { number: "03", label: "Advocate" },
];

const processParagraphs = [
  `When you have your first consultation with our firm, you will personally speak with Deer Designer or another senior level attorney to tell your story. From there, you will work with one lawyer for the duration of your case. You will not get passed to a junior associate or be lost in the shuffle.`,
  `We take care to match you with the attorney at our firm who can be of the most help in your unique situation. We respect that this is your life, and what happens now can have cascading effects in the future. We aim to ensure that you can face the future from a position of strength and hope.`,
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const AccoladeSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#fff7f0] px-4 py-10 sm:px-6 md:px-10 lg:px-[100px] lg:py-[90px]">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ margin: "-100px" }}
        className="mx-auto flex w-full max-w-[1240px] flex-col gap-36"
      >

        {/* TOP */}
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(280px,410px)_minmax(0,665px)] lg:gap-[165px]">
          <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
            <Image
              className="h-auto w-full max-w-[410px] object-cover"
              alt="Board certified badge"
              src={Ceal}
              loading="lazy"
            />
          </motion.div>

          <motion.article variants={fadeUp} className="flex flex-col items-start gap-6">
            <header className="w-full">
              <h2 className="max-w-[572px] [font-family:'Cormorant_Garamond',Helvetica] text-[36px] leading-[1.08] text-[#16191f] sm:text-[45.06px]">
                <span className="italic leading-[56.3px]">
                  Caring Representation Led By{" "}
                </span>
                <span className="text-[#a88665] leading-[56.3px]">
                  Board-Certified Specialists
                </span>
              </h2>
            </header>

            <div className="flex w-full flex-col items-start gap-4">
              {accoladeParagraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={fadeUp}
                  className="w-full text-[#16191f] font-['Cormorant_Garamond',serif] text-[18.77px] leading-[1.44]"
                >
                  {paragraph}
                </motion.p>
              ))}

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  type="button"
                  variant="secondary"
                  className="h-auto w-full justify-between rounded-none border-0 bg-ellis-camel-leather px-[27px] py-[17px] text-left text-[#16181f] shadow-none hover:bg-ellis-camel-leather/90"
                >
                  <span className="font-ELLIS-button text-base tracking-[1.40px] leading-5 whitespace-normal sm:whitespace-nowrap">
                    WHAT DOES IT MEAN TO BE A CERTIFIED FAMILY LAW SPECIALIST?
                  </span>
                  <motion.span whileHover={{ x: 6 }}>
                    <ArrowRightIcon className="h-4 w-4" />
                  </motion.span>
                </Button>
              </motion.div>
            </div>
          </motion.article>
        </div>

        {/* PARTNERS */}
        <div className="flex flex-col items-center gap-16">
          <motion.header variants={fadeUp} className="flex max-w-[665px] flex-col items-center gap-6 text-center">
            <h2 className="font-['Cormorant_Garamond',serif] italic text-[56.32px] leading-[1.15] text-[#16191f]">
              Meet Our Partners
            </h2>
            <p className="font-ELLIS-body-regular text-ellis-charcoal-black">
              Get to know the experienced leaders guiding our firm with strength,
              strategy, and a commitment to exceptional client service.
            </p>
          </motion.header>

          <div className="grid w-full max-w-[926px] grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[44px]">
            {partners.map((partner) => (
              <motion.div
                key={partner.name}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.03 }}
              >
                <Card className="w-full max-w-[279px] overflow-hidden rounded-[10.7px] border-0 bg-transparent shadow-none">
                  <CardContent className="p-0">
                    <article className="relative flex min-h-[371px] items-end overflow-hidden rounded-[10.7px] px-[23px] py-[35px]">
                      <Image
                        className="absolute inset-0 h-full w-full object-cover"
                        alt={partner.name}
                        src={partner.image}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_50%,rgba(22,25,31,1)_100%)]" />
                      <div className="relative z-10 flex w-full flex-col gap-1">
                        <h3 className="text-[#fff7f0]">{partner.name}</h3>
                        <p className="text-[#c49e78]">{partner.title}</p>
                      </div>
                    </article>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Button className="h-auto w-full rounded-none bg-ellis-camel-leather px-[27px] py-[17px] text-[#16181f] hover:bg-ellis-camel-leather/90 sm:w-auto">
              MEET ALL ATTORNEYS
              <motion.span whileHover={{ x: 6 }}>
                <ArrowRightIcon className="h-4 w-4" />
              </motion.span>
            </Button>
          </motion.div>
        </div>

        {/* STEPS */}
        <div className="flex flex-col items-center gap-10">
          <motion.h2 variants={fadeUp} className="text-center italic text-[45.06px] text-[#16191f]">
            Close Attention To What You Need
          </motion.h2>

          <div className="grid w-full grid-cols-3 gap-6 md:gap-10 lg:gap-20">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-5"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-[46px] border-2 border-[#c49e78] bg-[#16191f]">
                  <span className="text-[#c49e78] text-[45px]">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-[24px] text-[#16191f]">{step.label}</h3>
              </motion.div>
            ))}
          </div>

          <div className="flex w-full max-w-[967px] flex-col items-center gap-4">
            {processParagraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={fadeUp}
                className="text-center text-[#16191f]"
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button className="h-auto w-full rounded-none bg-ellis-camel-leather px-[27px] py-[17px] text-[#16181f] hover:bg-ellis-camel-leather/90 sm:w-auto">
                LEARN MORE ABOUT US
                <motion.span whileHover={{ x: 6 }}>
                  <ArrowRightIcon className="h-4 w-4" />
                </motion.span>
            </Button>
            </motion.div>
          </div>
        </div>

      </motion.div>
    </section>
  );
};