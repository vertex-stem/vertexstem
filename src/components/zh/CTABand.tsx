// Chinese (zh-CN) translation, hand-maintained.
// Source: src/components/CTABand.tsx

"use client";

import { Button } from "../Button";
import { Input, Select, Textarea } from "../FormElements";
import { InteractiveForm } from "../InteractiveForm";
import { ORG_MAP_EMBED_SRC } from "@/lib/orgInfo";

interface FormLabels {
  name: string;
  namePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  programInterest: string;
  programOptions: string[];
  message: string;
  messagePlaceholder: string;
  submit: string;
  successMessage: string;
  errorMessage: string;
  dismissLabel: string;
}

const defaultFormLabels: FormLabels = {
  name: "姓名",
  namePlaceholder: "简·多伊",
  email: "电子邮件",
  emailPlaceholder: "you@example.com",
  programInterest: "感兴趣的课程",
  programOptions: ["STEM与编程", "夏令营", "竞赛", "合作伙伴", "其他"],
  message: "信息",
  messagePlaceholder: "请告诉我们您在寻找什么……",
  submit: "发送消息",
  successMessage: "谢谢！我们会尽快与您联系。",
  errorMessage: "发送信息时出现问题，请重试或直接给我们发邮件。",
  dismissLabel: "关闭",
};

interface CTABandProps {
  map?: boolean;
  quickForm?: boolean;
  bg?: "blue" | "coral";
  eyebrow?: string;
  heading?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  formLabels?: FormLabels;
}

export function CTABand({
  map = false,
  quickForm = false,
  bg = "blue",
  eyebrow,
  heading = "我们联系一下吧。",
  subtext = "我们非常乐意收到您的来信——请给我们留言，告诉我们有关项目、夏令营或合作关系的信息。",
  primaryLabel = "索取信息",
  primaryHref = "/zh/contact",
  secondaryLabel = "查看课程",
  secondaryHref = "/zh/programs",
  formLabels = defaultFormLabels,
}: CTABandProps) {
  const isCoral = bg === "coral";

  return (
    <section
      className={`${isCoral ? "bg-coral-500" : "bg-blue-900"} text-white py-10 md:py-14 px-5 md:px-10 relative overflow-hidden`}
      style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}
    >
      {!isCoral && (
        <div className="absolute left-[-40px] bottom-[-60px] w-[200px] h-[200px] rounded-full opacity-5 bg-white" />
      )}
      <div
        className={
          quickForm
            ? "grid gap-6 md:gap-10 relative items-stretch max-w-[1200px] mx-auto grid-cols-1 md:grid-cols-2"
            : "flex justify-between items-center flex-wrap gap-6 relative"
        }
      >
        <div
          className={
            quickForm
              ? "relative pt-2 flex flex-col"
              : `relative ${eyebrow ? "max-w-[620px]" : "max-w-[520px]"}`
          }
        >
          {eyebrow && (
            <div className="text-xs opacity-85 mb-1.5 uppercase tracking-wider font-mono">
              {eyebrow}
            </div>
          )}
          <h2
            className={`text-xl mb-2 text-white ${eyebrow ? "font-body" : "font-display"}`}
          >
            {heading}
          </h2>
          {!eyebrow && (
            <p className="opacity-85 m-0 text-base max-w-[440px]">{subtext}</p>
          )}
          {map && (
            <div
              className="relative mt-6 rounded-[20px] overflow-hidden flex-1 min-h-[220px] shadow-lg"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <iframe
                src={ORG_MAP_EMBED_SRC}
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vertex STEM Education 位置"
                suppressHydrationWarning
              />
            </div>
          )}
        </div>
        {quickForm ? (
          <div className="relative bg-white rounded-[20px] p-6 shadow-lg text-text-body">
            <InteractiveForm
              successMessage={formLabels.successMessage}
              errorMessage={formLabels.errorMessage}
              dismissLabel={formLabels.dismissLabel}
            >
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
              />
              <div className="flex flex-col gap-3.5">
                <Input
                  label={formLabels.name}
                  name="name"
                  placeholder={formLabels.namePlaceholder}
                  required
                />
                <Input
                  label={formLabels.email}
                  name="email"
                  type="email"
                  placeholder={formLabels.emailPlaceholder}
                  required
                />
                <Select
                  label={formLabels.programInterest}
                  name="interest"
                  options={formLabels.programOptions}
                />
                <Textarea
                  label={formLabels.message}
                  name="message"
                  placeholder={formLabels.messagePlaceholder}
                  rows={3}
                />
                <Button variant="primary">{formLabels.submit}</Button>
              </div>
            </InteractiveForm>
          </div>
        ) : (
          <div className="flex gap-3.5 relative flex-wrap">
            <Button variant={isCoral ? "primary" : "secondary"} href={primaryHref}>
              {primaryLabel}
            </Button>
            {secondaryLabel && (
              <Button variant="outline" inverse href={secondaryHref}>
                {secondaryLabel}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
