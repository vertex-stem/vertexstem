"use client";

import { useId, useState, ReactNode } from "react";

interface FaqItemProps {
  question: string;
  answer: ReactNode;
}

export function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="bg-white border border-slate-200 rounded-[14px] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full text-left bg-none border-none cursor-pointer px-[22px] py-[18px] flex justify-between items-center gap-4 font-semibold text-base font-display text-text-heading"
      >
        {question}
        <span
          aria-hidden="true"
          className="text-xl leading-none transition-transform duration-300 ease-in-out text-brand-secondary"
          style={{
            transform: open ? "rotate(45deg)" : "none",
          }}
        >
          +
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div
            id={panelId}
            aria-hidden={!open}
            className="px-[22px] pb-5 text-base leading-relaxed transition-opacity duration-300 ease-in-out text-text-body"
            style={{ opacity: open ? 1 : 0 }}
          >
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
