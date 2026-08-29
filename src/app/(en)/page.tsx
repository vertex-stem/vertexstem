import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { FeatureGraphic, FeatureIconBadge } from "@/components/FeatureGraphic";
import { BrickStack } from "@/components/BrickStack";
import { HeroMedia } from "@/components/HeroMedia";
import { CTABand } from "@/components/CTABand";
import { GrowthPathGraphic } from "@/components/GrowthPathGraphic";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Empower Future Innovators",
  description:
    "Discover innovative STEM programs designed to inspire curiosity and enhance learning for students in robotics, coding, and engineering.",
  path: "/",
});

const features = [
  {
    title: "Qualified Instructors",
    description:
      "We ensure all of our instructors are qualified in their respective fields.",
    color: "var(--color-blue-500)" as const,
    icon: "instructors" as const,
    image: "/images/home/qualified-instructors.webp",
  },
  {
    title: "Small Class Sizes",
    description:
      "We keep class sizes small so every student gets the attention they need to excel.",
    color: "var(--color-coral-500)" as const,
    icon: "class-size" as const,
    image: "/images/home/small-class-sizes.webp",
  },
  {
    title: "Wide-Ranging Programs",
    description:
      "From Physical Electronics & Design to Programming & Robotics — something for every student.",
    color: "var(--color-mint-500)" as const,
    icon: "programs" as const,
    image: "/images/home/wide-ranging-programs.webp",
  },
];

const programs = [
  {
    title: "STEM & Coding",
    description:
      "Hands-on robotics, coding, and engineering built around real projects.",
    link: "/programs",
    color: "var(--color-blue-500)" as const,
    badge: "Ages 5 - 17",
    photo: "/images/programs/coding.webp",
    highlights: [
      "LEGO SPIKE & VEX robotics",
      "Python, Java & Scratch coding",
      "Engineering design & 3D printing",
    ],
  },
  {
    title: "Competition",
    description:
      "Compete in FLL Challenge & Explore, applying skills in real robotics contests.",
    link: "/competition",
    color: "var(--color-coral-500)" as const,
    badge: "Ages 6+",
    photo: "/images/competition/challenge-main.webp",
    highlights: [
      "FLL Challenge & Explore",
      "VEX IQ Robotics",
      "ACSL competitive programming",
    ],
  },
  {
    title: "Summer Camp",
    description:
      "Full-day and half-day sessions of STEM play and building for every age group.",
    link: "/camp",
    color: "var(--color-mint-500)" as const,
    badge: "SK - Gr 11",
    photo: "/images/camp/vex-camp.jpeg",
    highlights: [
      "LEGO Robotics",
      "Coding & AI",
      "3D Making & design",
    ],
  },
];

const partners = [
  {
    title: "North York Baseball",
    description:
      "Proud sponsor of young athletes who advanced to the Ontario Baseball Association finals.",
    color: "var(--color-skyblue-500)" as const,
    photo: "/images/partnerships/baseball.webp",
    logo: undefined as string | undefined,
    link: "/partnerships#north-york-baseball",
  },
  {
    title: "Autism Ontario",
    description:
      "Specialized STEM workshops built to be accessible, inclusive, and inspiring for every child.",
    color: "var(--color-mint-500)" as const,
    photo: "/images/home/autism-ontario.webp",
    logo: "/images/partnerships/autism-logo.webp",
    link: "/partnerships#autism-ontario",
  },
  {
    title: "Lancebotics",
    description:
      "Mentoring and equipping a local high school VEX Robotics team for competitive success.",
    color: "var(--color-coral-500)" as const,
    photo: "/images/partnerships/lancebotics.webp",
    logo: undefined as string | undefined,
    link: "/partnerships#lancebotics",
  },
];

// Temporarily hidden — News / Updates / Announcements section (see below).
// const blogPosts = [
//   {
//     date: "Dec 17, 2025",
//     title: "FLL2025: Taking home the Robot Design Award!",
//     color: "var(--color-yellow-500)",
//   },
//   {
//     date: "Oct 23, 2025",
//     title: "Introduction to Application Design",
//     color: "var(--color-skyblue-500)",
//   },
//   {
//     date: "Aug 5, 2025",
//     title: "FLL 2025 Season has begun!",
//     color: "var(--color-coral-500)",
//   },
// ];

const dotBg = {
  backgroundImage:
    "radial-gradient(rgba(255,255,255,0.18) 2px, transparent 2px)",
  backgroundSize: "22px 22px",
};

export default function HomePage() {
  return (
    <div className="overflow-hidden font-body">
      {/* Hero */}
      <section
        className="bg-blue-500 text-white py-12 md:py-20 px-5 md:px-10 grid gap-8 md:gap-10 items-center relative grid-cols-1 md:grid-cols-[1.1fr_1fr]"
        style={dotBg}
      >
        <div className="relative z-[1]">
          <h1 className="text-2xl md:text-4xl my-[18px] leading-tight tracking-tight text-white">
            Empower Future Innovators
          </h1>
          <p className="text-lg opacity-[0.92] max-w-[480px] mb-[26px]">
            Discover innovative STEM programs designed to inspire curiosity and
            enhance learning for students.
          </p>
          <div className="flex gap-3.5">
            <Button variant="secondary" href="/contact">
              Sign Up
            </Button>
            <Button variant="outline" inverse href="/programs">
              See Programs
            </Button>
          </div>
        </div>
        <div className="relative">
          <HeroMedia
            videoSrc="/intro.mp4"
            imageSrc="/images/home/hero.webp"
            imageAlt="Students building robots at Vertex STEM Education"
          />
          <div className="absolute bottom-[-24px] left-[-24px]">
            <BrickStack size={46} />
          </div>
          <div className="absolute top-[-20px] right-5 w-[60px] h-[60px] rounded-full opacity-90 bg-coral-500" />
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-10 md:py-16 px-5 md:px-0 max-w-[1200px] mx-auto grid gap-6 md:gap-7 items-start grid-cols-1 md:grid-cols-[auto_1fr_auto]">
        <div className="order-first w-16 h-1.5 md:w-1.5 md:h-[118px] rounded-full bg-brand-secondary" />
        <div>
          <p className="text-lg font-medium max-w-[800px] mb-3.5 leading-relaxed font-display text-text-heading">
            Choosing Vertex STEM Edu means choosing more than just STEM classes
            — it’s choosing a pathway for your child to grow as an
            innovator, problem-solver, and leader.
          </p>
          <p className="text-base leading-relaxed max-w-[760px] m-0 text-text-body">
            Our programs combine hands-on robotics, coding, and engineering with
            opportunities to compete, create, and collaborate. Students
            don’t just learn theories — they apply them in real
            projects, competitions, and community initiatives. With a focus on
            inclusion, mentorship, and future readiness, we empower every
            student to build confidence, resilience, and skills that last a
            lifetime.
          </p>
        </div>
        <GrowthPathGraphic />
      </section>

      {/* Why Vertex */}
      <section
        className="bg-slate-900 py-12 md:py-16 px-5 md:px-10 relative"
        style={dotBg}
      >
        <div className="max-w-[1200px] mx-auto relative">
          <h2 className="text-xl md:text-2xl text-center mb-8 md:mb-10 tracking-tight text-white">
            Why Vertex?
          </h2>
          <div className="mb-10 md:mb-14 max-w-[960px] mx-auto text-center relative">
            <span
              aria-hidden
              className="block text-4xl md:text-5xl leading-none select-none text-yellow-500 font-display"
            >
              &#8220;
            </span>
            <p className="text-base md:text-lg leading-relaxed -mt-2 md:-mt-3 text-white font-display font-medium">
              We see every student as an individual, not just a class roster
              entry. That’s why we take the time to understand where each
              child is starting from and grow with them one step at a
              time — celebrating small wins along the way to bigger
              breakthroughs. Your child’s success is our success, and we’re
              invested for the long run.
            </p>
            <div className="mt-4 mx-auto w-10 h-[3px] rounded-full bg-yellow-500" />
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {features.map((f) => (
              <Card
                key={f.title}
                title={
                  <>
                    <FeatureGraphic
                      type={f.icon}
                      color={f.color}
                      image={f.image}
                    />
                    <div className="flex items-center gap-2.5">
                      <FeatureIconBadge type={f.icon} color={f.color} />
                      {f.title}
                    </div>
                  </>
                }
              >
                {f.description}
              </Card>
            ))}
          </div>
          <div className="mt-8 md:mt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <span className="text-base font-semibold text-white font-display">
              Ready to sign up?
            </span>
            <div className="flex gap-3 flex-wrap justify-center">
              <Button variant="secondary" href="/programs">
                Explore Our Programs
              </Button>
              <Button variant="outline" inverse href="/contact">
                Have Questions?
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-10 md:py-16 px-5 md:px-0 max-w-[1200px] mx-auto">
        <h2 className="text-xl md:text-2xl mb-1.5">Programs</h2>
        <p className="text-base mb-6 max-w-[640px] text-text-muted">
          Explore Vertex STEM Education’s programs in robotics, coding, and
          engineering designed for student growth.
        </p>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {programs.map((p) => (
            <Card
              key={p.title}
              media={
                <div className="relative w-full aspect-[16/10]">
                  <Image src={p.photo} alt="" fill className="object-cover" />
                </div>
              }
              title={
                <div className="flex items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ background: p.color }}
                    />
                    {p.title}
                  </div>
                  <Badge
                    color={
                      p.color === "var(--color-blue-500)"
                        ? "blue"
                        : p.color === "var(--color-coral-500)"
                        ? "coral"
                        : "mint"
                    }
                  >
                    {p.badge}
                  </Badge>
                </div>
              }
              footer={
                <Button size="sm" variant="outline" href={p.link}>
                  Learn more
                </Button>
              }
            >
              <p className="m-0">{p.description}</p>
              <ul className="mt-3 pt-3 flex flex-col gap-1.5 list-none p-0 border-t border-border-subtle">
                {p.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="font-bold shrink-0" style={{ color: p.color }}>
                      &#10004;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section
        className="bg-mint-900 py-10 md:py-16 px-5 md:px-10 relative"
        style={dotBg}
      >
        <div
          className="absolute top-0 right-0 w-[220px] h-[220px] rounded-full"
          style={{
            background: "rgba(255,255,255,0.08)",
            transform: "translate(30%, -40%)",
          }}
        />
        <div className="max-w-[1200px] mx-auto relative">
          <div className="grid gap-6 items-center grid-cols-1 md:grid-cols-[1fr_auto] mb-8 md:mb-10">
            <div>
              <h2 className="text-xl md:text-2xl mb-2 text-white">
                Partners
              </h2>
              <p className="text-base m-0 max-w-[640px] opacity-90 text-white">
                It takes a community to empower the next generation of innovators
                — we build strong partnerships to create meaningful
                opportunities for students.
              </p>
            </div>
            <div className="flex gap-2.5 flex-wrap">
              <Badge color="blue">Existing Partners</Badge>
              <Badge color="coral">Partnership Marketing</Badge>
            </div>
          </div>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {partners.map((p) => (
              <Card
                key={p.title}
                media={
                  <div className="relative w-full aspect-[16/10]">
                    <Image src={p.photo} alt="" fill className="object-cover" />
                    {p.logo && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative h-16 w-[210px] bg-white/95 rounded-lg shadow-md">
                          <Image
                            src={p.logo}
                            alt={p.title}
                            fill
                            sizes="210px"
                            className="object-contain p-2.5"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                }
                title={
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ background: p.color }}
                    />
                    {p.title}
                  </div>
                }
                footer={
                  <Button size="sm" variant="outline" href={p.link}>
                    Learn more
                  </Button>
                }
              >
                {p.description}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog — News, Updates, Announcements: temporarily hidden, may bring back later.
      <section className="py-10 md:py-16 px-5 md:px-0 max-w-[1200px] mx-auto">
        <h2 className="text-xl md:text-2xl mb-1.5">News, Updates, Announcements!</h2>
        <p className="text-sm mb-6 text-text-muted">
          Blog — Vertex STEM Edu
        </p>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {blogPosts.map((b) => (
            <Card
              key={b.title}
              footer={
                <span className="font-semibold text-sm text-text-link">
                  Read more →
                </span>
              }
            >
              <div
                className="w-2.5 h-2.5 rounded-full mb-2.5"
                style={{ background: b.color }}
              />
              <div className="text-xs mb-1.5 font-mono text-text-muted">
                {b.date}
              </div>
              <div className="font-semibold font-display">
                {b.title}
              </div>
            </Card>
          ))}
        </div>
      </section>
      */}

      <CTABand map quickForm />
    </div>
  );
}
