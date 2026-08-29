// Chinese (zh-CN) translation, hand-maintained.
// Source: src/app/(en)/contact/page.tsx

import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Input, Textarea, Select, Checkbox } from "@/components/FormElements";
import { InteractiveForm } from "@/components/InteractiveForm";
import { CTABand } from "@/components/zh/CTABand";
import { ORG_ADDRESS, ORG_EMAIL, ORG_PHONE } from "@/lib/orgInfo";
import { pageMetadataZh } from "@/lib/seo";

export const metadata: Metadata = pageMetadataZh({
  title: "联系我们",
  description:
    "我们非常乐意收到您的来信——请给我们留言，告诉我们有关项目、夏令营或合作关系的信息。",
  path: "/zh/contact",
});

export default function ContactPage() {
  return (
    <div className="font-body">
      <div className="max-w-[640px] mx-auto py-10 md:py-14 px-5 md:px-10">
        <h1 className="text-[2rem] md:text-3xl mb-2.5">联系我们吧。</h1>
        <p className="mb-7 text-text-muted">
          我们非常乐意收到您的来信——请给我们留言，告诉我们有关项目、夏令营或合作关系的信息。
        </p>

        <InteractiveForm
          successMessage="您的申请已发送！我们会尽快与您联系。"
          errorMessage="发送信息时出现问题，请重试或直接给我们发邮件。"
          dismissLabel="关闭"
        >
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
          />
          <Input label="父母姓名" name="name" placeholder="王小明" required />
          <Input
            label="电子邮件"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />
          <Select
            label="您感兴趣的项目"
            name="interest"
            options={[
              "STEM与编程",
              "夏令营",
              "竞赛",
              "合作伙伴",
            ]}
          />
          <Textarea
            label="信息"
            name="message"
            placeholder="请告诉我们您在寻找什么……"
          />
          <Checkbox label="向我发送课程动态" name="updates" checked />
          <Button variant="primary">索取信息</Button>
        </InteractiveForm>

        <div className="mt-10 p-6 rounded-[20px] text-sm leading-relaxed bg-slate-50 text-text-body">
          <strong>地址与联系方式</strong>
          <br />
          {ORG_ADDRESS}
          <br />
          {ORG_PHONE}
          <br />
          {ORG_EMAIL}
        </div>
      </div>

      <CTABand
        heading="想先探索一下吗？"
        subtext="在联系我们之前，请浏览我们的 STEM 和编程课程或查看今年夏令营的活动安排。"
        primaryLabel="查看课程"
        primaryHref="/zh/programs"
        secondaryLabel="查看营地"
        secondaryHref="/zh/camp"
      />
    </div>
  );
}
