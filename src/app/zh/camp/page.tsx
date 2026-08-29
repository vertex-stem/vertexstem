// Chinese (zh-CN) translation, hand-maintained.
// Source: src/app/(en)/camp/page.tsx

import type { Metadata } from "next";
import { ReactNode } from "react";
import { Badge } from "@/components/Badge";
import { FaqItem } from "@/components/FaqItem";
import { CTABand } from "@/components/zh/CTABand";
import { DotCluster } from "@/components/Accents";
import { pageMetadataZh } from "@/lib/seo";
import { CampExplorer } from "./CampExplorer";

export const metadata: Metadata = pageMetadataZh({
  title: "夏令营",
  description:
    "整个夏天，搭建、编程、设计与想象。探索 Vertex STEM 面向各年龄段学生的机器人、编程、人工智能和 3D 打印夏令营。",
  path: "/zh/camp",
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
    question: "夏令营招收哪些年龄段的学生？",
    answer:
      "我们的夏令营项目招收从高级幼儿园（SK）到11年级的学生，课程按年级分组，确保活动和项目难度与每位营员的能力相匹配。",
  },
  {
    id: "camp-daily-schedule",
    question: "夏令营的一天是怎样安排的？",
    answer:
      "营地时间为上午9:30至下午3:30，午餐时间为中午12点至下午1点。如需延长照护，下午3:30至5:00提供收费的课后托管服务。",
  },
  {
    id: "camp-lunch",
    question: "如果孩子没有自带午餐怎么办？",
    answer:
      "如果孩子没有自带午餐，我们可以提供午餐，每天10加元。Vertex STEM Education 每周五还会举办披萨午餐聚会。",
  },
  {
    id: "camp-week-selection",
    question: "可以只报名部分周次，而不用报名整个夏天吗？",
    answer:
      "当然可以！营期为6月15日至9月4日，大多数项目以两周为一个单位（也有部分一周的选项），您可以根据家庭安排自由选择合适的周次。请注意，6月29日至7月3日以及8月4日至7日为四天日程安排。",
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
          <Badge color="sunny">夏令营</Badge>
          <h1 className="text-2xl md:text-3xl my-4 leading-tight text-white">
            整个夏天，尽情地建造、编程、设计和想象
          </h1>
          <p className="text-lg opacity-[0.92] max-w-[520px] m-0">
            Vertex STEM Education 是一个专注于 STEM 的 STEM 学习中心。课程包括 Python、Java 和 C++ 编程、3D 打印、微积分和物理、工程设计、游戏开发和机器人——使用 LEGO 机器人和 SPIKE 套件、Arduino、3D 打印机、机器人组件和 Raspberry Pi 等动手材料。
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
            <h2 className="text-2xl m-0 leading-none">时间安排</h2>
            <div className="w-10 h-1 rounded-full mt-2.5 bg-yellow-500" />
          </div>
        </div>
        <p className="text-base leading-relaxed max-w-[820px] mb-9 text-text-body">
          从 <strong className="text-text-heading">6月15日至9月4日</strong>，为期{" "}
          <strong className="text-text-heading">12周</strong>的时间里，Vertex STEM Education 将为各个年龄段的学生举办夏令营项目。每个项目通常为期两周，也有部分项目仅为一周。其中{" "}
          <strong className="text-text-heading">6月29日至7月3日</strong> 和{" "}
          <strong className="text-text-heading">8月4日至8月7日</strong> 这两周，Vertex STEM Education 将采用{" "}
          <strong className="text-text-heading">四天制</strong> 课程安排，而非通常的完整五天。
        </p>
        <div className="flex flex-col md:flex-row items-stretch md:items-start gap-6 md:gap-0">
          <div className="flex-1 min-w-0">
            <ScheduleCard
              label="营地日开始"
              value="9:30 AM"
              color="var(--color-yellow-500)"
              tint="var(--color-yellow-100)"
              icon="sun"
            />
          </div>
          <ScheduleConnector />
          <div className="flex-1 min-w-0">
            <ScheduleCard
              label="午餐"
              value="12 – 1 PM"
              color="var(--color-coral-500)"
              tint="var(--color-coral-100)"
              icon="meal"
            />
          </div>
          <ScheduleConnector />
          <div className="flex-1 min-w-0">
            <ScheduleCard
              label="课程结束"
              value="3:30 PM"
              color="var(--color-blue-500)"
              tint="var(--color-blue-100)"
              icon="flag"
            />
          </div>
          <ScheduleConnector />
          <div className="flex-1 min-w-0">
            <ScheduleCard
              label="课后托管（需额外付费）"
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
            如果孩子没有自带午餐，我们可以代为提供，费用为{" "}
            <strong className="text-text-heading">每天10加元</strong>。Vertex STEM Education 每周五还会举办{" "}
            <strong className="text-text-heading">披萨午餐聚会</strong>。
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
          <h2 className="text-xl md:text-2xl mb-6">常见问题</h2>
          <div className="mt-6 flex flex-col gap-3">
            {FAQS.map((f) => (
              <FaqItem key={f.id} question={f.question} answer={f.answer} />
            ))}
          </div>
        </div>
      </section>

      <CTABand
        bg="coral"
        eyebrow="准备加入吗？"
        heading="名额有限，先到先得！快来为您的孩子预定为期一周的机器人、火箭和编程课程吧！"
        quickForm
        map
      />
    </div>
  );
}
