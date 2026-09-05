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
        Oops
      </div>
      <h1 className="text-2xl md:text-3xl mb-3">Something went wrong.</h1>
      <p className="text-text-muted mb-8">
        We hit an unexpected error loading this page. Please try again, or
        head back to the homepage.
      </p>
      <div className="flex gap-3.5 justify-center flex-wrap">
        <Button type="button" variant="primary" onClick={retry}>
          Try Again
        </Button>
        <Button variant="outline" href="/">
          Go to Homepage
        </Button>
      </div>
    </div>
  );
}
