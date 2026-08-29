// Chinese (zh-CN) translation, hand-maintained.
// Source: src/app/(en)/camp/CampExplorer.tsx

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
    name: "乐高机器人",
    accent: "blue",
    photo: IMAGES.legoBoy,
    intro:
      "此类课程侧重于使用 LEGO 机器人进行设计、搭建和编程。学生们将搭建自己的机器人，并学习如何编写程序让机器人执行动作和完成挑战——非常适合低龄儿童和编程初学者，同时还提供更高级的课程，帮助学生应对复杂的机器人挑战。",
    programs: [
      {
        name: "机器人任务竞技场",
        photo: IMAGES.missionArena,
        logo: IMAGES.legoEdu,
        grades: "1-4年级",
        overview:
          "这是一个为期一周的挑战型机器人夏令营，学生们将设计、搭建和编程机器人，在特制的场地完成互动任务。学生们使用预先搭建好的机器人基础模型（绘图机器人、传感器机器人、颜色识别机器人），专注于编程和问题解决——循线、图形绘制、颜色识别和导航。",
      },
      {
        name: "海盗冒险营",
        photo: IMAGES.pirate,
        logo: IMAGES.legoEdu,
        grades: "幼儿园 - 2年级",
        overview:
          "为期两周的夏令营结合了基于 LEGO 的机器人技术、创意设计和动手实践活动，探索海盗世界。学生们将搭建以海盗为灵感的机器人模型——船只、宝箱、会动的海洋主题作品——同时学习简单的机械装置如何产生运动，以及素描和 Scratch 的入门知识。",
      },
      {
        name: "机器人与工程夏令营（VEX IQ）",
        photo: IMAGES.vexCamp,
        logo: IMAGES.vexLogo,
        grades: "5年级至8年级",
        overview:
          "通过动手实践、项目式学习的方式，介绍机器人学基础知识——底盘设计、传动系统基础、结构完整性以及搭建一台功能齐全的 VEX IQ 机器人。学生将培养自主编程技能，并维护工程笔记本，记录他们的设计过程。",
      },
    ],
  },
  {
    id: "coding-ai",
    name: "编码与人工智能",
    accent: "coral",
    photo: IMAGES.vscodePython,
    intro:
      "此类课程通过游戏开发和应用人工智能教授编程，帮助学生构建自己的游戏、应用程序和工具。非常适合希望通过动手实践来学习的学生，课程涵盖从 Scratch 到 Roblox 再到 Unity 等各种平台。",
    programs: [
      {
        name: "智能人工智能实验室",
        photo: IMAGES.smartAiLab,
        logo: IMAGES.claude,
        grades: "6年级至11年级",
        overview:
          "专注于构建实用的人工智能工具，例如聊天机器人、智能助手和决策应用程序。学生设计能够模拟真实世界人工智能系统的功能性工具，重点关注实际应用、系统设计和用户体验。",
      },
      {
        name: "Streamlit：创建您自己的网站！",
        photo: IMAGES.vscodePython,
        logo: IMAGES.streamlit,
        grades: "6年级至11年级",
        overview:
          "本课程介绍如何使用 Python 和 Streamlit 构建和发布交互式 Web 应用程序。学生将在整个课程中开发一个应用程序，添加用户输入、目标跟踪和交互式工具等功能，然后将他们的作品部署到网上并分享。",
      },
    ],
  },
  {
    id: "3d-making",
    name: "3D制作",
    accent: "mint",
    photo: IMAGES.printLab,
    intro:
      "此类课程侧重于使用 3D 建模软件设计 3D 物体，让学生亲身实践，创建自己的设计，并用 3D 打印机将其变为现实。",
    programs: [
      {
        name: "3D打印实验室",
        photo: IMAGES.printLab,
        logo: IMAGES.bambu,
        grades: "1-6年级",
        overview:
          "本课程介绍3D设计、工程思维和增材制造的基础知识。学生们将绘制草图并规划创意，探索3D打印机的工作原理，并使用Tinkercad软件从基本形状创建简单的模型——每个学生都将设计并获得自己专属的3D打印作品。",
      },
      {
        name: "智能3D设计实验室",
        photo: IMAGES.smart3d,
        logo: IMAGES.bambu,
        grades: "5年级 - 11年级",
        overview:
          "这是一个为期两周的高级课程，内容涵盖 3D 设计、工程原理和使用 OnShape 进行数字制造。学生们将制作原型并完善模型，用于实际的 3D 打印，应用机械设计概念——结构、运动、装配——以获得从概念到产品的完整体验。",
      },
    ],
  },
  {
    id: "ap-school-prep",
    name: "AP学校预备课程",
    accent: "blue",
    photo: IMAGES.calcPhysics,
    intro:
      "此类课程侧重于计算机科学和高等数学等学术科目，帮助学生提前复习关键概念，并在具有挑战性的学校课程之前加强学科特定技能。",
    programs: [
      {
        name: "Java 1-2",
        photo: IMAGES.java,
        logo: IMAGES.javaLogo,
        grades: "8年级 - 10年级",
        overview:
          "通过结构化的课程和指导练习，介绍 Java 编程的基础知识——变量、条件、循环和问题解决，为未来的计算机科学学习奠定基础。",
      },
      {
        name: "AP Pre-Calculus",
        photo: IMAGES.calcPhysics,
        grades: "9年级至11年级",
        overview:
          "通过加强对关键概念（函数、三角函数和代数推理）的理解，帮助学生为 AP Precalculus 及未来的数学课程做好准备，从而建立自信和解决问题的能力。",
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
      <h2 className="text-xl md:text-2xl mb-2">选择你的冒险</h2>
      <p className="text-base mb-6 max-w-[700px] text-text-muted">
        夏令营项目按类别划分，每个类别下又包含从入门到高级的各种项目。
      </p>
      <CategoryTabs
        categories={CATEGORIES}
        activeId={activeId}
        onChange={setActiveId}
        countLabel={(cfg) => `${cfg.programs.length} 个课程`}
        tablistLabel="夏令营类别"
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
