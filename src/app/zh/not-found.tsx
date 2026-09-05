import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { RingAccent, DotCluster } from "@/components/Accents";

export const metadata: Metadata = {
  title: "页面未找到",
  description: "您访问的页面不存在或已被移动。",
};

export default function NotFound() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute -top-6 -left-10 opacity-40 hidden md:block">
        <RingAccent size={90} color="var(--color-mint-500)" />
      </div>
      <div className="absolute top-24 right-10 opacity-40 hidden md:block">
        <DotCluster color="var(--color-coral-500)" />
      </div>
      <div className="relative max-w-[600px] mx-auto text-center py-20 md:py-32 px-5 md:px-10">
        <div className="font-display text-brand-primary text-[5rem] md:text-[7rem] leading-none mb-2">
          404
        </div>
        <h1 className="text-2xl md:text-3xl mb-3">抱歉，找不到该页面。</h1>
        <p className="text-text-muted mb-8">
          该页面可能已被移动、重命名，或从未存在。让我们带您回到正轨。
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <Button variant="primary" href="/zh">
            返回首页
          </Button>
          <Button variant="outline" href="/zh/programs">
            浏览课程
          </Button>
        </div>
      </div>
    </div>
  );
}
