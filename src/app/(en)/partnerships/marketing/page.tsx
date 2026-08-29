import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { CTABand } from "@/components/CTABand";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Partner With Us",
  description:
    "Explore the benefits of partnering with Vertex STEM Education and discover marketing and collaboration opportunities.",
  path: "/partnerships/marketing",
});

const IMAGES = {
  hero: "/images/partnerships-marketing/hero.webp",
  community: "/images/community-connection.svg",
  education: "/images/impactful-education.svg",
  values: "/images/shared-values.svg",
  visibility: "/images/positive-visibility.svg",
};

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

const BENEFITS: Benefit[] = [
  {
    title: "Community Connection",
    icon: IMAGES.community,
    description:
      "Strengthen your organization's presence in the community by aligning with a trusted youth-focused education partner.",
  },
  {
    title: "Impactful Education",
    icon: IMAGES.education,
    description:
      "Support workshops, competitions, and innovation projects that spark curiosity and creativity.",
  },
  {
    title: "Shared Values",
    icon: IMAGES.values,
    description:
      "Inspire teamwork, resilience, and leadership—skills that benefit children in STEM, sports, and life.",
  },
  {
    title: "Positive Visibility",
    icon: IMAGES.visibility,
    description:
      "Gain recognition across our events, social media, and program materials as a committed supporter of youth development.",
  },
];

interface Opportunity {
  title: string;
  description: string;
}

const OPPORTUNITIES: Opportunity[] = [
  {
    title: "Event & Competition Sponsorships",
    description:
      "Support youth robotics and coding competitions (VEX, FLL, CWSF, CCC) and gain visibility as an advocate for innovation.",
  },
  {
    title: "Inclusion Initiatives",
    description:
      "Partner on specialized programs for underrepresented groups in STEM, such as girls in STEM or autistic youth, ensuring every child has a chance to shine.",
  },
  {
    title: "Community Workshops",
    description:
      "Co-sponsor or host accessible STEM workshops with us—for schools, libraries, or community centers—expanding reach to more families.",
  },
  {
    title: "Corporate Social Responsibility (CSR) Programs",
    description:
      "Align your brand with education, innovation, and community development. From funding scholarships to sponsoring events, we'll co-create opportunities that match your CSR goals.",
  },
];

export default function PartnershipMarketingPage() {
  return (
    <div className="font-body">
      {/* Hero */}
      <section
        className="relative min-h-[300px] md:min-h-[460px] flex items-end text-white py-12 md:py-16 px-5 md:px-14 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(29,30,69,0.35),rgba(29,30,69,0.85)), url(${IMAGES.hero})`,
        }}
      >
        <div className="max-w-[760px]">
          <div className="text-xs uppercase tracking-wider mb-3 font-mono text-yellow-400">
            Partner With Us
          </div>
          <h1 className="text-2xl md:text-4xl m-0 mb-4 leading-[1.05] text-white">
            Partnership Marketing
          </h1>
          <p className="text-lg opacity-[0.92] m-0 max-w-[620px]">
            Partnering with Vertex STEM Edu means investing in a future where
            every child has the chance to learn, innovate, and lead.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 md:py-16 px-5 md:px-10 max-w-[900px] mx-auto text-center">
        <p className="text-lg leading-relaxed m-0 mb-4 text-text-heading">
          At Vertex STEM Edu, we believe it takes a community to empower the
          next generation of innovators. By combining hands-on STEM education
          with strong partnerships, we create meaningful opportunities for
          young people to explore robotics, coding, engineering, and creative
          problem-solving.
        </p>
        <p className="text-base leading-relaxed m-0 mb-8 text-text-body">
          We invite schools, organizations, nonprofits, and businesses to join
          us in building pathways where every child can thrive.
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <Button variant="primary" href="/contact">
            Contact Us
          </Button>
          <Button variant="outline" href="/contact">
            Request Info
          </Button>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-12 md:py-16 px-5 md:px-10 bg-slate-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-xl md:text-2xl mb-12 md:mb-20 text-center">
            Why Partner With Vertex STEM Edu?
          </h2>
          <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-[20px] p-6 shadow-sm border border-slate-200 flex flex-col gap-3"
              >
                <div className="relative w-32 h-32 md:w-50 md:h-50 mx-auto">
                  <Image
                    src={b.icon}
                    alt={b.title}
                    fill
                    sizes="128px"
                    className="object-contain rounded-full"
                  />
                </div>
                <h3 className="text-md m-0 font-display">
                  {b.title}
                </h3>
                <p className="m-0 text-sm leading-relaxed text-text-body">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-12 md:py-16 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-xl md:text-2xl mb-9 text-center">
            Partnership Opportunities
          </h2>
          <div className="mt-10 flex flex-col gap-6">
            {OPPORTUNITIES.map((o) => (
              <div
                key={o.title}
                className="grid gap-3.5 items-start"
                style={{ gridTemplateColumns: "28px 1fr" }}
              >
                <div className="font-bold text-lg leading-[1.3] text-mint-500">
                  &#10004;
                </div>
                <div>
                  <div className="font-semibold text-base mb-1 font-display">
                    {o.title}
                  </div>
                  <div className="text-sm leading-relaxed text-text-body">
                    {o.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand quickForm map />
    </div>
  );
}
