// Chinese (zh-CN) translation, hand-maintained.
// Source: src/app/(en)/partnerships/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { CTABand } from "@/components/zh/CTABand";
import { pageMetadataZh } from "@/lib/seo";

export const metadata: Metadata = pageMetadataZh({
  title: "合作关系",
  description:
    "了解 Vertex STEM Education 如何与学校、社区组织及本地团体合作，扩大 STEM 教育的覆盖面。",
  path: "/zh/partnerships",
});

const IMAGES = {
  autismLogo: "/images/partnerships/autism-logo.webp",
  autismCentre: "/images/partnerships/autism-centre.webp",
  autism1: "/images/partnerships/autism5.webp",
  autism2: "/images/partnerships/autism2.webp",
  autism3: "/images/partnerships/autism3.webp",
  autism4: "/images/partnerships/autism4.webp",
  autism5: "/images/partnerships/autism5.webp",
  baseball: "/images/partnerships/baseball.webp",
  leesideLogo: "/images/partnerships/leeside-logo.webp",
  vrcLogo: "/images/partnerships/vrc-logo.webp",
  lancebotics: "/images/partnerships/lancebotics.webp",
};

interface Point {
  title: string;
  description: string;
}

interface Partner {
  id: string;
  eyebrow: string;
  title: string;
  accent: string;
  photo: string;
  logos: string[];
  /** Show the logo centered over the media image instead of above the text. */
  overlayLogo?: boolean;
  lead: string;
  body: string;
  points?: Point[];
  closing?: string;
}

const PARTNERS: Partner[] = [
  {
    id: "autism-ontario",
    eyebrow: "包容性合作伙伴",
    title: "安大略自闭症协会",
    accent: "var(--color-mint-500)",
    photo: IMAGES.autismCentre,
    logos: [IMAGES.autismLogo],
    overlayLogo: true,
    lead:
      "在 Vertex STEM Edu，我们坚信 STEM 教育应当惠及每一个孩子，做到普及、包容且鼓舞人心。因此，我们非常荣幸能与安大略自闭症协会合作，为社区中的自闭症儿童带来量身定制的 STEM 工作坊。",
    body: "通过动手操作的机器人、编程和创意科学项目，这些工作坊旨在帮助每个孩子探索、联系与成长。",
    points: [
      {
        title: "好奇心与创造力",
        description:
          "在安全、支持性的环境中，根据每个孩子的节奏和舒适度，培养他们的好奇心与创造力。",
      },
      {
        title: "在玩耍中建立自信",
        description:
          "通过动手实践和引导式探索，培养解决问题的能力、合作精神与自信心。",
      },
      {
        title: "家庭参与",
        description:
          "为家庭提供丰富的参与和社区联系机会。",
      },
    ],
    closing:
      "我们的合作体现了我们对公平、包容和赋能的共同承诺。无论是在运动场上还是在竞赛中，每个孩子都值得有机会探索自己的潜力并闪耀光芒。通过与安大略自闭症协会的合作，我们希望为自闭症儿童打开新的大门——不仅帮助他们学习 STEM 技能，还能获得自信、友谊和归属感。",
  },
  {
    id: "north-york-baseball",
    eyebrow: "社区赞助",
    title: "北约克棒球协会",
    accent: "var(--color-skyblue-500)",
    photo: IMAGES.baseball,
    logos: [],
    lead:
      "作为独家赞助商，我们支持本赛季取得优异成绩的年轻运动员——他们在多伦多棒球协会季后赛中获得第二名，并晋级安大略棒球协会决赛。",
    body: "凭借坚韧和决心，蓝队在多伦多棒球协会（TBA）季后赛中获得第二名，并晋级备受瞩目的安大略棒球协会（OBA）决赛。他们在球场上的成功证明了纪律、韧性和追求卓越的精神。",
    closing:
      "我们的赞助不仅仅是对一支球队的支持，更体现了我们持续参与社区、促进青少年发展并激励下一代在场内外不断进取的承诺。正如我们在课堂上通过机器人、编程和科学项目培养创新和领导力一样，我们同样为支持年轻运动员追逐梦想而感到自豪。",
  },
  {
    id: "lancebotics",
    eyebrow: "VEX 机器人队",
    title: "Lancebotics",
    accent: "var(--color-coral-500)",
    photo: IMAGES.lancebotics,
    logos: [IMAGES.leesideLogo, IMAGES.vrcLogo],
    lead:
      "赞助并与当地高中 VEX 机器人队 Lancebotics 合作，为支持青少年参与科学、技术、工程和数学（STEM）领域提供了宝贵的机会。",
    body: "通过这一合作，我们可以共享资源和专业知识，提升团队的学习体验和竞赛成绩。通过提供指导、设备和资金支持，这种合作促进了学生的创新、团队合作和技术技能。",
    closing:
      "这种参与还加强了社区联系，为未来的 STEM 领袖创造了积极的成长和发展环境。",
  },
];

const gallery = [
  IMAGES.autism1,
  IMAGES.autism2,
  IMAGES.autism3,
  IMAGES.autism4,
  IMAGES.autism5,
];

function PartnerBand({ p, index }: { p: Partner; index: number }) {
  const flip = index % 2 === 1;

  const media = (
    <div
      key="media"
      className={`relative min-h-[300px] md:min-h-[440px] md:row-start-1 ${flip ? "md:col-start-2" : "md:col-start-1"}`}
    >
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${p.photo})` }}
      />
      {p.overlayLogo && p.logos.length > 0 && (
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="relative h-20 w-[264px] max-w-full rounded-xl bg-white/95 shadow-lg">
            <Image
              src={p.logos[0]}
              alt={p.title}
              fill
              sizes="264px"
              className="object-contain p-3.5"
            />
          </div>
        </div>
      )}
      <div
        className={`absolute top-0 bottom-0 ${flip ? "right-0" : "left-0"}`}
        style={{ width: "6px", background: p.accent }}
      />
    </div>
  );

  const content = (
    <div
      key="content"
      className={`py-10 px-5 md:py-14 md:px-14 flex flex-col gap-4 justify-center bg-white md:row-start-1 ${flip ? "md:col-start-1" : "md:col-start-2"}`}
    >
      {p.logos.length > 0 && !p.overlayLogo && (
        <div className="flex items-center gap-4 mb-1">
          {p.logos.map((logo) => (
            <div key={logo} className="relative h-[52px] w-[140px]">
              <Image
                src={logo}
                alt={p.title}
                fill
                sizes="140px"
                className="object-contain object-left"
              />
            </div>
          ))}
        </div>
      )}
      <div
        className="text-xs uppercase tracking-wider font-mono"
        style={{ color: p.accent }}
      >
        {p.eyebrow}
      </div>
      <h2 className="text-2xl m-0">{p.title}</h2>
      <p className="m-0 text-lg leading-relaxed font-medium text-text-heading">
        {p.lead}
      </p>
      <p className="m-0 text-base leading-relaxed text-text-body">
        {p.body}
      </p>

      {p.points && (
        <div className="mt-3 flex flex-col gap-[18px]">
          {p.points.map((pt, i) => (
            <div
              key={pt.title}
              className="grid gap-3.5 items-start"
              style={{ gridTemplateColumns: "40px 1fr" }}
            >
              <div
                className="w-[34px] h-[34px] rounded-full text-white flex items-center justify-center font-bold text-sm font-display"
                style={{ background: p.accent }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <div className="font-semibold text-base mb-1 font-display">
                  {pt.title}
                </div>
                <div className="text-sm leading-relaxed text-text-body">
                  {pt.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {p.closing && (
        <p className="m-0 mt-2 text-base leading-relaxed italic text-text-body">
          {p.closing}
        </p>
      )}
    </div>
  );

  return (
    <section
      id={p.id}
      className="grid rounded-[28px] overflow-hidden shadow-lg border border-slate-200 grid-cols-1 md:grid-cols-2"
    >
      {flip ? [content, media] : [media, content]}
    </section>
  );
}

export default function PartnershipsPage() {
  return (
    <div className="font-body">
      {/* Hero */}
      <section
        className="relative min-h-[300px] md:min-h-[460px] flex items-end text-white py-12 md:py-16 px-5 md:px-14 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(29,30,69,0.55),rgba(29,30,69,0.9)), url(${IMAGES.lancebotics})`,
        }}
      >
        <div className="max-w-[760px]">
          <div className="text-xs uppercase tracking-wider mb-3 font-mono text-yellow-400">
            合作伙伴
          </div>
          <h1 className="text-2xl md:text-4xl m-0 mb-4 leading-[1.05] text-white">
            现有合作伙伴
          </h1>
          <p className="text-lg opacity-[0.92] m-0 max-w-[620px]">
            在 Vertex STEM Edu，我们致力于回馈社会，建立强大的社区联系。我们为年轻人创造学习、成长和闪耀的机会。每一次合作都体现了我们对可及性、包容性以及赋能下一代茁壮成长的信念。
          </p>
        </div>
      </section>

      {/* Partner Bands */}
      <section className="py-12 md:py-20 px-5 md:px-10 bg-slate-50">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-14">
          {PARTNERS.map((p, i) => (
            <PartnerBand key={p.id} p={p} index={i} />
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 md:py-20 px-5 md:px-10 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-5">
            <div className="text-xs uppercase tracking-wider mb-3 font-mono text-mint-500">
              画廊
            </div>
            <h2 className="text-xl md:text-2xl mb-1">社区在行动</h2>
            <p className="text-base max-w-[620px] mx-auto text-text-muted">
              我们工作坊、活动及社区合作伙伴项目中的精彩瞬间。
            </p>
          </div>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
            {gallery.map((src, i) => (
              <div
                key={i}
                className="h-[160px] md:h-[200px] rounded-[18px] shadow-sm bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${src})` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Interested in partnering CTA */}
      <section className="py-12 md:py-20 px-5 md:px-10 bg-slate-50 text-center">
        <h2 className="text-xl md:text-2xl mb-3">有兴趣与我们合作吗？</h2>
        <p className="text-base mb-7 max-w-[620px] mx-auto text-text-body">
          了解您的组织如何与我们的使命相契合，请访问我们的合作伙伴营销页面。
        </p>
        <Button variant="primary" href="/zh/partnerships/marketing">
          合作伙伴营销
        </Button>
      </section>

      <CTABand quickForm map />
    </div>
  );
}
