// Chinese (zh-CN) translation, hand-maintained.
// Source: src/app/(en)/about/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Highlight } from "@/components/Highlight";
import { BrickStack } from "@/components/BrickStack";
import { CountUpStat } from "@/components/CountUpStat";
import { CTABand } from "@/components/zh/CTABand";
import { ValueCard, ValueIconType } from "@/components/ValueCard";
import { pageMetadataZh } from "@/lib/seo";

export const metadata: Metadata = pageMetadataZh({
  title: "关于我们",
  description:
    "了解 Vertex STEM Education 的使命——通过以社区和导师制为基础的实践性机器人、编程和工程课程，赋能年轻的创新者。",
  path: "/zh/about",
});

const values: {
  title: string;
  description: string;
  color: string;
  icon: ValueIconType;
}[] = [
  {
    title: "动手实践学习",
    description:
      "学生通过动手实践学习——真实的机器人、真实的代码、真实的项目——而不仅仅是理论。",
    color: "var(--color-blue-500)",
    icon: "hands-on",
  },
  {
    title: "导师制与社区",
    description:
      "每位学生都由用心投入的合格讲师悉心指导，不论课堂内外。",
    color: "var(--color-coral-500)",
    icon: "mentorship",
  },
  {
    title: "包容每一位学习者",
    description:
      "课程设计注重无障碍与包容性，让每个孩子都能在 STEM 领域找到属于自己的位置。",
    color: "var(--color-mint-500)",
    icon: "inclusion",
  },
  {
    title: "面向未来的技能",
    description:
      "我们培养孩子受益终身的自信心、韧性和解决问题的能力。",
    color: "var(--color-yellow-500)",
    icon: "future-ready",
  },
];

const approachSteps = [
  {
    title: "探索",
    description:
      "学生通过轻松有趣、零压力的方式，初步接触机器人、编程和工程的核心概念。",
    color: "var(--color-skyblue-500)",
  },
  {
    title: "搭建与创造",
    description:
      "动手项目将想法变为可运行的机器人、程序和原型——每一步都有导师悉心指导。",
    color: "var(--color-coral-500)",
  },
  {
    title: "竞赛与展示",
    description:
      "学生将所学应用于 FLL 挑战赛和探索赛等竞赛中，我们既看重成果，也珍视每一步成长。",
    color: "var(--color-mint-500)",
  },
];

const stats = [
  {
    value: "~10",
    label: "年",
    description: "通过动手实践的 STEM 教育，赋能年轻的创新者。",
    color: "var(--color-yellow-500)",
  },
  {
    value: "100+",
    label: "受教学生",
    description: "涵盖机器人、编程和工程课程。",
    color: "var(--color-mint-500)",
  },
  {
    value: "7",
    label: "项竞赛",
    description: "我们的学生曾代表我们参加的竞赛项目。",
    color: "var(--color-coral-500)",
  },
  {
    value: "4:1",
    label: "师生比",
    description: "小班授课，确保每位学生都能获得真正的关注。",
    color: "var(--color-skyblue-500)",
  },
];

const serviceDetails = [
  {
    title: "教学对象",
    value: "青少年学习者",
    description:
      "课程专为青少年打造，从零基础的初学者到高阶竞赛选手皆宜。",
    color: "var(--color-blue-500)",
  },
  {
    title: "班级规模",
    value: "2 : 1",
    description:
      "平均每两名学生配一位讲师，确保每位学生都能获得手把手指导。",
    color: "var(--color-coral-500)",
  },
  {
    title: "授课形式",
    value: "全年开课",
    description:
      "课后课程、假期营队与竞赛团队，全年不间断。",
    color: "var(--color-mint-500)",
  },
  {
    title: "校区地点",
    value: "东约克，多伦多",
    description: "一间专属教室，服务大多伦多地区的各个家庭。",
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
              <h1 className="text-[2rem] md:text-3xl m-0">关于我们</h1>
              <Image
                src="/images/vertex-stem-logo.png"
                alt="Vertex STEM Education"
                width={1650}
                height={700}
                className="h-9 md:h-12 w-auto shrink-0"
              />
            </div>
            <p className="text-lg leading-relaxed font-medium m-0 font-display text-text-heading">
              Vertex STEM Edu 是一家加拿大教育机构，致力于通过
              <Highlight color="var(--color-coral-200)">机器人</Highlight>、
              <Highlight color="var(--color-mint-200)">编程</Highlight>
              、创新项目和竞赛来赋能青少年。
            </p>
            <p className="text-base leading-relaxed m-0 text-text-body">
              我们秉持这样的信念创立：每个孩子都有潜力成为
              <Highlight color="var(--color-yellow-300)">创造者、问题解决者和领导者</Highlight>
              。我们将世界一流的 STEM 教育与真实的实践机会相结合——从课堂延伸到竞赛赛场和科学展览会。
            </p>
            <div className="flex gap-3.5 mt-1">
              <Button variant="secondary" href="/zh/programs">
                查看课程
              </Button>
              <Button variant="outline" href="/zh/camp">
                查看营地
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              <div className="col-span-2 relative h-[220px] md:h-[280px] rounded-[20px] overflow-hidden border-[3px] shadow-sm border-blue-500">
                <Image
                  src="/images/about/hero-award-photo.webp"
                  alt="一位导师和学生手持一等奖证书"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="relative h-[140px] md:h-[180px] rounded-[20px] overflow-hidden border-[3px] shadow-sm border-coral-500">
                <Image
                  src="/images/about/hero-electronics.webp"
                  alt="一位学生在导师的指导下搭建电子电路"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[140px] md:h-[180px] rounded-[20px] overflow-hidden border-[3px] shadow-sm border-mint-500">
                <Image
                  src="/images/about/hero-robotics-build.webp"
                  alt="两位学生一起组装机器人"
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
        <h2 className="text-xl md:text-2xl mb-2">我们的使命与价值观</h2>
        <p className="text-base mb-6 max-w-[640px] text-text-muted">
          我们为学生打造的一切，都遵循同一套原则。
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
          <h2 className="text-xl md:text-2xl text-center mb-10 md:mb-14 tracking-tight text-white">
            我们的方法
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
                  第 {i + 1} 步
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
        <h2 className="text-xl md:text-2xl mb-2">服务对象</h2>
        <p className="text-base mb-6 max-w-[640px] text-text-muted">
          了解我们课程的设计与运作方式。
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
        heading="想了解更多关于我们的信息吗？"
        subtext="如果您对我们的课程、团队或我们如何全年支持学生有任何疑问，请与我们联系。"
        quickForm
        map
      />
    </div>
  );
}
