"use client";

import { motion, easeOut } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "../../../../components/ui/card";
import Image1 from "../../../../assets/1.png";
import Image2 from "../../../../assets/2.png";
import Image3 from "../../../../assets/3.png";
import Image4 from "../../../../assets/4.png";
import Image5 from "../../../../assets/5.png";
import Image6 from "../../../../assets/6.png";
import Image7 from "../../../../assets/7.png";
import Image8 from "../../../../assets/8.png";
import Image9 from "../../../../assets/9.png";
import { GoArrowRight } from "react-icons/go";

const serviceRows = [
  [
    {
      title: "Divorce & Separation",
      description:
        "Steady, strategic guidance through divorce, with a focus on protecting your future at every stage.",
      iconSrc: Image1,
      iconAlt: "Group",
      iconClassName: "w-[57.92px] h-[42px] -ml-px -mt-px",
    },
    {
      title: "High-Asset Divorce",
      description:
        "Sophisticated representation for divorces involving substantial assets, complex finances, and long-term financial interests.",
      iconSrc: Image2,
      iconAlt: "Group",
      iconClassName: "w-[46.5px] h-[42px] -ml-px -mt-px",
    },
    {
      title: "Child Custody",
      description:
        "Thoughtful advocacy for parenting arrangements that protect your children and preserve what matters most.",
      iconSrc: Image3,
      iconAlt: "Group",
      iconClassName: "w-[37.5px] h-[42px] -ml-px -mt-px",
    },
  ],
  [
    {
      title: "Child Support",
      description:
        "Clear, informed guidance on establishing, modifying, and enforcing child support with care and precision.",
      iconSrc: Image4,
      iconAlt: "Group",
      iconClassName: "w-[37.77px] h-[42px] -ml-px -mt-px",
    },
    {
      title: "Property Division",
      description:
        "Strategic counsel for dividing assets and debts in a way that safeguards your financial future.",
      iconSrc: Image5,
      iconAlt: "Group",
      iconClassName: "w-[41.87px] h-[42px] -ml-px -mt-px",
    },
    {
      title: "Spousal Support",
      description:
        "Experienced representation in alimony matters involving lifestyle, earning capacity, and long-term stability.",
      iconSrc: Image6,
      iconAlt: "Outline status heart",
      iconClassName: "w-10 h-10",
    },
  ],
  [
    {
      title: "Prenuptial Agreements",
      description:
        "Carefully crafted agreements designed to protect assets, set clear expectations, and support peace of mind.",
      iconSrc: Image7,
      iconAlt: "Group",
      iconClassName: "w-[33.63px] h-[42px] -ml-px -mt-px",
    },
    {
      title: "Estate Planning",
      description:
        "Personalized estate planning services to help you protect your wishes, your assets, and the people you love.",
      iconSrc: Image8,
      iconAlt: "Group",
      iconClassName: "w-[34.84px] h-[42px] -ml-px -mt-px",
    },
    {
      title: "Domestic Violence",
      description:
        "Compassionate, decisive legal support when your safety, stability, and next steps cannot wait.",
      iconSrc: Image9,
      iconAlt: "Group",
      iconClassName: "w-[52.36px] h-[42px] -ml-px -mt-px",
    },
  ],
];

// animations
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const FamilyLawSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#16181f] px-4 py-[90px] sm:px-6 lg:px-[100px] lg:pb-[100px]">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ margin: "-100px" }}
        className="mx-auto flex w-full max-w-[1240px] flex-col items-start gap-16"
      >
        <motion.header
          variants={fadeUp}
          className="flex w-full flex-col items-center gap-0.5 text-center"
        >
          <p className="font-['Aboreto',serif] text-[15.02px] font-normal text-[#c49e78] leading-[1.78]">
            DEER DESIGNER FAMILY PRACTICE AREAS
          </p>
          <h2 className="font-['Cormorant_Garamond',serif] italic text-[56.32px] leading-[1.15] text-[#fff7f0]">
            Legal Guidance For Every Step Forward
          </h2>
        </motion.header>

        <div className="flex w-full flex-col gap-10">
          {serviceRows.map((row, rowIndex) => (
            <motion.div
              key={`service-row-${rowIndex}`}
              variants={container}
              className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-[48px]"
            >
              {row.map((service) => (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <Card className="h-full min-h-[293px] rounded-[13.14px] border-[0.94px] border-solid border-[#c49e781a] bg-[#fff7f00d] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2px)_brightness(110%)]">
                    <CardContent className="flex h-full min-h-[293px] flex-col px-[31px] py-[22px]">
                      <div className="flex h-full flex-col justify-between">
                        <div className="flex flex-col gap-4">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 2 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Image
                              className={service.iconClassName}
                              alt={service.iconAlt}
                              src={service.iconSrc}
                              loading="lazy"
                            />
                          </motion.div>

                          <h3 className="font-['Aboreto',serif] text-[18.77px] leading-[1.67] text-[#fff7f0]">
                            {service.title}
                          </h3>

                          <p className="max-w-[287.25px] font-['Cormorant_Garamond',serif] italic text-[18.77px] leading-[1.7] text-[#fff7f0b2]">
                            {service.description}
                          </p>
                        </div>

                        <motion.button
                          type="button"
                          className="mt-8 inline-flex w-fit items-center justify-center gap-3 text-left"
                          whileHover="hover"
                          initial="rest"
                          animate="rest"
                        >
                          <span className="font-['Aboreto',serif] text-[16px] leading-[1.67] text-[#c49e78]">
                            LEARN MORE
                          </span>

                          <motion.span
                            variants={{
                              rest: { x: 0 },
                              hover: { x: 6 },
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <GoArrowRight size={24} color="#c49e78" />
                          </motion.span>
                        </motion.button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};