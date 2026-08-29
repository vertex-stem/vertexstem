import type { Metadata } from "next";
import Image from "next/image";
import { CTABand } from "@/components/CTABand";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Competitions",
  description:
    "Compete in FIRST LEGO League, VEX Robotics, and ACSL with Vertex STEM Education's competitive robotics and programming teams.",
  path: "/competition",
});

const IMAGES = {
  hero: "/images/competition/hero.webp",
  exploreLogo: "/images/competition/explore-logo.webp",
  exploreGirl: "/images/competition/explore-girl.webp",
  challengeLogo: "/images/competition/challenge-logo.webp",
  challengeMain: "/images/competition/challenge-main.webp",
  challengePresent: "/images/competition/challenge-present.webp",
  gallery1: "/images/competition/gallery1.webp",
  gallery2: "/images/competition/gallery2.webp",
  gallery3: "/images/competition/gallery3.webp",
  gallery4: "/images/competition/gallery4.webp",
  vexLogo: "/images/competition/vex-logo.webp",
  vexMain: "/images/competition/vex-main.webp",
  vexAlt: "/images/competition/vex-alt.webp",
  acslLogo: "/images/competition/acsl-logo.webp",
  acslMain: "/images/competition/acsl-main.webp",
  acslCert: "/images/competition/acsl-cert.webp",
};

interface Topic {
  title: string;
  description: string;
}

interface Section {
  id: string;
  eyebrow: string;
  title: string;
  navLabel: string;
  logo: string;
  photo: string;
  accent: string;
  lead: string;
  body: string;
  topics: Topic[];
  checks?: Topic[];
}

const SECTIONS: Section[] = [
  {
    id: "explore",
    eyebrow: "FIRST Lego League",
    title: "Explore",
    navLabel: "FIRST Lego League Explore",
    logo: IMAGES.exploreLogo,
    photo: IMAGES.exploreGirl,
    accent: "var(--color-mint-500)",
    lead:
      "FIRST LEGO League Explore is a hands-on STEM program designed for young children, typically ages 6–10. It introduces them to science, technology, engineering, and math through fun, guided projects using LEGO Education sets.",
    body:
      "Each season, teams explore a real-world theme — like space, nature, or transportation. They build a model with LEGO bricks and simple moving parts to showcase their ideas and create a Show Me poster to share what they've learned. Along the way, kids develop important skills like teamwork, problem-solving, and creativity, all in a low-pressure, playful environment that builds a strong foundation for future learning in robotics and engineering.",
    topics: [
      {
        title: "Creative Building & Design Thinking",
        description:
          "Kids bring their ideas to life using LEGO Spike Essential. Learn how simple machines, sensors, and motors work together. Explore the engineering design process: imagine, build, test, and improve while having fun.",
      },
      {
        title: "Early Coding & Logical Thinking",
        description:
          "Begin learning the foundations of coding using LEGO's drag-and-drop programming blocks. Discover real-world science and technology themes through hands-on play. Gain confidence understanding how robots follow instructions and sensors detect change.",
      },
      {
        title: "Teamwork & Collaboration",
        description:
          "Work together as part of a small, supportive team to share ideas and solve challenges. Learn how to listen, cooperate, and contribute to group goals. Students proudly share their ideas and models with coaches, parents, and judges.",
      },
    ],
  },
  {
    id: "challenge",
    eyebrow: "FIRST Lego League",
    title: "Challenge",
    navLabel: "FIRST Lego League Challenge",
    logo: IMAGES.challengeLogo,
    photo: IMAGES.challengeMain,
    accent: "var(--color-coral-500)",
    lead:
      "FIRST LEGO League (FLL) Challenge is a robotics contest where student teams build and program LEGO robots to complete themed tasks. They use block coding or Python to solve problems and work together.",
    body:
      "Besides robots, teams research a real-world issue related to the theme and present a creative solution to judges. This mix of building, coding, and presenting helps students learn STEM skills, teamwork, and communication in a fun and competitive setting.",
    topics: [
      {
        title: "Creative Problem Solving",
        description:
          "Children develop innovative solutions to themed real-world challenges. Encourages independent thinking, creative brainstorming, and practical invention. Builds resilience and adaptability through hands-on trial and error.",
      },
      {
        title: "Teamwork & Communication",
        description:
          "Practice collaboration through assigned roles (builder, coder, researcher, presenter). Learn how to share ideas respectfully, solve conflicts, and work towards a common goal. Improve public speaking and presentation skills through the Innovation Project showcase.",
      },
      {
        title: "Competition Readiness & Growth Mindset",
        description:
          "Experience the full cycle of the FIRST LEGO League Challenge — from brainstorming to competition day. Learn the value of gracious professionalism, perseverance, and teamwork under pressure. Celebrate progress, not just results!",
      },
    ],
  },
  {
    id: "vex",
    eyebrow: "VEX IQ",
    title: "Robotics Competition",
    navLabel: "VEX IQ Robotics Competition",
    logo: IMAGES.vexLogo,
    photo: IMAGES.vexMain,
    accent: "var(--color-skyblue-500)",
    lead:
      "VEX Robotics Competition (VRC) is a global robotics program for middle and high school students. Teams design, build, and program advanced robots to compete in exciting, real-world engineering challenges.",
    body:
      "Through competition, students develop problem-solving, leadership, and technical skills preparing them for future careers in STEM and beyond. At Vertex STEM Edu, we take students of all ages and train them to think like real engineers — equipping them with the design, programming, and teamwork skills needed to excel both in competition and in life.",
    topics: [],
  },
  {
    id: "acsl",
    eyebrow: "Competitive Programming",
    title: "ACSL",
    navLabel: "ACSL",
    logo: IMAGES.acslLogo,
    photo: IMAGES.acslMain,
    accent: "var(--color-blue-500)",
    lead:
      "The American Computer Science League (ACSL) is an international competition that gives students the chance to explore real computer science concepts beyond the classroom.",
    body:
      "Through hands-on lessons and friendly contests, students learn about topics like algorithms, logic, and programming while developing problem-solving and critical-thinking skills that will last throughout their education. Our ACSL program guides students step by step — helping them prepare for each contest with fun challenges, teamwork, and personalized support. It's a great way for young coders to build confidence, stand out in future academic pursuits, and discover how creative and rewarding computer science can be.",
    topics: [],
    checks: [
      {
        title: "Programming & Algorithm Design",
        description:
          "Build a strong foundation in coding using languages like Python or Java while learning how to design efficient algorithms to solve real-world problems.",
      },
      {
        title: "Logic, Boolean Algebra & Number Systems",
        description:
          "Explore how computers think by mastering logical reasoning, truth tables, binary, hexadecimal, and other data representation systems.",
      },
      {
        title: "Functions, Recursion & Data Structures",
        description:
          "Learn to break complex tasks into smaller pieces, use functions effectively, and understand essential structures like arrays, stacks, and trees.",
      },
      {
        title: "Problem-Solving & Competition Skills",
        description:
          "Prepare for ACSL contests with guided practice, mock challenges, and time-based problem-solving to boost accuracy and confidence.",
      },
      {
        title: "Critical Thinking & Creativity",
        description:
          "Strengthen abstract reasoning, creative problem-solving, and computational thinking — skills that go far beyond coding.",
      },
    ],
  },
];

const awards = [
  { year: "2019", title: "FLL Challenge All Star Award", color: "var(--color-yellow-500)" },
  { year: "2021", title: "FLL Challenge Champions Award — 1st place", color: "var(--color-skyblue-500)" },
  { year: "2025", title: "FLL Explore Rising All Star Award", color: "var(--color-mint-500)" },
];

const galleryImages = [
  IMAGES.challengePresent,
  IMAGES.gallery1,
  IMAGES.gallery2,
  IMAGES.gallery3,
  IMAGES.gallery4,
  IMAGES.vexAlt,
];

function SectionBand({ s, index }: { s: Section; index: number }) {
  const flip = index % 2 === 1;

  const media = (
    <div
      key="media"
      className={`relative min-h-[300px] md:min-h-[460px] bg-center bg-cover bg-no-repeat md:row-start-1 ${flip ? "md:col-start-2" : "md:col-start-1"}`}
      style={{
        backgroundImage: `url(${s.photo})`,
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 h-2" style={{ background: s.accent }} />
    </div>
  );

  const content = (
    <div
      key="content"
      className={`py-10 px-5 md:py-16 md:px-14 flex flex-col gap-4 justify-center md:row-start-1 ${flip ? "md:col-start-1" : "md:col-start-2"} ${index % 2 === 1 ? "bg-slate-50" : "bg-white"}`}
    >
      <div className="relative h-[52px] w-[160px] self-start mb-1">
        <Image
          src={s.logo}
          alt={s.title}
          fill
          sizes="160px"
          className="object-contain object-left"
        />
      </div>
      <div
        className="text-xs uppercase tracking-wider font-mono"
        style={{ color: s.accent }}
      >
        {s.eyebrow}
      </div>
      <h2 className="text-2xl m-0">{s.title}</h2>
      <p className="m-0 text-lg leading-relaxed font-medium text-text-heading">
        {s.lead}
      </p>
      <p className="m-0 text-base leading-relaxed text-text-body">
        {s.body}
      </p>

      {s.topics.length > 0 && (
        <div className="mt-3 flex flex-col gap-[18px]">
          <div className="font-bold text-base font-display text-text-heading">
            Topics & Content
          </div>
          {s.topics.map((t, i) => (
            <div
              key={t.title}
              className="grid gap-3.5 items-start"
              style={{ gridTemplateColumns: "40px 1fr" }}
            >
              <div
                className="w-[34px] h-[34px] rounded-full text-white flex items-center justify-center font-bold text-sm font-display"
                style={{ background: s.accent }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <div className="font-semibold text-base mb-1 font-display">
                  {t.title}
                </div>
                <div className="text-sm leading-relaxed text-text-body">
                  {t.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {s.checks && (
        <div className="mt-3 flex flex-col gap-3.5">
          <div className="font-bold text-base font-display text-text-heading">
            Topics & Content
          </div>
          {s.checks.map((c) => (
            <div
              key={c.title}
              className="grid gap-3 items-start"
              style={{ gridTemplateColumns: "24px 1fr" }}
            >
              <div
                className="font-bold text-md leading-[1.3]"
                style={{ color: s.accent }}
              >
                &#10004;
              </div>
              <div>
                <span className="font-semibold font-display">
                  {c.title} —{" "}
                </span>
                <span className="text-sm leading-relaxed text-text-body">
                  {c.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <section id={s.id} className="grid grid-cols-1 md:grid-cols-2">
      {flip ? [content, media] : [media, content]}
    </section>
  );
}

export default function CompetitionPage() {
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
            Competition Teams
          </div>
          <h1 className="text-2xl md:text-4xl m-0 mb-4 leading-[1.05] text-white">
            Compete. Build. Present.
          </h1>
          <p className="text-lg opacity-[0.92] m-0 max-w-[620px]">
            Explore STEM competitions and programs designed to develop skills in
            robotics, coding, and problem-solving for students of all ages at
            Vertex STEM Education.
          </p>
        </div>
      </section>

      {/* Sub-nav */}
      <nav className="flex gap-2 px-5 md:px-14 bg-blue-900 flex-wrap">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="no-underline font-semibold text-sm py-3 px-3 md:py-4 md:px-[18px] hover:no-underline font-display"
            style={{
              color: "rgba(255,255,255,0.85)",
              borderBottom: `3px solid ${s.accent}`,
            }}
          >
            {s.navLabel}
          </a>
        ))}
      </nav>

      {/* Section Bands */}
      <div className="flex flex-col gap-16">
        {SECTIONS.map((s, i) => (
          <SectionBand key={s.id} s={s} index={i} />
        ))}
      </div>

      {/* Gallery */}
      <section className="grid mt-16 grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
        {galleryImages.map((src, i) => (
          <div
            key={i}
            className="h-[180px] bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </section>

      {/* Awards Timeline */}
      <section className="py-10 md:py-16 px-5 md:px-14 bg-slate-50 mt-16">
        <h2 className="text-xl md:text-2xl mb-9">Award History</h2>
        <div className="relative grid gap-8 grid-cols-1 sm:grid-cols-3">
          <div className="hidden sm:block absolute top-[13px] left-[8%] right-[8%] h-[3px] bg-border-default" />
          {awards.map((a) => (
            <div
              key={a.year}
              className="relative flex flex-col items-center text-center gap-2.5"
            >
              <div
                className="w-7 h-7 rounded-full relative z-[1] border-4 border-slate-50"
                style={{ background: a.color }}
              />
              <div className="text-sm font-mono text-text-muted">
                {a.year}
              </div>
              <div className="font-semibold text-md max-w-[260px] font-display">
                {a.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABand
        bg="coral"
        eyebrow="Let's get in touch."
        heading="Contact us about specific programs, any questions you might have, or to discuss other ways we can empower the future!"
        quickForm
        map
      />
    </div>
  );
}
