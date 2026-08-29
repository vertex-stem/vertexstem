"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/Badge";
import {
  CategoryTabs,
  accentColorVar,
  accentTintVar,
  categoryTabId,
  categoryPanelId,
} from "@/components/CategoryTabs";

const IMAGES = {
  legoLogo: "/images/programs/lego-logo.webp",
  robotics: "/images/programs/general.webp",
  apPrep: "/images/programs/ap-prep.webp",
  apCalculus: "/images/programs/ap-calculus.webp",
  apPhysics: "/images/programs/ap-physics.webp",
  spikeEssential: "/images/programs/spike-prime.webp",
  spikePrime: "/images/programs/spike-essential.webp",
  vexLogo: "/images/programs/vex-logo.webp",
  vex: "/images/programs/vex.webp",
  coding: "/images/programs/coding.webp",
  scratch: "/images/programs/scratch.webp",
  scratchLogo: "/images/programs/scratch-logo.webp",
  pythonLogo: "/images/programs/python-logo.webp",
  algorithms: "/images/programs/algorithms.webp",
  javaLogo: "/images/programs/java-logo.webp",
  java: "/images/programs/java.webp",
  engineering: "/images/programs/engineering.webp",
  design3d: "/images/programs/design3d.webp",
  printer: "/images/programs/printer.webp",
  python: "/images/programs/python.webp",
};

interface Program {
  name: string;
  learn?: string[];
  grades: string;
  photo: string;
  logo?: string;
  overview: string;
}

interface Category {
  id: string;
  name: string;
  accent: string;
  photo: string;
  intro: string;
  programs: Program[];
}

const PROGRAM_CATEGORIES: Category[] = [
  {
    id: "robotics",
    name: "Robotics",
    accent: "blue",
    photo: IMAGES.robotics,
    intro:
      "LEGO SPIKE sets combine the creativity of LEGO building with hands-on learning in robotics and coding. Children assemble motorized models and learn basic engineering, mechanics, and programming concepts in an engaging, screen-free way that builds problem-solving skills and confidence. VEX IQ Robotics lets kids explore engineering and robotics through hands-on building and programming — using modular, snap-together parts, children design and build robots that move and perform tasks.",
    programs: [
      {
        name: "LEGO Robotics Explorer",
        learn: [
          "Engineering & mechanics basics",
          "Programming logic fundamentals",
          "Hands-on building confidence",
        ],
        grades: "The Perfect STEM Introduction for Young Learners",
        photo: IMAGES.spikeEssential,
        logo: IMAGES.legoLogo,
        overview:
          "Our introductory robotics course is designed for your youngest explorers! Kids will discover the basics of engineering and mechanics while getting their first taste of programming logic in a fun, hands-on way.",
      },
      {
        name: "LEGO Robotics Challenger",
        learn: [
          "Gear ratios & torque",
          "Robot navigation & control systems",
          "Modular programming",
        ],
        grades: "Builds on foundational skills",
        photo: IMAGES.spikePrime,
        logo: IMAGES.legoLogo,
        overview:
          "This course builds on foundational skills, introducing gear ratios, torque, robot navigation, control systems, and modular programming. Kids strengthen their logic, problem-solving, and creativity while designing and programming more complex robots.",
      },
      {
        name: "VEX IQ Robotics",
        learn: [
          "Modular robot construction",
          "Task-based programming",
          "Critical thinking & problem-solving",
        ],
        grades: "Hands-on building & programming",
        photo: IMAGES.vex,
        logo: IMAGES.vexLogo,
        overview:
          "VEX IQ Robotics lets kids explore engineering and robotics through hands-on building and programming. Using modular, snap-together parts, children design and build robots that move and perform tasks, developing problem-solving skills, critical thinking, and a strong foundation in STEM.",
      },
    ],
  },
  {
    id: "coding",
    name: "Coding",
    accent: "coral",
    photo: IMAGES.coding,
    intro:
      "Our coding programs progress from visual, block-based projects through to text-based languages and algorithmic thinking, so students can start at any level and keep building.",
    programs: [
      {
        name: "Scratch",
        learn: [
          "Visual block-based coding",
          "Creative project design",
          "Problem-solving fundamentals",
        ],
        grades: "Recommended ages: 5+",
        photo: IMAGES.scratch,
        logo: IMAGES.scratchLogo,
        overview:
          "Our Scratch program introduces young learners to coding through fun, interactive projects. Using a simple, visual interface, students learn the fundamentals of programming while building creativity, problem-solving skills, and confidence.",
      },
      {
        name: "Python",
        learn: ["Logic & automation", "Data handling", "Real-world project building"],
        grades: "Recommended ages: 9+",
        photo: IMAGES.python,
        logo: IMAGES.pythonLogo,
        overview:
          "Python is one of the most versatile and beginner-friendly programming languages. Through hands-on projects, students develop skills in logic, automation, and data handling—preparing them for advanced coding and real-world applications.",
      },
      {
        name: "Java",
        learn: [
          "Text-based coding",
          "Object-oriented design",
          "Core programming concepts",
        ],
        grades: "Recommended ages: 12+",
        photo: IMAGES.java,
        logo: IMAGES.javaLogo,
        overview:
          "In our Java program, students take their first steps into text-based coding. They'll explore core programming concepts and object-oriented design while creating real projects, building a strong foundation for future learning in computer science.",
      },
      {
        name: "Algorithms",
        learn: [
          "Breaking down complex problems",
          "Designing efficient solutions",
          "Competitive programming prep",
        ],
        grades: "Recommended ages: 12+",
        photo: IMAGES.algorithms,
        logo: IMAGES.pythonLogo,
        overview:
          "Our Algorithms program teaches students how to think like computer scientists. They'll learn to break down complex problems, design efficient solutions, and build a strong foundation for competitive programming and advanced computer science studies.",
      },
    ],
  },
  {
    id: "engineering-design-3d-printing",
    name: "Engineering Design & 3D Printing",
    accent: "mint",
    photo: IMAGES.printer,
    intro:
      "Students explore the entire design process, from brainstorming to creating functional prototypes, combining electronics, engineering, and 3D printing.",
    programs: [
      {
        name: "Design & 3D Printing",
        learn: [
          "Sketching & planning ideas",
          "Iterative design thinking",
          "Functional prototyping",
        ],
        grades: "Design thinking & prototyping",
        photo: IMAGES.design3d,
        overview:
          "Design thinking helps students bring their ideas to life. Through creative challenges, they learn to sketch, plan, and iterate—developing problem-solving skills and an eye for detail. Students explore the entire process, from brainstorming to creating functional prototypes, fostering innovation and confidence.",
      },
      {
        name: "Engineering Design & Projects",
        learn: [
          "Building simple circuits",
          "Digital-to-physical 3D printing",
          "Hands-on experimentation",
        ],
        grades: "Electronics & 3D printing",
        photo: IMAGES.printer,
        overview:
          "Students dive into the world of electronics by building simple circuits and exploring how electricity powers our everyday devices. With 3D printing, they turn digital designs into real objects, learning how engineering and technology intersect. These hands-on experiences build technical skills and inspire students to create, experiment, and invent.",
      },
    ],
  },
  {
    id: "ap-prep",
    name: "AP Prep",
    accent: "blue",
    photo: IMAGES.apPrep,
    intro:
      "Our AP Prep courses help students master college-level material and build exam confidence. Each course follows the full College Board curriculum with targeted practice, past exam questions, and problem-solving strategies.",
    programs: [
      {
        name: "AP Calculus AB",
        learn: [
          "Limits, derivatives & integrals",
          "Applications of the fundamental theorem",
          "Free-response exam strategies",
        ],
        grades: "College-level calculus",
        photo: IMAGES.apCalculus,
        overview:
          "AP Calculus AB covers differential and integral calculus, equivalent to a first-semester college course. Students build fluency with limits, derivatives, and integrals while practicing the multiple-choice and free-response formats of the AP exam.",
      },
      {
        name: "AP Computer Science A",
        learn: [
          "Java programming & object-oriented design",
          "Data structures & algorithms",
          "Writing and debugging exam-style code",
        ],
        grades: "College-level computer science",
        photo: IMAGES.apPrep,
        overview:
          "AP Computer Science A focuses on problem-solving and object-oriented programming in Java. Students learn to design, write, and analyze programs and data structures, preparing for the AP exam and further study in computer science.",
      },
      {
        name: "AP Physics 1",
        learn: [
          "Kinematics, forces & Newton's laws",
          "Energy, momentum & rotational motion",
          "Lab reasoning & free-response practice",
        ],
        grades: "College-level algebra-based physics",
        photo: IMAGES.apPhysics,
        overview:
          "AP Physics 1 is an algebra-based introduction to mechanics, covering motion, forces, energy, momentum, and rotational dynamics. Students develop scientific reasoning through hands-on investigations and targeted AP exam preparation.",
      },
    ],
  },
];

function ProgramCard({ name, grades, overview, accent, photo, logo, learn }: Program & { accent: string }) {
  const colorVar = accentColorVar(accent);
  const tintVar = accentTintVar(accent);

  return (
    <div className="grid rounded-[20px] shadow-md border border-slate-200 overflow-hidden bg-white grid-cols-1 md:grid-cols-[320px_1fr]">
      {photo ? (
        <div
          className="min-h-[180px] md:min-h-[220px] bg-center bg-cover bg-no-repeat border-b-4 md:border-b-0 md:border-r-4"
          style={{
            backgroundImage: `url(${photo})`,
            borderColor: colorVar,
          }}
        />
      ) : (
        <div
          className="min-h-[180px] md:min-h-[220px] flex items-center justify-center text-sm px-4 text-center border-b-4 md:border-b-0 md:border-r-4 font-mono"
          style={{
            background: tintVar,
            color: colorVar,
            borderColor: colorVar,
          }}
        >
          [ {name} photo ]
        </div>
      )}
      <div className="py-6 px-5 md:py-7 md:px-8 flex flex-col gap-3">
        {logo ? (
          <div className="relative h-[38px] w-[140px] self-start">
            <Image
              src={logo}
              alt={name}
              fill
              sizes="140px"
              className="object-contain object-left"
            />
          </div>
        ) : (
          <div
            className="w-10 h-1.5 rounded-full"
            style={{ background: colorVar }}
          />
        )}
        <h3 className="text-xl m-0 font-display">
          {name}
        </h3>
        <div>
          <Badge color={accent === "coral" ? "coral" : accent === "mint" ? "mint" : "blue"}>
            {grades}
          </Badge>
        </div>
        <p className="m-0 text-base leading-relaxed text-text-body">
          {overview}
        </p>
        {learn && (
          <div className="mt-1.5 pt-4 border-t border-border-subtle">
            <div className="font-bold text-sm mb-2.5 font-display text-text-heading">
              What students learn
            </div>
            <div className="grid gap-3 grid-cols-1 md:grid-cols-3">
              {learn.map((item) => (
                <div
                  key={item}
                  className="grid gap-2 items-start"
                  style={{ gridTemplateColumns: "20px 1fr" }}
                >
                  <span
                    className="font-bold text-sm leading-[1.5]"
                    style={{ color: colorVar }}
                  >
                    &#10004;
                  </span>
                  <span className="text-sm leading-[1.5] text-text-body">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function ProgramsExplorer() {
  const [activeId, setActiveId] = useState(PROGRAM_CATEGORIES[0].id);

  return (
    <section className="py-10 md:py-14 px-5 md:px-10 pb-10 md:pb-16 max-w-[1200px] mx-auto">
      <h2 className="text-xl md:text-2xl mb-2">Choose Your Path</h2>
      <p className="text-base mb-6 max-w-[700px] text-text-muted">
        Programs are organized into streams, each with courses ranging from
        beginner to advanced.
      </p>
      <CategoryTabs
        categories={PROGRAM_CATEGORIES}
        activeId={activeId}
        onChange={setActiveId}
        countLabel={(cfg) => `${cfg.programs.length} programs`}
        tablistLabel="Program categories"
      />
      {PROGRAM_CATEGORIES.map((cat) => (
        <div
          key={cat.id}
          role="tabpanel"
          id={categoryPanelId(cat.id)}
          aria-labelledby={categoryTabId(cat.id)}
          hidden={cat.id !== activeId}
        >
          <p className="text-base leading-relaxed my-6 max-w-[820px] text-text-body">
            {cat.intro}
          </p>
          <div className="flex flex-col gap-6">
            {cat.programs.map((p) => (
              <ProgramCard key={p.name} {...p} accent={cat.accent} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
