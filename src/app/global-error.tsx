"use client";

import { useEffect } from "react";
import "./globals.css";

// Fires when the root layout itself fails to render, so it must supply its
// own <html>/<body> and can't assume next/font, images, or other components
// loaded successfully. Kept deliberately minimal for that reason.
export default function GlobalError({
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
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-surface-page text-text-body font-body px-5 py-20">
        <div className="text-center max-w-[480px]">
          <h1 className="text-2xl mb-3">Something went wrong.</h1>
          <p className="text-text-muted mb-8">
            We hit an unexpected error. Please try again, or head back to the
            homepage.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <button
              type="button"
              onClick={retry}
              className="inline-flex items-center justify-center font-semibold cursor-pointer rounded-full px-[22px] py-2.5 text-base bg-brand-primary text-white hover:bg-brand-primary-hover"
            >
              Try Again
            </button>
            <a
              href="/"
              className="inline-flex items-center justify-center font-semibold rounded-full px-[22px] py-2.5 text-base bg-transparent border-2 border-border-default text-text-heading hover:border-brand-primary hover:text-brand-primary hover:no-underline"
            >
              Go to Homepage
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
