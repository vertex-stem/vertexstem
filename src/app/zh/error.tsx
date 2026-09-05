"use client";

import { useEffect } from "react";
import { Button } from "@/components/Button";

export default function ErrorPage({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-[600px] mx-auto text-center py-20 md:py-32 px-5 md:px-10">
      <div className="font-display text-brand-secondary text-[3.5rem] md:text-[4.5rem] leading-none mb-2">
        出错了
      </div>
      <h1 className="text-2xl md:text-3xl mb-3">出现了一些问题。</h1>
      <p className="text-text-muted mb-8">
        加载此页面时遇到意外错误。请重试，或返回首页。
      </p>
      <div className="flex gap-3.5 justify-center flex-wrap">
        <Button type="button" variant="primary" onClick={retry}>
          重试
        </Button>
        <Button variant="outline" href="/zh">
          返回首页
        </Button>
      </div>
    </div>
  );
}
