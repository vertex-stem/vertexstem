import type { Metadata } from "next";
import { Badge } from "@/components/Badge";
import { FaqItem } from "@/components/FaqItem";
import { CTABand } from "@/components/CTABand";
import { DuoStack, RingAccent } from "@/components/Accents";
import { pageMetadata } from "@/lib/seo";
import { ProgramsExplorer } from "./ProgramsExplorer";

export const metadata: Metadata = pageMetadata({
  title: "STEM & Coding Programs",
  description:
    "Explore our STEM and coding programs including robotics, electronics, and 3D printing to develop critical skills in a hands-on, engaging environment.",
  path: "/programs",
});

const IMAGES = {
  hero: "/images/programs/hero.webp",
};

const FAQS = [
  {
    id: "explorer-vs-challenger",
    question: "What is the difference between LEGO Robotics Explorer and Robotics Challenger?",
    answer:
      "LEGO Robotics Explorer is designed for younger students and beginners, focusing on foundational engineering concepts, simple sensors, and block-based programming. Robotics Challenger is more advanced, introducing gear ratios, torque, navigation, and modular coding to challenge older students with complex robotics projects.",
  },
  {
    id: "prior-experience-required",
    question: "Do students need prior experience before joining Arduino or electronics workshops?",
    answer:
      "No experience is required! Our Arduino and electronics programs start with the basics of circuits and coding, then gradually build toward real-world projects like smart lighting, alarm systems, and home automation.",
  },
  {
    id: "3d-printing-skills",
    question: "What skills will students gain from 3D printing workshops?",
    answer:
      "Students learn 3D modeling, design thinking, and how to bring digital ideas into physical reality. They'll gain hands-on experience with CAD software, prototyping, and troubleshooting—skills that connect creativity with engineering.",
  },
  {
    id: "coding-in-robotics",
    question: "How does coding fit into robotics and electronics programs?",
    answer:
      "Coding is the backbone of our projects. Students learn to program robots, microcontrollers, and sensors in languages like Python, C++, or Scratch-based environments, strengthening problem-solving and logical thinking.",
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
          <Badge color="sunny">STEM & Coding</Badge>
          <h1 className="text-2xl md:text-3xl my-4 leading-tight text-white">
            Learn STEM Today
          </h1>
          <p className="text-lg opacity-[0.92] max-w-[520px] m-0">
            Explore our STEM and coding programs including robotics, electronics,
            and 3D printing to develop critical skills in a hands-on, engaging
            environment.
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
          <h2 className="text-xl md:text-2xl mb-6">FAQs</h2>
          <div className="mt-6 flex flex-col gap-3">
            {FAQS.map((f) => (
              <FaqItem key={f.id} question={f.question} answer={f.answer} />
            ))}
          </div>
        </div>
      </section>

      <CTABand
        bg="coral"
        eyebrow="Let's get in touch."
        heading="Contact us about specific programs, any questions you might have, or to discuss other ways we can empower the future!"
        quickForm
        map
      />
    </div>
  );
}
