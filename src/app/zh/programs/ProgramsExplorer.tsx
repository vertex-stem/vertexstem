// Chinese (zh-CN) translation, hand-maintained.
// Source: src/app/(en)/programs/ProgramsExplorer.tsx

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
    name: "机器人",
    accent: "blue",
    photo: IMAGES.robotics,
    intro:
      "LEGO SPIKE 套装将乐高搭建的创意与机器人及编程的动手学习完美结合。孩子们在组装电动模型的过程中，学习基础工程、机械和编程概念，以有趣且无需屏幕的方式培养解决问题的能力和自信心。VEX IQ 机器人课程则让孩子们通过动手搭建和编程探索工程与机器人世界——利用模块化、可拼接的零件，孩子们设计并搭建能够移动和执行任务的机器人。",
    programs: [
      {
        name: "LEGO Robotics Explorer",
        learn: [
          "基础工程与机械原理",
          "编程逻辑入门",
          "动手搭建，建立自信",
        ],
        grades: "幼儿 STEM 启蒙",
        photo: IMAGES.spikeEssential,
        logo: IMAGES.legoLogo,
        overview:
          "这门入门机器人课程专为最年幼的探索者设计！孩子们将在趣味横生的动手实践中，初步了解工程与机械原理，并首次接触编程逻辑。",
      },
      {
        name: "LEGO Robotics Challenger",
        learn: [
          "齿轮比与扭矩",
          "机器人导航与控制系统",
          "模块化编程",
        ],
        grades: "进阶技能提升",
        photo: IMAGES.spikePrime,
        logo: IMAGES.legoLogo,
        overview:
          "本课程在基础技能之上，进一步介绍齿轮比、扭矩、机器人导航、控制系统以及模块化编程。孩子们在设计和编程更复杂的机器人过程中，强化逻辑思维、解决问题的能力和创造力。",
      },
      {
        name: "VEX IQ 机器人",
        learn: [
          "模块化机器人搭建",
          "任务驱动编程",
          "批判性思维与问题解决",
        ],
        grades: "动手搭建与编程",
        photo: IMAGES.vex,
        logo: IMAGES.vexLogo,
        overview:
          "VEX IQ 机器人课程让孩子们通过动手搭建和编程探索工程与机器人世界。利用模块化、可拼接的零件，孩子们设计并搭建能够移动和执行任务的机器人，在过程中培养解决问题的能力、批判性思维，并为 STEM 学习奠定坚实基础。",
      },
    ],
  },
  {
    id: "coding",
    name: "编程",
    accent: "coral",
    photo: IMAGES.coding,
    intro:
      "我们的编程课程从可视化的模块编程逐步过渡到文本语言和算法思维，学生可以从任何水平开始，并持续进阶。",
    programs: [
      {
        name: "Scratch",
        learn: [
          "可视化模块编程",
          "创意项目设计",
          "问题解决基础",
        ],
        grades: "适龄：5岁以上",
        photo: IMAGES.scratch,
        logo: IMAGES.scratchLogo,
        overview:
          "我们的 Scratch 课程通过有趣、互动的项目，向年幼学习者介绍编程。运用简单的可视化界面，学生们在创造中学习编程基础，同时培养创造力、问题解决能力和自信心。",
      },
      {
        name: "Python",
        learn: ["逻辑与自动化", "数据处理", "实际项目开发"],
        grades: "适龄：9岁以上",
        photo: IMAGES.python,
        logo: IMAGES.pythonLogo,
        overview:
          "Python 是最通用且对初学者友好的编程语言之一。通过动手项目，学生将培养逻辑、自动化和数据处理技能，为进阶编程和实际应用做好准备。",
      },
      {
        name: "Java",
        learn: [
          "文本编程",
          "面向对象设计",
          "核心编程概念",
        ],
        grades: "适龄：12岁以上",
        photo: IMAGES.java,
        logo: IMAGES.javaLogo,
        overview:
          "在我们的 Java 课程中，学生们迈出文本编程的第一步。他们将探索核心编程概念和面向对象设计，同时创建实际项目，为未来计算机科学的学习打下坚实基础。",
      },
      {
        name: "算法",
        learn: [
          "分解复杂问题",
          "设计高效解决方案",
          "竞赛编程准备",
        ],
        grades: "适龄：12岁以上",
        photo: IMAGES.algorithms,
        logo: IMAGES.pythonLogo,
        overview:
          "我们的算法课程教授学生如何像计算机科学家一样思考。他们学习分解复杂问题、设计高效解决方案，并为竞赛编程和高级计算机科学研究打下坚实基础。",
      },
    ],
  },
  {
    id: "engineering-design-3d-printing",
    name: "工程设计与3D打印",
    accent: "mint",
    photo: IMAGES.printer,
    intro:
      "学生将体验完整的设计过程，从头脑风暴到制作功能原型，结合电子、工程和 3D 打印技术。",
    programs: [
      {
        name: "设计与3D打印",
        learn: [
          "草图绘制与创意规划",
          "迭代式设计思维",
          "功能原型制作",
        ],
        grades: "设计思维与原型制作",
        photo: IMAGES.design3d,
        overview:
          "设计思维帮助学生们将想法变为现实。通过创意挑战，他们学习绘制草图、规划方案并反复迭代——培养解决问题的能力并磨练细节观察力。学生们将体验从头脑风暴到制作功能原型的完整过程，激发创新精神并增强自信。",
      },
      {
        name: "工程设计与项目",
        learn: [
          "搭建简单电路",
          "从数字到实体的3D打印",
          "动手实验",
        ],
        grades: "电子与3D打印",
        photo: IMAGES.printer,
        overview:
          "学生们将深入电子世界，搭建简单电路，探索电如何为日常设备供电。通过3D打印，他们将数字设计转化为实体物品，了解工程与技术的交汇。这些动手实践培养技术技能，并激励学生创造、实验和发明。",
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
          [ {name} 照片 ]
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
              学生将学到什么
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
      <h2 className="text-xl md:text-2xl mb-2">选择您的学习路径</h2>
      <p className="text-base mb-6 max-w-[700px] text-text-muted">
        课程按方向分组，每个方向都设有从入门到高级的系列课程。
      </p>
      <CategoryTabs
        categories={PROGRAM_CATEGORIES}
        activeId={activeId}
        onChange={setActiveId}
        countLabel={(cfg) => `${cfg.programs.length} 个课程`}
        tablistLabel="课程类别"
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
