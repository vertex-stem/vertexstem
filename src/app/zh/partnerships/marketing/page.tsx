// Chinese (zh-CN) translation, hand-maintained.
// Source: src/app/(en)/partnerships/marketing/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { CTABand } from "@/components/zh/CTABand";
import { pageMetadataZh } from "@/lib/seo";

export const metadata: Metadata = pageMetadataZh({
  title: "与我们合作",
  description:
    "探索与 Vertex STEM Education 合作的好处，了解市场营销和合作机会。",
  path: "/zh/partnerships/marketing",
});

const IMAGES = {
  hero: "/images/partnerships-marketing/hero.webp",
  community: "/images/community-connection.svg",
  education: "/images/impactful-education.svg",
  values: "/images/shared-values.svg",
  visibility: "/images/positive-visibility.svg",
};

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

const BENEFITS: Benefit[] = [
  {
    title: "社区连接",
    icon: IMAGES.community,
    description:
      "通过与我们这个受信赖的青少年教育伙伴合作，加强您的组织在社区中的影响力。",
  },
  {
    title: "有影响力的教育",
    icon: IMAGES.education,
    description:
      "支持激发好奇心和创造力的工作坊、竞赛和创新项目。",
  },
  {
    title: "共同价值观",
    icon: IMAGES.values,
    description:
      "激发团队合作、韧性和领导力——这些技能让孩子在 STEM、体育和生活中受益。",
  },
  {
    title: "积极曝光",
    icon: IMAGES.visibility,
    description:
      "作为青少年发展的坚定支持者，在我们的活动、社交媒体和项目材料中获得认可。",
  },
];

interface Opportunity {
  title: string;
  description: string;
}

const OPPORTUNITIES: Opportunity[] = [
  {
    title: "活动与竞赛赞助",
    description:
      "支持青少年机器人和编程竞赛（VEX、FLL、CWSF、CCC），作为创新倡导者获得曝光。",
  },
  {
    title: "包容性倡议",
    description:
      "合作开展针对 STEM 中代表性不足群体的专门项目，如女孩或自闭症青少年，确保每个孩子都有机会闪耀。",
  },
  {
    title: "社区工作坊",
    description:
      "与我们一起共同赞助或举办面向学校、图书馆或社区中心的 STEM 工作坊，扩大对更多家庭的影响力。",
  },
  {
    title: "企业社会责任（CSR）项目",
    description:
      "将您的品牌与教育、创新和社区发展相结合。从资助奖学金到赞助活动，我们将共同打造符合您 CSR 目标的机会。",
  },
];

export default function PartnershipMarketingPage() {
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
            与我们合作
          </div>
          <h1 className="text-2xl md:text-4xl m-0 mb-4 leading-[1.05] text-white">
            合作营销
          </h1>
          <p className="text-lg opacity-[0.92] m-0 max-w-[620px]">
            与 Vertex STEM Edu 合作，就是投资一个每个孩子都有机会学习、创新和引领的未来。
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 md:py-16 px-5 md:px-10 max-w-[900px] mx-auto text-center">
        <p className="text-lg leading-relaxed m-0 mb-4 text-text-heading">
          在 Vertex STEM Edu，我们相信培养下一代创新者需要整个社区的力量。通过将动手实践的 STEM 教育与强大的合作伙伴关系相结合，我们为青少年创造探索机器人、编程、工程和创造性解决问题的宝贵机会。
        </p>
        <p className="text-base leading-relaxed m-0 mb-8 text-text-body">
          我们诚邀学校、组织、非营利机构和企业与我们携手，共同铺就每个孩子都能茁壮成长的道路。
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <Button variant="primary" href="/zh/contact">
            联系我们
          </Button>
          <Button variant="outline" href="/zh/contact">
            获取信息
          </Button>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-12 md:py-16 px-5 md:px-10 bg-slate-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-xl md:text-2xl mb-12 md:mb-20 text-center">
            为什么与 Vertex STEM Edu 合作？
          </h2>
          <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-[20px] p-6 shadow-sm border border-slate-200 flex flex-col gap-3"
              >
                <div className="relative w-32 h-32 md:w-50 md:h-50 mx-auto">
                  <Image
                    src={b.icon}
                    alt={b.title}
                    fill
                    sizes="128px"
                    className="object-contain rounded-full"
                  />
                </div>
                <h3 className="text-md m-0 font-display">
                  {b.title}
                </h3>
                <p className="m-0 text-sm leading-relaxed text-text-body">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-12 md:py-16 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-xl md:text-2xl mb-9 text-center">
            合作机会
          </h2>
          <div className="mt-10 flex flex-col gap-6">
            {OPPORTUNITIES.map((o) => (
              <div
                key={o.title}
                className="grid gap-3.5 items-start"
                style={{ gridTemplateColumns: "28px 1fr" }}
              >
                <div className="font-bold text-lg leading-[1.3] text-mint-500">
                  &#10004;
                </div>
                <div>
                  <div className="font-semibold text-base mb-1 font-display">
                    {o.title}
                  </div>
                  <div className="text-sm leading-relaxed text-text-body">
                    {o.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand quickForm map />
    </div>
  );
}
