import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Highlight } from "@/components/Highlight";
import { BrickStack } from "@/components/BrickStack";
import { CountUpStat } from "@/components/CountUpStat";
import { CTABand } from "@/components/CTABand";
import { ValueCard, ValueIconType } from "@/components/ValueCard";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Learn about Vertex STEM Education's mission to empower young innovators through hands-on robotics, coding, and engineering programs built on community and mentorship.",
  path: "/about",
});

const values: {
  title: string;
  description: string;
  color: string;
  icon: ValueIconType;
}[] = [
  {
    title: "Hands-On Learning",
    description:
      "Students learn by building - real robots, real code, real projects - not just theory.",
    color: "var(--color-blue-500)",
    icon: "hands-on",
  },
  {
    title: "Mentorship & Community",
    description:
      "Every student is guided by qualified instructors who invest in their growth, in class and beyond.",
    color: "var(--color-coral-500)",
    icon: "mentorship",
  },
  {
    title: "Inclusion for Every Learner",
    description:
      "Programs are designed to be accessible and welcoming, so every child can find their place in STEM.",
    color: "var(--color-mint-500)",
    icon: "inclusion",
  },
  {
    title: "Future-Ready Skills",
    description:
      "We build the confidence, resilience, and problem-solving skills that last a lifetime.",
    color: "var(--color-yellow-500)",
    icon: "future-ready",
  },
];

const approachSteps = [
  {
    title: "Explore",
    description:
      "Students discover robotics, coding, and engineering through playful, low pressure introductions to core concepts.",
    color: "var(--color-skyblue-500)",
  },
  {
    title: "Build & Create",
    description:
      "Hands-on projects turn ideas into working robots, programs, and prototypes with mentorship every step of the way.",
    color: "var(--color-coral-500)",
  },
  {
    title: "Compete & Showcase",
    description:
      "Students apply what they've built in competitions like FLL Challenge and Explore, celebrating progress as much as results.",
    color: "var(--color-mint-500)",
  },
];

const stats = [
  {
    value: "~10",
    label: "Years",
    description: "Empowering young innovators through hands on STEM.",
    color: "var(--color-yellow-500)",
  },
  {
    value: "100+",
    label: "Students Taught",
    description: "Across robotics, coding, and engineering programs.",
    color: "var(--color-mint-500)",
  },
  {
    value: "7",
    label: "Competitions",
    description: "Competitive programs our students have represented us in.",
    color: "var(--color-coral-500)",
  },
  {
    value: "4:1",
    label: "Student : Teacher",
    description: "Small classes mean every student gets real attention.",
    color: "var(--color-skyblue-500)",
  },
];

const serviceDetails = [
  {
    title: "Who We Teach",
    value: "Youth Learners",
    description:
      "Programs built for young people, from first time beginners to advanced competitors.",
    color: "var(--color-blue-500)",
  },
  {
    title: "Class Size",
    value: "2 : 1",
    description:
      "Two students per instructor, on average so every student gets hands on guidance.",
    color: "var(--color-coral-500)",
  },
  {
    title: "Format",
    value: "Year-Round",
    description:
      "After-school programs, school-break camps, and competitive teams.",
    color: "var(--color-mint-500)",
  },
  {
    title: "Where",
    value: "East York, Toronto",
    description: "One dedicated studio serving families across the GTA.",
    color: "var(--color-yellow-500)",
  },
];

const dotBg = {
  backgroundImage:
    "radial-gradient(rgba(255,255,255,0.18) 2px, transparent 2px)",
  backgroundSize: "22px 22px",
};

const heroDotBg = {
  backgroundImage:
    "radial-gradient(rgba(46,49,146,0.06) 1.5px, transparent 1.5px)",
  backgroundSize: "26px 26px",
};

export default function AboutPage() {
  return (
    <div className="font-body">
      <div className="max-w-[1200px] mx-auto py-10 md:py-14 px-5 md:px-10" style={heroDotBg}>
        <div className="grid gap-6 md:gap-10 items-start mb-4 md:mb-6 grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <h1 className="text-[2rem] md:text-3xl m-0">About Us</h1>
              <Image
                src="/images/vertex-stem-logo.png"
                alt="Vertex STEM Education"
                width={1650}
                height={700}
                className="h-9 md:h-12 w-auto shrink-0"
              />
            </div>
            <p className="text-lg leading-relaxed font-medium m-0 font-display text-text-heading">
              Vertex STEM Edu is a Canadian education organization dedicated to
              empowering youth through <Highlight color="var(--color-coral-200)">robotics</Highlight>,{" "}
              <Highlight color="var(--color-mint-200)">coding</Highlight>, innovative projects, and
              competitions.
            </p>
            <p className="text-base leading-relaxed m-0 text-text-body">
              Founded with the belief that every child has the potential to
              become a{" "}
              <Highlight color="var(--color-yellow-300)">
                creator, problem-solver, and leader
              </Highlight>
              , we combine world class STEM education with real opportunities
              to apply knowledge from the classroom to competition arenas and
              science fairs.
            </p>
            <div className="flex gap-3.5 mt-1">
              <Button variant="secondary" href="/programs">
                See Programs
              </Button>
              <Button variant="outline" href="/camp">
                See Camps
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              <div className="col-span-2 relative h-[220px] md:h-[280px] rounded-[20px] overflow-hidden border-[3px] shadow-sm border-blue-500">
                <Image
                  src="/images/about/hero-award-photo.webp"
                  alt="An instructor and student holding first-place award certificates"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="relative h-[140px] md:h-[180px] rounded-[20px] overflow-hidden border-[3px] shadow-sm border-coral-500">
                <Image
                  src="/images/about/hero-electronics.webp"
                  alt="A student building an electronics circuit with a mentor"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[140px] md:h-[180px] rounded-[20px] overflow-hidden border-[3px] shadow-sm border-mint-500">
                <Image
                  src="/images/about/hero-robotics-build.webp"
                  alt="Two students assembling a robotics build together"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="hidden sm:block absolute -bottom-5 -left-5 z-[1]">
              <BrickStack size={40} />
            </div>
            <div className="absolute -top-4 -right-4 w-11 h-11 md:w-14 md:h-14 rounded-full opacity-90 z-[1] bg-yellow-500" />
          </div>
        </div>
      </div>

      <section
        className="bg-blue-900 py-10 md:py-14 px-5 md:px-10 relative"
        style={dotBg}
      >
        <div className="max-w-[1200px] mx-auto relative grid gap-8 grid-cols-2 md:grid-cols-4 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <CountUpStat
                value={s.value}
                className="text-2xl md:text-[2.75rem] font-bold mb-1 leading-none font-display text-white"
              />
              <div
                className="text-xs font-semibold uppercase tracking-wider mb-2 font-mono"
                style={{ color: s.color }}
              >
                {s.label}
              </div>
              <p className="text-sm opacity-80 m-0 text-white">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto py-10 md:py-14 px-5 md:px-10">
        <h2 className="text-xl md:text-2xl mb-2">Our Mission & Values</h2>
        <p className="text-base mb-6 max-w-[640px] text-text-muted">
          Everything we build for students is guided by the same set of
          principles.
        </p>
        <div className="grid gap-5 mb-10 md:mb-14 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {values.map((v) => (
            <ValueCard
              key={v.title}
              icon={v.icon}
              title={v.title}
              description={v.description}
              color={v.color}
            />
          ))}
        </div>
      </div>

      <section
        className="bg-slate-900 py-12 md:py-16 px-5 md:px-10 relative"
        style={dotBg}
      >
        <div className="max-w-[1200px] mx-auto relative">
          <h2 className="text-xl md:text-2xl text-center mb-10 md:mb-8 tracking-tight text-white">
            Our Approach
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            {approachSteps.map((s, i) => (
              <div
                key={s.title}
                className="relative rounded-[20px] p-6 border"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.12)",
                }}
              >
                <div
                  className="text-xs font-semibold tracking-wider mb-3 uppercase font-mono"
                  style={{ color: s.color }}
                >
                  Step {i + 1}
                </div>
                <h3 className="text-lg font-semibold mb-3 font-display text-white">
                  {s.title}
                </h3>
                <p className="text-sm opacity-85 m-0 text-white">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto py-10 md:py-14 px-5 md:px-10">
        <h2 className="text-xl md:text-2xl mb-2">Who We Serve</h2>
        <p className="text-base mb-6 max-w-[640px] text-text-muted">
          A snapshot of how our programs are built and run.
        </p>
        <div className="grid gap-5 mb-10 md:mb-14 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {serviceDetails.map((d) => (
            <div
              key={d.title}
              className="bg-white rounded-[20px] p-6 shadow-sm border border-slate-200"
              style={{ borderTop: `4px solid ${d.color}` }}
            >
              <div className="text-xs font-semibold uppercase tracking-wider mb-2 font-mono text-text-muted">
                {d.title}
              </div>
              <div className="font-semibold text-lg mb-2 font-display text-text-heading">
                {d.value}
              </div>
              <p className="text-sm leading-relaxed m-0 text-text-body">
                {d.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <CTABand
        heading="Want to learn more about us?"
        subtext="Reach out with questions about our programs, our team, or how we support students year-round."
        quickForm
        map
      />
    </div>
  );
}
