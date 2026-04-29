import Image from "next/image";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import FooterImage from "../../../../assets/Footer.png";
import locImage from "../../../../assets/lock.png";
import NoImage from "../../../../assets/no-image.png";

const officeLocations = [
  {
    title: "Durham Office",
    icon: locImage,
    image: NoImage,
    addressLines: ["3511 Shannon Road Suite 150", "Durham, NC, 27707"],
  },
  {
    title: "Cary Office",
    icon: locImage,
    image: NoImage,
    addressLines: ["201 Shannon Oaks Circle Suite 100", "Cary, NC, 27511"],
  },
  {
    title: "Wake Forest Office",
    icon: locImage,
    image: NoImage,
    addressLines: [
      "1740 Heritage Center Drive Suite 202 Wake Forest, NC, 27587",
    ],
  },
  {
    title: "Pittsboro Office",
    icon: locImage,
    image: NoImage,
    addressLines: ["27 Hillsboro Street Pittsboro,", "NC, 27312"],
  },
];

const footerLinkGroups = [
  {
    heading: "QUICK LINKS",
    links: [
      "About Us",
      "Blog",
      "testimonials",
      "resources",
      "contact",
      "Schedule a consultation",
    ],
  },
  {
    heading: "FAMILY LAW",
    links: [
      "divorce",
      "high-asset divorce",
      "child custody",
      "child support",
      "property division",
      "spousal support",
      "Prenuptial Agreements",
      "DOMESTIC VIOLENCE",
    ],
  },
  {
    heading: "ESTATE PLANNING",
    links: ["WILL AND TRUST", "POWER OF ATTORNEY"],
  },
];

const legalLinks = ["Privacy Policy", "disclaimer"];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-[#16181f] text-[#fffefc]">
      <section className="w-full border-t border-[#c49e7833] px-4 py-[60px] sm:px-8 lg:px-[100px]">
        <div className="mx-auto grid max-w-[1242px] grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-[27px]">
          {officeLocations.map((office, index) => (
            <div key={office.title} className="flex items-stretch gap-[27px]">
              <Card className="w-full border-0 bg-transparent p-0 shadow-none">
                <CardContent className="flex h-full flex-col items-center gap-[11px] p-0">
                  <div className="flex w-full flex-col items-center gap-5">
                    <Image
                      className="h-[51.5px] w-[51.5px]"
                      alt={office.title}
                      src={office.icon}
                      loading="lazy"
                    />
                    <div className="flex w-full flex-col items-center gap-1 text-center">
                      <h3 className="w-full [font-family:'Aboreto',Helvetica] text-2xl font-normal leading-[26.3px] tracking-[0] text-[#fffefc]">
                        {office.title}
                      </h3>
                      <address className="w-full not-italic font-ELLIS-body-regular text-[length:var(--ELLIS-body-regular-font-size)] font-[number:var(--ELLIS-body-regular-font-weight)] leading-[var(--ELLIS-body-regular-line-height)] tracking-[var(--ELLIS-body-regular-letter-spacing)] text-[#fffefc] [font-style:var(--ELLIS-body-regular-font-style)]">
                        {office.addressLines.map((line) => (
                          <div key={line}>{line}</div>
                        ))}
                      </address>
                    </div>
                  </div>
                  <Image
                    className="h-[150px] w-full object-cover"
                    alt={`${office.title} location`}
                    src={office.image}
                    loading="lazy"
                  />
                </CardContent>
              </Card>
              {index < officeLocations.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="hidden h-[317px] w-px shrink-0 bg-[#fff7f01a] xl:block"
                />
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="w-full border-t border-[#c49e7833] px-4 pb-[50px] pt-[65px] sm:px-8 lg:px-[100px]">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-[65px]">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <div className="shrink-0">
              <Image
                className="w-[191.28px] max-w-full"
                alt="Frame"
                src={FooterImage}
                loading="lazy"
              />
            </div>
            <nav
              aria-label="Footer navigation"
              className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-20"
            >
              {footerLinkGroups.map((group) => (
                <div
                  key={group.heading}
                  className="flex w-full max-w-[203px] flex-col items-start gap-6"
                >
                  <h4 className="w-full font-ELLIS-subheadings text-[length:var(--ELLIS-subheadings-font-size)] font-[number:var(--ELLIS-subheadings-font-weight)] leading-[var(--ELLIS-subheadings-line-height)] tracking-[var(--ELLIS-subheadings-letter-spacing)] text-[#c49e78] [font-style:var(--ELLIS-subheadings-font-style)]">
                    {group.heading}
                  </h4>
                  <ul className="flex w-full flex-col items-start gap-2">
                    {group.links.map((link) => (
                      <li key={link} className="w-full">
                        <button
                          type="button"
                          className="h-auto p-0 text-left [font-family:'Aboreto',Helvetica] text-sm font-normal leading-5 tracking-[0] text-[#fff7f099] transition-colors hover:text-[#fff7f0] focus:outline-none"
                        >
                          {link}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
          <div className="flex w-full flex-col items-center justify-center border-t border-[#fff7f01a] px-0 py-4">
            <div className="flex w-full flex-col items-center justify-between gap-6 xl:flex-row xl:items-center">
              <div className="flex flex-wrap items-center justify-center gap-8 xl:justify-start">
                {legalLinks.map((link) => (
                  <button
                    key={link}
                    type="button"
                    className="h-auto whitespace-nowrap p-0 [font-family:'Aboreto',Helvetica] text-sm font-normal leading-5 tracking-[0] text-[#fff7f099] transition-colors hover:text-[#fff7f0] focus:outline-none"
                  >
                    {link}
                  </button>
                ))}
              </div>
              <div className="flex w-full max-w-[723px] flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
                <p className="whitespace-nowrap [font-family:'Aboreto',Helvetica] text-sm font-normal leading-5 tracking-[0] text-[#fff7f099]">
                  © Deer Designer Family Law, P.L.L.C.
                </p>
                <p className="whitespace-nowrap [font-family:'Aboreto',Helvetica] text-sm font-normal leading-5 tracking-[0] text-[#fff7f099]">
                  Designed by Second Click Media
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
