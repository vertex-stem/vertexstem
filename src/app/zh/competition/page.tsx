// Chinese (zh-CN) translation, hand-maintained.
// Source: src/app/(en)/competition/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import { CTABand } from "@/components/zh/CTABand";
import { pageMetadataZh } from "@/lib/seo";

export const metadata: Metadata = pageMetadataZh({
  title: "竞赛",
  description:
    "加入 Vertex STEM Education 的竞赛机器人及编程团队，参加 FIRST LEGO League、VEX Robotics 和 ACSL 竞赛。",
  path: "/zh/competition",
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
    eyebrow: "FIRST LEGO League",
    title: "探索",
    navLabel: "FIRST LEGO League 探索",
    logo: IMAGES.exploreLogo,
    photo: IMAGES.exploreGirl,
    accent: "var(--color-mint-500)",
    lead:
      "FIRST LEGO League Explore 是一项动手实践的 STEM 项目，专为 6 至 10 岁的儿童设计。通过使用 LEGO 教育套装的有趣引导项目，向孩子们介绍科学、技术、工程和数学。",
    body:
      "每个赛季，团队都会探索一个现实主题——如太空、自然或交通。他们用 LEGO 积木和简单活动部件搭建模型来展示想法，并制作一张展示海报分享所学。在这个过程中，孩子们在低压力的游戏环境中培养团队合作、解决问题和创造力等重要技能，为未来学习机器人和工程学打下坚实基础。",
    topics: [
      {
        title: "创意搭建与设计思维",
        description:
          "孩子们使用 LEGO SPIKE Essential 将想法变为现实。了解简单机械、传感器和电机如何协同工作。探索工程设计流程：想象、搭建、测试和改进，同时在乐趣中学习。",
      },
      {
        title: "早期编程与逻辑思维",
        description:
          "使用 LEGO 拖拽式编程积木开始学习编程基础。通过动手游戏探索现实世界的科学和技术主题。自信地理解机器人如何遵循指令以及传感器如何检测变化。",
      },
      {
        title: "团队合作与协作",
        description:
          "作为小型互助团队的一员，共同分享想法、解决挑战。学习倾听、合作和为团队目标做贡献。学生们自豪地向教练、家长和评委展示他们的想法和模型。",
      },
    ],
  },
  {
    id: "challenge",
    eyebrow: "FIRST LEGO League",
    title: "挑战",
    navLabel: "FIRST LEGO League 挑战",
    logo: IMAGES.challengeLogo,
    photo: IMAGES.challengeMain,
    accent: "var(--color-coral-500)",
    lead:
      "FIRST LEGO League (FLL) Challenge 是一项机器人竞赛，学生团队搭建和编程 LEGO 机器人来完成主题任务。他们使用积木编程或 Python 来解决问题并协同工作。",
    body:
      "除了机器人，团队还研究相关主题的现实问题，并向评委展示创新解决方案。这种搭建、编程和展示的结合，帮助学生在有趣且富有竞争的环境中学习 STEM 技能、团队合作和沟通。",
    topics: [
      {
        title: "创意问题解决",
        description:
          "孩子们针对主题性现实挑战开发创新解决方案。鼓励独立思考、创造性头脑风暴和实践发明。通过动手试错培养韧性和适应能力。",
      },
      {
        title: "团队合作与沟通",
        description:
          "通过分配角色（搭建者、程序员、研究员、汇报者）练习协作。学习尊重地分享想法、解决冲突并朝着共同目标努力。通过创新项目展示提高公众演讲和演示技巧。",
      },
      {
        title: "竞赛准备与成长心态",
        description:
          "体验 FIRST LEGO League Challenge 的完整周期——从头脑风暴到竞赛日。学习专业精神、毅力和压力下的团队合作价值。庆祝进步，而不仅仅是结果！",
      },
    ],
  },
  {
    id: "vex",
    eyebrow: "VEX IQ",
    title: "机器人竞赛",
    navLabel: "VEX IQ 机器人竞赛",
    logo: IMAGES.vexLogo,
    photo: IMAGES.vexMain,
    accent: "var(--color-skyblue-500)",
    lead:
      "VEX 机器人竞赛（VRC）是一个面向初高中学生的全球机器人项目。团队设计、搭建和编程高级机器人，参与激动人心的现实工程挑战。",
    body:
      "通过竞赛，学生培养解决问题、领导力和技术技能，为未来在 STEM 及其他领域的职业做准备。在 Vertex STEM Edu，我们接纳所有年龄段的学生，培训他们像真正的工程师一样思考——给予他们设计、编程和团队合作技能，以便在竞赛和生活中都表现出色。",
    topics: [],
  },
  {
    id: "acsl",
    eyebrow: "竞赛编程",
    title: "ACSL",
    navLabel: "ACSL",
    logo: IMAGES.acslLogo,
    photo: IMAGES.acslMain,
    accent: "var(--color-blue-500)",
    lead:
      "美国计算机科学联盟（ACSL）是一项国际竞赛，让学生有机会探索课堂之外的真实计算机科学概念。",
    body:
      "通过实践课程和友好竞赛，学生将学习算法、逻辑和编程等主题，同时培养终身受益的问题解决和批判性思维技能。我们的 ACSL 项目逐步引导学生——通过有趣挑战、团队合作和个性化支持，帮助他们为每次竞赛做好准备。这是年轻程序员建立自信、在未来的学术追求中脱颖而出，并发现计算机科学创造性和回报性的绝佳方式。",
    topics: [],
    checks: [
      {
        title: "编程与算法设计",
        description:
          "使用 Python 或 Java 等语言建立坚实的编程基础，同时学习设计高效算法来解决现实问题。",
      },
      {
        title: "逻辑、布尔代数与数字系统",
        description:
          "通过掌握逻辑推理、真值表、二进制、十六进制和其他数据表示系统，探索计算机如何思考。",
      },
      {
        title: "函数、递归与数据结构",
        description:
          "学习将复杂任务分解为小部分，有效使用函数，并理解数组、栈和树等基本结构。",
      },
      {
        title: "问题解决与竞赛技巧",
        description:
          "通过引导练习、模拟挑战和限时问题解决来准备 ACSL 竞赛，提高准确性和自信心。",
      },
      {
        title: "批判性思维与创造力",
        description:
          "加强抽象推理、创造性问题解决和计算思维——这些技能远远超出编程本身。",
      },
    ],
  },
];

const awards = [
  { year: "2019", title: "FLL Challenge 全明星奖", color: "var(--color-yellow-500)" },
  { year: "2021", title: "FLL Challenge 冠军奖——第一名", color: "var(--color-skyblue-500)" },
  { year: "2025", title: "FLL Explore 新星全明星奖", color: "var(--color-mint-500)" },
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
            主题与内容
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
            主题与内容
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
            竞赛团队
          </div>
          <h1 className="text-2xl md:text-4xl m-0 mb-4 leading-[1.05] text-white">
            竞赛。搭建。展示。
          </h1>
          <p className="text-lg opacity-[0.92] m-0 max-w-[620px]">
            探索专为各年龄段学生设计的 STEM 竞赛和项目，在 Vertex STEM Education 培养机器人、编程和问题解决技能。
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
        <h2 className="text-xl md:text-2xl mb-9">获奖历史</h2>
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
        eyebrow="联系我们。"
        heading="联系我们了解具体项目、任何问题，或讨论其他赋能未来的方式！"
        quickForm
        map
      />
    </div>
  );
}
