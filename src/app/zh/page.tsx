// Chinese (zh-CN) translation, hand-maintained.
// Source: src/app/(en)/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { FeatureGraphic, FeatureIconBadge } from "@/components/FeatureGraphic";
import { BrickStack } from "@/components/BrickStack";
import { HeroMedia } from "@/components/HeroMedia";
import { CTABand } from "@/components/zh/CTABand";
import { GrowthPathGraphic } from "@/components/GrowthPathGraphic";
import { pageMetadataZh } from "@/lib/seo";

export const metadata: Metadata = pageMetadataZh({
  title: "培养未来的创新者",
  description: "探索创新的STEM课程，旨在激发好奇心，提升学生在机器人、编程和工程方面的学习能力。",
  path: "/zh",
});

const features = [
  {
    title: "合格讲师",
    description:
      "我们确保所有讲师都具备各自领域的专业资质。",
    color: "var(--color-blue-500)" as const,
    icon: "instructors" as const,
    image: "/images/home/qualified-instructors.webp",
  },
  {
    title: "小班教学",
    description:
      "我们保持小班规模，确保每位学生都能获得所需的关注，从而脱颖而出。",
    color: "var(--color-coral-500)" as const,
    icon: "class-size" as const,
    image: "/images/home/small-class-sizes.webp",
  },
  {
    title: "课程丰富多样",
    description:
      "从电子设计与制作到编程与机器人——总有一款适合每位学生。",
    color: "var(--color-mint-500)" as const,
    icon: "programs" as const,
    image: "/images/home/wide-ranging-programs.webp",
  },
];

const programs = [
  {
    title: "STEM 与编程",
    description:
      "动手实践机器人、编程和工程，围绕真实项目展开。",
    link: "/zh/programs",
    color: "var(--color-blue-500)" as const,
    badge: "5 - 17 岁",
    photo: "/images/programs/coding.webp",
    highlights: [
      "LEGO SPIKE 与 VEX 机器人",
      "Python、Java 与 Scratch 编程",
      "工程设计 与 3D 打印",
    ],
  },
  {
    title: "竞赛",
    description:
      "参加 FLL Challenge 与 Explore，在真实机器人竞赛中运用技能。",
    link: "/zh/competition",
    color: "var(--color-coral-500)" as const,
    badge: "6 岁以上",
    photo: "/images/competition/challenge-main.webp",
    highlights: [
      "FLL Challenge 与 Explore",
      "VEX IQ 机器人",
      "ACSL 计算机编程竞赛",
    ],
  },
  {
    title: "夏令营",
    description:
      "全日与半日制STEM游戏和搭建活动，适合各个年龄组。",
    link: "/zh/camp",
    color: "var(--color-mint-500)" as const,
    badge: "幼儿园大班 - 11年级",
    photo: "/images/camp/vex-camp.jpeg",
    highlights: [
      "LEGO 机器人",
      "编程 与 人工智能",
      "3D 制作 与 设计",
    ],
  },
];

const partners = [
  {
    title: "北约克棒球",
    description:
      "自豪地赞助了一支晋级安大略棒球协会决赛的年轻运动员队伍。",
    color: "var(--color-skyblue-500)" as const,
    photo: "/images/partnerships/baseball.webp",
    logo: undefined as string | undefined,
    link: "/zh/partnerships#north-york-baseball",
  },
  {
    title: "安大略省自闭症协会",
    description:
      "专为每个孩子设计的无障碍、包容且充满启发性的专业STEM工作坊。",
    color: "var(--color-mint-500)" as const,
    photo: "/images/home/autism-ontario.webp",
    logo: "/images/partnerships/autism-logo.webp",
    link: "/zh/partnerships#autism-ontario",
  },
  {
    title: "兰斯博蒂斯",
    description:
      "指导并装备当地中学VEX机器人队，助其在竞赛中取得成功。",
    color: "var(--color-coral-500)" as const,
    photo: "/images/partnerships/lancebotics.webp",
    logo: undefined as string | undefined,
    link: "/zh/partnerships#lancebotics",
  },
];

// Temporarily hidden — News / Updates / Announcements section (see below).
// const blogPosts = [
//   {
//     date: "2025年12月17日",
//     title: "FLL2025：荣获机器人设计奖！",
//     color: "var(--color-yellow-500)",
//   },
//   {
//     date: "2025年10月23日",
//     title: "应用程序设计入门",
//     color: "var(--color-skyblue-500)",
//   },
//   {
//     date: "2025年8月5日",
//     title: "FLL 2025赛季已开启！",
//     color: "var(--color-coral-500)",
//   },
// ];

const dotBg = {
  backgroundImage:
    "radial-gradient(rgba(255,255,255,0.18) 2px, transparent 2px)",
  backgroundSize: "22px 22px",
};

export default function HomePage() {
  return (
    <div className="overflow-hidden font-body">
      {/* Hero */}
      <section
        className="bg-blue-500 text-white py-12 md:py-20 px-5 md:px-10 grid gap-8 md:gap-10 items-center relative grid-cols-1 md:grid-cols-[1.1fr_1fr]"
        style={dotBg}
      >
        <div className="relative z-[1]">
          <h1 className="text-2xl md:text-4xl my-[18px] leading-tight tracking-tight text-white">
            培养未来的创新者
          </h1>
          <p className="text-lg opacity-[0.92] max-w-[480px] mb-[26px]">
            探索创新的STEM课程，激发好奇心，提升学生学习能力。
          </p>
          <div className="flex gap-3.5">
            <Button variant="secondary" href="/zh/contact">
              报名
            </Button>
            <Button variant="outline" inverse href="/zh/programs">
              查看课程
            </Button>
          </div>
        </div>
        <div className="relative">
          <HeroMedia
            videoSrc="/intro.mp4"
            imageSrc="/images/home/hero.webp"
            imageAlt="学生们在Vertex STEM Education搭建机器人"
          />
          <div className="absolute bottom-[-24px] left-[-24px]">
            <BrickStack size={46} />
          </div>
          <div className="absolute top-[-20px] right-5 w-[60px] h-[60px] rounded-full opacity-90 bg-coral-500" />
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-10 md:py-16 px-5 md:px-0 max-w-[1200px] mx-auto grid gap-6 md:gap-7 items-start grid-cols-1 md:grid-cols-[auto_1fr_auto]">
        <div className="order-first w-16 h-1.5 md:w-1.5 md:h-[118px] rounded-full bg-brand-secondary" />
        <div>
          <p className="text-lg font-medium max-w-[800px] mb-3.5 leading-relaxed font-display text-text-heading">
            选择Vertex STEM Edu，不仅是选择STEM课程，更是为您的孩子选择一条成长为创新者、问题解决者和领导者的道路。
          </p>
          <p className="text-base leading-relaxed max-w-[760px] m-0 text-text-body">
            我们的课程将动手实践的机器人、编程和工程与竞赛、创造和协作的机会相结合。学生不仅学习理论，更在真实项目、竞赛和社区活动中加以应用。我们注重包容性、导师制和未来准备，赋能每位学生建立自信、韧性，并掌握终身受益的技能。
          </p>
        </div>
        <GrowthPathGraphic />
      </section>

      {/* Why Vertex */}
      <section
        className="bg-slate-900 py-12 md:py-16 px-5 md:px-10 relative"
        style={dotBg}
      >
        <div className="max-w-[1200px] mx-auto relative">
          <h2 className="text-xl md:text-2xl text-center mb-8 md:mb-10 tracking-tight text-white">
            为什么选择Vertex？
          </h2>
          <div className="mb-10 md:mb-14 max-w-[960px] mx-auto text-center relative">
            <span
              aria-hidden
              className="block text-4xl md:text-5xl leading-none select-none text-yellow-500 font-display"
            >
              &#8220;
            </span>
            <p className="text-base md:text-lg leading-relaxed -mt-2 md:-mt-3 text-white font-display font-medium">
              我们视每位学生为独特的个体，而不仅仅是花名册上的一个名字。因此，我们会花时间了解每个孩子的起点，并一步步陪他们成长——在迈向更大突破的途中，庆祝每一个小胜利。您孩子的成功就是我们的成功，我们致力于长期陪伴。
            </p>
            <div className="mt-4 mx-auto w-10 h-[3px] rounded-full bg-yellow-500" />
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {features.map((f) => (
              <Card
                key={f.title}
                title={
                  <>
                    <FeatureGraphic
                      type={f.icon}
                      color={f.color}
                      image={f.image}
                    />
                    <div className="flex items-center gap-2.5">
                      <FeatureIconBadge type={f.icon} color={f.color} />
                      {f.title}
                    </div>
                  </>
                }
              >
                {f.description}
              </Card>
            ))}
          </div>
          <div className="mt-8 md:mt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <span className="text-base font-semibold text-white font-display">
              准备好报名了吗？
            </span>
            <div className="flex gap-3 flex-wrap justify-center">
              <Button variant="secondary" href="/zh/programs">
                探索我们的课程
              </Button>
              <Button variant="outline" inverse href="/zh/contact">
                有疑问？
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-10 md:py-16 px-5 md:px-0 max-w-[1200px] mx-auto">
        <h2 className="text-xl md:text-2xl mb-1.5">课程</h2>
        <p className="text-base mb-6 max-w-[640px] text-text-muted">
          探索Vertex STEM Education的机器人、编程和工程课程，专为学生的成长而设计。
        </p>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {programs.map((p) => (
            <Card
              key={p.title}
              media={
                <div className="relative w-full aspect-[16/10]">
                  <Image src={p.photo} alt="" fill className="object-cover" />
                </div>
              }
              title={
                <div className="flex items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ background: p.color }}
                    />
                    {p.title}
                  </div>
                  <Badge
                    color={
                      p.color === "var(--color-blue-500)"
                        ? "blue"
                        : p.color === "var(--color-coral-500)"
                        ? "coral"
                        : "mint"
                    }
                  >
                    {p.badge}
                  </Badge>
                </div>
              }
              footer={
                <Button size="sm" variant="outline" href={p.link}>
                  了解更多
                </Button>
              }
            >
              <p className="m-0">{p.description}</p>
              <ul className="mt-3 pt-3 flex flex-col gap-1.5 list-none p-0 border-t border-border-subtle">
                {p.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="font-bold shrink-0" style={{ color: p.color }}>
                      &#10004;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section
        className="bg-mint-900 py-10 md:py-16 px-5 md:px-10 relative"
        style={dotBg}
      >
        <div
          className="absolute top-0 right-0 w-[220px] h-[220px] rounded-full"
          style={{
            background: "rgba(255,255,255,0.08)",
            transform: "translate(30%, -40%)",
          }}
        />
        <div className="max-w-[1200px] mx-auto relative">
          <div className="grid gap-6 items-center grid-cols-1 md:grid-cols-[1fr_auto] mb-8 md:mb-10">
            <div>
              <h2 className="text-xl md:text-2xl mb-2 text-white">
                合作伙伴
              </h2>
              <p className="text-base m-0 max-w-[640px] opacity-90 text-white">
                培养下一代创新者需要整个社区的力量——我们建立强大的合作伙伴关系，为学生创造有意义的机会。
              </p>
            </div>
            <div className="flex gap-2.5 flex-wrap">
              <Badge color="blue">现有合作伙伴</Badge>
              <Badge color="coral">合作营销</Badge>
            </div>
          </div>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {partners.map((p) => (
              <Card
                key={p.title}
                media={
                  <div className="relative w-full aspect-[16/10]">
                    <Image src={p.photo} alt="" fill className="object-cover" />
                    {p.logo && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative h-16 w-[210px] bg-white/95 rounded-lg shadow-md">
                          <Image
                            src={p.logo}
                            alt={p.title}
                            fill
                            sizes="210px"
                            className="object-contain p-2.5"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                }
                title={
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ background: p.color }}
                    />
                    {p.title}
                  </div>
                }
                footer={
                  <Button size="sm" variant="outline" href={p.link}>
                    了解更多
                  </Button>
                }
              >
                {p.description}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog — News, Updates, Announcements: temporarily hidden, may bring back later.
      <section className="py-10 md:py-16 px-5 md:px-0 max-w-[1200px] mx-auto">
        <h2 className="text-xl md:text-2xl mb-1.5">新闻、动态、公告！</h2>
        <p className="text-sm mb-6 text-text-muted">
          博客 — Vertex STEM Edu
        </p>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {blogPosts.map((b) => (
            <Card
              key={b.title}
              footer={
                <span className="font-semibold text-sm text-text-link">
                  阅读更多 →
                </span>
              }
            >
              <div
                className="w-2.5 h-2.5 rounded-full mb-2.5"
                style={{ background: b.color }}
              />
              <div className="text-xs mb-1.5 font-mono text-text-muted">
                {b.date}
              </div>
              <div className="font-semibold font-display">
                {b.title}
              </div>
            </Card>
          ))}
        </div>
      </section>
      */}

      <CTABand map quickForm />
    </div>
  );
}
