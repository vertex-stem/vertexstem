import type { Metadata } from "next";
import { ReactNode } from "react";
import { Badge } from "@/components/Badge";
import { FaqItem } from "@/components/FaqItem";
import { CTABand } from "@/components/CTABand";
import { DotCluster } from "@/components/Accents";
import { pageMetadata } from "@/lib/seo";
import { CampExplorer } from "./CampExplorer";

export const metadata: Metadata = pageMetadata({
  title: "Summer Camp",
  description:
    "Build, code, design, and imagine all summer. Explore Vertex STEM's robotics, coding, AI, and 3D printing camps for students of all ages.",
  path: "/camp",
});

const IMAGES = {
  hero: "/images/camp/hero.webp",
};

const scheduleIconPaths: Record<string, ReactNode> = {
  sun: (
    <>
      <circle cx="12" cy="12" r="5" />
      <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </>
  ),
  meal: (
    <>
      <path d="M6 3v6a2 2 0 004 0V3" />
      <path d="M8 11v10" />
      <path d="M16 3c-1.2 1.5-1.2 6.5 0 8s1.2 6.5 0 8" />
    </>
  ),
  flag: (
    <>
      <path d="M6 21V4" />
      <path d="M6 4h11l-2.5 3.5L17 11H6" />
    </>
  ),
  heart: (
    <path d="M12 20s-6.5-4.1-9-8.4C1.3 8.1 3 4.5 6.4 4.5c2 0 3.3 1.1 4 2.3.7-1.2 2-2.3 4-2.3C17.8 4.5 19.5 8.1 17.8 11.6 15.3 15.9 12 20 12 20z" />
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2.5" />
      <path d="M8 3v4M16 3v4M3 10h18" />
      <path d="M8.5 15h.01M12 15h.01M15.5 15h.01M8.5 18h.01M12 18h.01" strokeWidth="2.4" />
    </>
  ),
  pizza: (
    <>
      <path d="M4 20L12 4l8 16H4z" />
      <path d="M4 20a8 8 0 0116 0" />
      <path
        d="M10 14h.01M14 16h.01M12 11h.01"
        strokeWidth="2.6"
      />
    </>
  ),
};

function ScheduleIcon({
  type,
  size = 20,
}: {
  type: keyof typeof scheduleIconPaths;
  size?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
    >
      {scheduleIconPaths[type]}
    </svg>
  );
}

function ScheduleCard({
  label,
  value,
  color,
  tint,
  icon,
}: {
  label: string;
  value: string;
  color: string;
  tint: string;
  icon: keyof typeof scheduleIconPaths;
}) {
  return (
    <div className="relative pt-7">
      <div
        className="absolute left-1/2 top-7 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-sm border border-slate-200 z-[1]"
        style={{ color }}
      >
        <ScheduleIcon type={icon} size={24} />
      </div>
      <div
        className="relative overflow-hidden bg-white rounded-[16px] pt-9 pb-6 px-4 shadow-sm border border-slate-200 text-center"
        style={{ borderTop: `4px solid ${color}` }}
      >
        <div
          className="absolute -bottom-6 -left-4 w-20 h-20 rounded-full opacity-70"
          style={{ background: tint }}
        />
        <div
          className="absolute -bottom-8 -right-6 w-16 h-16 rounded-full opacity-50"
          style={{ background: tint }}
        />
        <div className="relative font-bold text-xl mb-2 font-display text-text-heading">
          {value}
        </div>
        <div
          className="relative mx-auto mb-2 h-1 w-6 rounded-full"
          style={{ background: color }}
        />
        <div className="relative text-sm text-text-muted">
          {label}
        </div>
      </div>
    </div>
  );
}

function ScheduleConnector() {
  return (
    <div className="flex-shrink-0 w-8 hidden md:flex flex-col items-center" style={{ paddingTop: 100 }}>
      <div className="relative w-full border-t-2 border-dashed border-slate-300">
        <div className="absolute left-1/2 -top-[4px] -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-400" />
      </div>
    </div>
  );
}

const FAQS = [
  {
    id: "camp-age-groups",
    question: "What age groups does summer camp serve?",
    answer:
      "Our summer camp programs welcome students from Senior Kindergarten through Grade 11, with sessions grouped by grade so activities and projects match each camper's skill level.",
  },
  {
    id: "camp-daily-schedule",
    question: "What does a typical camp day look like?",
    answer:
      "Camp runs from 9:30 AM to 3:30 PM, with lunch from 12 to 1 PM. Optional aftercare is available from 3:30 to 5:00 PM for an extra fee for families who need extended coverage.",
  },
  {
    id: "camp-lunch",
    question: "What if my child doesn't bring lunch?",
    answer:
      "Lunch can be provided for $10 per day if your child doesn't bring one. Vertex STEM Education also hosts a pizza lunch party every Friday.",
  },
  {
    id: "camp-week-selection",
    question: "Can I sign up for individual weeks instead of the full summer?",
    answer:
      "Yes! Camp runs from June 15th to September 4th, and most programs are offered in two-week blocks (with some one-week options), so you can pick the weeks that work best for your family. Note that the weeks of June 29–July 3 and August 4–7 run on a four-day schedule.",
  },
];

const diagonalLinesBg = {
  backgroundImage:
    "repeating-linear-gradient(45deg, rgba(255,255,255,0.14) 0px, rgba(255,255,255,0.14) 1.5px, transparent 1.5px, transparent 16px)",
};

export default function CampPage() {
  return (
    <div className="font-body">
      {/* Hero */}
      <section
        className="bg-blue-500 text-white py-12 md:py-[72px] px-5 md:px-10 grid gap-8 md:gap-10 items-center grid-cols-1 md:grid-cols-[1.1fr_1fr]"
        style={diagonalLinesBg}
      >
        <div>
          <Badge color="sunny">Summer Camp</Badge>
          <h1 className="text-2xl md:text-3xl my-4 leading-tight text-white">
            Build, Code, Design, and Imagine all summer
          </h1>
          <p className="text-lg opacity-[0.92] max-w-[520px] m-0">
            Vertex STEM Education is a STEM learning centre focused on STEM.
            Programs include Python, Java, and C++ coding, 3D printing, calculus and physics,
            engineering design, game development, and robotics — using hands-on
            materials like LEGO robotics and SPIKE kits, Arduino, 3D printers,
            robotic components, and Raspberry Pi.
          </p>
        </div>
        <div className="relative">
          <div
            className="h-[220px] md:h-[300px] bg-center bg-cover bg-no-repeat rounded-[20px]"
            style={{ backgroundImage: `url(${IMAGES.hero})` }}
          />
          <div className="absolute bottom-[-22px] left-[-22px] w-[54px] h-[54px] rounded-full opacity-90 bg-skyblue-500" />
          <div className="absolute top-[-16px] right-6">
            <DotCluster color="var(--color-coral-500)" />
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-10 md:py-14 px-5 md:px-10 max-w-[1200px] mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center flex-shrink-0 text-yellow-500">
            <ScheduleIcon type="calendar" size={28} />
          </div>
          <div>
            <h2 className="text-2xl m-0 leading-none">When</h2>
            <div className="w-10 h-1 rounded-full mt-2.5 bg-yellow-500" />
          </div>
        </div>
        <p className="text-base leading-relaxed max-w-[820px] mb-9 text-text-body">
          From <strong className="text-text-heading">June 15th to September 4th</strong>, a{" "}
          <strong className="text-text-heading">12-week period</strong>, Vertex STEM
          Education will be hosting summer camp programs for students across
          various age groups. Each program is typically two weeks long, although
          some programs run for only one week. During the weeks of{" "}
          <strong className="text-text-heading">June 29 to July 3</strong> and{" "}
          <strong className="text-text-heading">August 4 to August 7</strong>, Vertex STEM
          Education operates on a{" "}
          <strong className="text-text-heading">four-day schedule</strong> instead of the
          usual five full days.
        </p>
        <div className="flex flex-col md:flex-row items-stretch md:items-start gap-6 md:gap-0">
          <div className="flex-1 min-w-0">
            <ScheduleCard
              label="Camp day begins"
              value="9:30 AM"
              color="var(--color-yellow-500)"
              tint="var(--color-yellow-100)"
              icon="sun"
            />
          </div>
          <ScheduleConnector />
          <div className="flex-1 min-w-0">
            <ScheduleCard
              label="Lunch"
              value="12 – 1 PM"
              color="var(--color-coral-500)"
              tint="var(--color-coral-100)"
              icon="meal"
            />
          </div>
          <ScheduleConnector />
          <div className="flex-1 min-w-0">
            <ScheduleCard
              label="Classes end"
              value="3:30 PM"
              color="var(--color-blue-500)"
              tint="var(--color-blue-100)"
              icon="flag"
            />
          </div>
          <ScheduleConnector />
          <div className="flex-1 min-w-0">
            <ScheduleCard
              label="Aftercare (extra fee)"
              value="3:30 – 5:00 PM"
              color="var(--color-mint-500)"
              tint="var(--color-mint-100)"
              icon="heart"
            />
          </div>
        </div>
        <div className="relative overflow-hidden mt-8 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-yellow-50 border border-yellow-200">
          <div className="relative z-[1] w-11 h-11 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-yellow-600">
            <ScheduleIcon type="pizza" size={20} />
          </div>
          <p className="relative z-[1] m-0 text-sm leading-relaxed text-text-body">
            If a child does not bring lunch, one can be provided for{" "}
            <strong className="text-text-heading">$10 per day</strong>. Vertex STEM
            Education also hosts a{" "}
            <strong className="text-text-heading">pizza lunch party every Friday.</strong>
          </p>
          <div className="hidden sm:block absolute -right-4 -bottom-6 opacity-[0.12] pointer-events-none text-yellow-600">
            <ScheduleIcon type="pizza" size={120} />
          </div>
        </div>
      </section>

      <CampExplorer />

      {/* FAQs */}
      <section className="bg-slate-50 py-10 md:py-14 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-xl md:text-2xl mb-6">FAQs</h2>
          <div className="mt-6 flex flex-col gap-3">
            {FAQS.map((f) => (
              <FaqItem key={f.id} question={f.question} answer={f.answer} />
            ))}
          </div>
        </div>
      </section>

      <CTABand
        bg="coral"
        eyebrow="Ready to Join?"
        heading="Spaces fill up fast! Secure your child's spot for a week of robots, rockets, and code."
        quickForm
        map
      />
    </div>
  );
}
