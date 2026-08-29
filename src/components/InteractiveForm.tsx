"use client";

import { FormEvent, ReactNode, useState } from "react";
import { Toast } from "@/components/FormElements";

interface InteractiveFormProps {
  successMessage: string;
  errorMessage?: string;
  dismissLabel?: string;
  endpoint?: string;
  children: ReactNode;
}

type Status = "idle" | "submitting" | "success" | "error";

export function InteractiveForm({
  successMessage,
  errorMessage = "Something went wrong sending your message. Please try again or email us directly.",
  dismissLabel,
  endpoint = "/api/contact",
  children,
}: InteractiveFormProps) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");

    try {
      const data = Object.fromEntries(new FormData(form).entries());
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Request failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {status === "success" && (
        <div className="mb-5">
          <Toast
            tone="success"
            message={successMessage}
            onClose={() => setStatus("idle")}
            dismissLabel={dismissLabel}
          />
        </div>
      )}
      {status === "error" && (
        <div className="mb-5">
          <Toast
            tone="error"
            message={errorMessage}
            onClose={() => setStatus("idle")}
            dismissLabel={dismissLabel}
          />
        </div>
      )}
      <form
        className="flex flex-col gap-[18px]"
        onSubmit={handleSubmit}
        suppressHydrationWarning
      >
        <fieldset
          disabled={status === "submitting"}
          style={{ display: "contents" }}
        >
          {children}
        </fieldset>
      </form>
    </>
  );
}
