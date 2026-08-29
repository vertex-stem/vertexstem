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
  legoBoy: "/images/camp/lego-boy.webp",
  missionArena: "/images/camp/mission-arena.webp",
  pirate: "/images/camp/pirate.webp",
  vexCamp: "/images/camp/vex-camp.jpeg",
  vexCamp2: "/images/camp/vex-camp2.webp",
  claude: "/images/camp/claude.webp",
  streamlit: "/images/camp/streamlit.webp",
  vscodePython: "/images/camp/vscode-python.webp",
  printLab: "/images/camp/print-lab.webp",
  smart3d: "/images/camp/smart3d.webp",
  bambu: "/images/camp/bambu.webp",
  javaLogo: "/images/camp/java-logo.webp",
  java: "/images/camp/java.webp",
  calcPhysics: "/images/camp/calc-physics.webp",
  legoEdu: "/images/camp/lego-edu.webp",
  vexLogo: "/images/camp/vex-logo.webp",
  smartAiLab: "/images/camp/smart-ai-lab.webp",
};

interface Program {
  name: string;
  photo: string;
  logo?: string;
  grades: string;
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

const CATEGORIES: Category[] = [
  {
    id: "lego-robotics",
    name: "Robotics",
    accent: "blue",
    photo: IMAGES.legoBoy,
    intro:
      "Programs in this category focus on designing, building, and coding with LEGO Robotics. Students construct their own robots and learn how to program them to perform movements and complete challenges — ideal for young kids and older students new to coding, with more advanced courses for complex robotic challenges.",
    programs: [
      {
        name: "Robot Mission Arena",
        photo: IMAGES.missionArena,
        logo: IMAGES.legoEdu,
        grades: "Gr 1 - Gr 4",
        overview:
          "A one-week, challenge-based robotics camp where students design, build, and program robots to complete interactive missions on a custom-built arena. Using pre-built robot bases (drawing robots, sensor-based robots, color-detection robots), students focus on programming and problem-solving — line-following, shape drawing, color detection, and navigation.",
      },
      {
        name: "Pirate Adventure Camp",
        photo: IMAGES.pirate,
        logo: IMAGES.legoEdu,
        grades: "SK - Gr 2",
        overview:
          "A two-week camp combining LEGO-based robotics, creative design, and hands-on activities exploring the world of pirates. Students build pirate-inspired robotic models — ships, treasure chests, moving sea-themed creations — while learning how simple mechanisms create motion, plus sketching and introductory Scratch.",
      },
      {
        name: "Robotics & Engineering Camp (VEX IQ)",
        photo: IMAGES.vexCamp,
        logo: IMAGES.vexLogo,
        grades: "Gr 5 - Gr 8",
        overview:
          "Introduces robotics fundamentals through hands-on, project-based learning — chassis design, drive train basics, structural integrity, and building a fully functioning VEX IQ robot. Students develop autonomous programming skills and maintain engineering notebooks documenting their design process.",
      },
    ],
  },
  {
    id: "coding-ai",
    name: "Coding & AI",
    accent: "coral",
    photo: IMAGES.vscodePython,
    intro:
      "Programs in this category teach coding through game development and applied AI, helping students build their own games, apps, and tools. Well-suited for students who want to learn by building, from Scratch through Roblox to Unity.",
    programs: [
      {
        name: "Smart AI Lab",
        photo: IMAGES.smartAiLab,
        logo: IMAGES.claude,
        grades: "Gr 6 - Gr 11",
        overview:
          "Focuses on building practical AI-powered tools such as chatbots, smart assistants, and decision-making applications. Students design functional tools that simulate real-world AI systems, emphasizing practical use, system design, and user experience.",
      },
      {
        name: "Streamlit: Build Your Own Website!",
        photo: IMAGES.vscodePython,
        logo: IMAGES.streamlit,
        grades: "Gr 6 - Gr 11",
        overview:
          "Introduces building and publishing interactive web apps using Python and Streamlit. Students develop a single app throughout the camp, adding features like user input, goal tracking, and interactive tools, then deploy and share their work online.",
      },
    ],
  },
  {
    id: "3d-making",
    name: "3D Making",
    accent: "mint",
    photo: IMAGES.printLab,
    intro:
      "Programs in this category focus on designing 3D objects using 3D modeling software, giving students hands-on experience creating their own designs and bringing them to life with a 3D printer.",
    programs: [
      {
        name: "3D Printing Lab",
        photo: IMAGES.printLab,
        logo: IMAGES.bambu,
        grades: "Gr 1 - Gr 6",
        overview:
          "Introduces the fundamentals of 3D design, engineering thinking, and additive manufacturing. Students sketch and plan ideas, explore how 3D printers work, and use Tinkercad to create simple models from basic shapes — each student designs and receives their own 3D printed object.",
      },
      {
        name: "Smart 3D Design Lab",
        photo: IMAGES.smart3d,
        logo: IMAGES.bambu,
        grades: "Gr 5 - Gr 11",
        overview:
          "A two-week advanced program in 3D design, engineering principles, and digital fabrication using OnShape. Students prototype and refine models for real-world 3D printing, applying mechanical design concepts — structure, movement, assembly — for a complete idea-to-product experience.",
      },
    ],
  },
  {
    id: "ap-school-prep",
    name: "AP School Prep",
    accent: "blue",
    photo: IMAGES.calcPhysics,
    intro:
      "Programs in this category focus on academic subjects such as computer science and advanced math, helping students review key concepts in advance and strengthen subject-specific skills ahead of challenging school courses.",
    programs: [
      {
        name: "Java 1-2",
        photo: IMAGES.java,
        logo: IMAGES.javaLogo,
        grades: "Gr 8 - Gr 10",
        overview:
          "Introduces the fundamentals of Java programming — variables, conditionals, loops, and problem-solving — through structured lessons and guided practice, building a foundation for future computer science studies.",
      },
      {
        name: "AP Pre-Calculus",
        photo: IMAGES.calcPhysics,
        grades: "Gr 9 - Gr 11",
        overview:
          "Helps students prepare for AP Precalculus and future math courses by strengthening understanding of key concepts — functions, trigonometry, and algebraic reasoning — building confidence and problem-solving skills.",
      },
    ],
  },
];

function ProgramCard({
  name,
  grades,
  overview,
  accent,
  photo,
  logo,
}: Program & { accent: string }) {
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
          <Badge
            color={
              accent === "coral" ? "coral" : accent === "mint" ? "mint" : "blue"
            }
          >
            {grades}
          </Badge>
        </div>
        <p className="m-0 text-base leading-relaxed text-text-body">
          {overview}
        </p>
      </div>
    </div>
  );
}

export function CampExplorer() {
  const [activeId, setActiveId] = useState(CATEGORIES[0].id);

  return (
    <section className="px-5 md:px-10 pb-10 md:pb-16 max-w-[1200px] mx-auto">
      <h2 className="text-xl md:text-2xl mb-2">Choose Your Adventure</h2>
      <p className="text-base mb-6 max-w-[700px] text-text-muted">
        Camp programs are organized into categories, each with programs from
        beginner to advanced.
      </p>
      <CategoryTabs
        categories={CATEGORIES}
        activeId={activeId}
        onChange={setActiveId}
        countLabel={(cfg) => `${cfg.programs.length} programs`}
        tablistLabel="Camp categories"
      />
      {CATEGORIES.map((cat) => (
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
