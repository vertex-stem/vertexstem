import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { CTABand } from "@/components/CTABand";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Partnerships",
  description:
    "See how Vertex STEM Education partners with schools, community organizations, and local groups to expand access to STEM education.",
  path: "/partnerships",
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
    eyebrow: "Inclusion Partner",
    title: "Autism Ontario",
    accent: "var(--color-mint-500)",
    photo: IMAGES.autismCentre,
    logos: [IMAGES.autismLogo],
    overlayLogo: true,
    lead:
      "At Vertex STEM Edu, we believe STEM education should be accessible, inclusive, and inspiring for every child. That's why we are excited to partner with Autism Ontario to deliver specialized STEM workshops for autistic children across our community.",
    body: "Through hands-on robotics, coding, and creative science projects, these workshops are designed to help every child explore, connect, and grow.",
    points: [
      {
        title: "Curiosity & Creativity",
        description:
          "Foster curiosity and creativity in a safe, supportive environment built around each child's pace and comfort.",
      },
      {
        title: "Confidence Through Play",
        description:
          "Build problem-solving, collaboration, and confidence through hands-on play and guided discovery.",
      },
      {
        title: "Family Engagement",
        description:
          "Provide families with enriching opportunities for engagement and community connection.",
      },
    ],
    closing:
      "Our partnership reflects our shared commitment to equity, inclusion, and empowerment. Just as on the playing field or in competition, every child deserves the chance to explore their potential and shine. By working together with Autism Ontario, we hope to open new doors for autistic children—helping them not only learn STEM skills, but also gain confidence, friendships, and a sense of belonging.",
  },
  {
    id: "north-york-baseball",
    eyebrow: "Community Sponsorship",
    title: "North York Baseball Association",
    accent: "var(--color-skyblue-500)",
    photo: IMAGES.baseball,
    logos: [],
    lead:
      "Exclusive sponsor supporting young athletes who achieved remarkable success this season—finishing 2nd in the Toronto Baseball Association playoffs and advancing to the Ontario Baseball Association finals.",
    body: "With grit and determination, the Blues finished 2nd place in the Toronto Baseball Association (TBA) playoffs and advanced to the prestigious Ontario Baseball Association (OBA) finals. Their success on the diamond is a testament to discipline, resilience, and the drive for excellence.",
    closing:
      "Our sponsorship reflects more than just support for a team—it demonstrates our ongoing commitment to community involvement, youth development, and inspiring the next generation both on and off the field. Just as we nurture innovation and leadership through robotics, coding, and science programs in our classrooms, we are equally proud to stand behind young athletes as they chase their dreams.",
  },
  {
    id: "lancebotics",
    eyebrow: "VEX Robotics Team",
    title: "Lancebotics",
    accent: "var(--color-coral-500)",
    photo: IMAGES.lancebotics,
    logos: [IMAGES.leesideLogo, IMAGES.vrcLogo],
    lead:
      "Sponsoring and collaborating with the local high school VEX robotics team, Lancebotics, provides a valuable opportunity to support youth engagement in science, technology, engineering, and mathematics (STEM).",
    body: "Through this partnership, resources and expertise can be shared to enhance the team's learning experience and competitive success. By offering mentorship, equipment, and financial support, the collaboration fosters innovation, teamwork, and technical skills among students.",
    closing:
      "This involvement also strengthens community ties and promotes a positive environment for future STEM leaders to grow and excel.",
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
            Partnerships
          </div>
          <h1 className="text-2xl md:text-4xl m-0 mb-4 leading-[1.05] text-white">
            Existing Partners
          </h1>
          <p className="text-lg opacity-[0.92] m-0 max-w-[620px]">
            At Vertex STEM Edu, we are committed to giving back and building
            strong community connections. We create opportunities for young
            people to learn, grow, and shine. Each collaboration reflects our
            belief in accessibility, inclusion, and empowering the next
            generation to thrive.
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
              Gallery
            </div>
            <h2 className="text-xl md:text-2xl mb-1">Community in Action</h2>
            <p className="text-base max-w-[620px] mx-auto text-text-muted">
              Moments from our workshops, events, and partner programs across the community.
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
        <h2 className="text-xl md:text-2xl mb-3">Interested in partnering with us?</h2>
        <p className="text-base mb-7 max-w-[620px] mx-auto text-text-body">
          Learn more about the ways your organization can align with our
          mission on our partnership marketing page.
        </p>
        <Button variant="primary" href="/partnerships/marketing">
          Partnership Marketing
        </Button>
      </section>

      <CTABand quickForm map />
    </div>
  );
}
