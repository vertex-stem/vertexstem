// Chinese (zh-CN) translation, hand-maintained.
// Source: src/app/(en)/programs/page.tsx

import type { Metadata } from "next";
import { Badge } from "@/components/Badge";
import { FaqItem } from "@/components/FaqItem";
import { CTABand } from "@/components/zh/CTABand";
import { DuoStack, RingAccent } from "@/components/Accents";
import { pageMetadataZh } from "@/lib/seo";
import { ProgramsExplorer } from "./ProgramsExplorer";

export const metadata: Metadata = pageMetadataZh({
  title: "STEM 与编程课程",
  description:
    "探索我们的 STEM 与编程课程，涵盖机器人、电子学和 3D 打印，在实践性强、寓教于乐的环境中培养关键技能。",
  path: "/zh/programs",
});

const IMAGES = {
  hero: "/images/programs/hero.webp",
};

const FAQS = [
  {
    id: "explorer-vs-challenger",
    question: "LEGO Robotics Explorer 和 Robotics Challenger 有什么区别？",
    answer:
      "LEGO Robotics Explorer 专为年幼学生和初学者设计，侧重于基础工程概念、简单的传感器和积木式编程。Robotics Challenger 则更进阶，引入了齿轮比、扭矩、导航和模块化编程，挑战年龄较大的学生完成复杂的机器人项目。",
  },
  {
    id: "prior-experience-required",
    question: "参加 Arduino 或电子工作坊前，学生需要具备相关经验吗？",
    answer:
      "不需要！我们的 Arduino 和电子课程从电路和编程的基础开始，逐步过渡到智能照明、报警系统和家庭自动化等实际项目。",
  },
  {
    id: "3d-printing-skills",
    question: "学生能从 3D 打印工作坊中获得哪些技能？",
    answer:
      "学生将学习 3D 建模、设计思维，以及如何将数字创意变为实物。他们将获得 CAD 软件、原型制作和问题排查的实践经验，这些技能将创造力与工程学相结合。",
  },
  {
    id: "coding-in-robotics",
    question: "编程如何融入机器人和电子课程？",
    answer:
      "编程是我们项目的核心。学生学习使用 Python、C++ 或 Scratch 等环境为机器人、微控制器和传感器编程，从而增强解决问题的能力和逻辑思维。",
  },
];

const gridBg = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
  backgroundSize: "26px 26px",
};

export default function ProgramsPage() {
  return (
    <div className="font-body">
      {/* Hero */}
      <section
        className="bg-blue-500 text-white py-12 md:py-[72px] px-5 md:px-10 grid gap-8 md:gap-10 items-center grid-cols-1 md:grid-cols-[1.1fr_1fr]"
        style={gridBg}
      >
        <div>
          <Badge color="sunny">STEM 与编程</Badge>
          <h1 className="text-2xl md:text-3xl my-4 leading-tight text-white">
            今天就开始学习 STEM 吧！
          </h1>
          <p className="text-lg opacity-[0.92] max-w-[520px] m-0">
            探索我们的 STEM 与编程课程，涵盖机器人、电子学和 3D 打印，在实践性强、寓教于乐的环境中培养关键技能。
          </p>
        </div>
        <div className="relative">
          <div
            className="h-[220px] md:h-[280px] bg-center bg-cover bg-no-repeat rounded-[20px]"
            style={{ backgroundImage: `url(${IMAGES.hero})` }}
          />
          <div className="absolute bottom-[-20px] left-[-20px]">
            <DuoStack size={44} colors={["var(--color-coral-500)", "var(--color-mint-500)"]} />
          </div>
          <div className="absolute top-[-18px] right-6">
            <RingAccent size={52} color="var(--color-yellow-500)" />
          </div>
        </div>
      </section>

      <ProgramsExplorer />

      {/* FAQs */}
      <section className="bg-slate-50 py-10 md:py-14 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-xl md:text-2xl mb-6">常见问题解答</h2>
          <div className="flex flex-col gap-3">
            {FAQS.map((f) => (
              <FaqItem key={f.id} question={f.question} answer={f.answer} />
            ))}
          </div>
        </div>
      </section>

      <CTABand
        bg="coral"
        eyebrow="欢迎与我们联系。"
        heading="无论是想了解具体课程、有任何疑问，还是想聊聊我们还能如何携手赋能孩子的未来，都欢迎联系我们！"
        quickForm
        map
      />
    </div>
  );
}
