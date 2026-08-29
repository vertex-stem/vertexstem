"use client";

import { useId, useState } from "react";

interface InputProps {
  label: string;
  name?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

export function Input({ label, name, type = "text", placeholder, required }: InputProps) {
  const id = useId();
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-sm font-semibold font-display text-text-heading"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="px-4 py-3 rounded-lg border border-slate-300 text-base outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 bg-white disabled:opacity-60 font-body text-text-body"
        suppressHydrationWarning
      />
    </div>
  );
}

interface TextareaProps {
  label: string;
  name?: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
}

export function Textarea({ label, name, placeholder, rows = 4, required }: TextareaProps) {
  const id = useId();
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-sm font-semibold font-display text-text-heading"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className="px-4 py-3 rounded-lg border border-slate-300 text-base outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 bg-white resize-none disabled:opacity-60 font-body text-text-body"
        suppressHydrationWarning
      />
    </div>
  );
}

interface SelectProps {
  label: string;
  name?: string;
  options: string[];
}

export function Select({ label, name, options }: SelectProps) {
  const id = useId();
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-sm font-semibold font-display text-text-heading"
      >
        {label}
      </label>
      <select
        id={id}
        name={name}
        className="px-4 py-3 rounded-lg border border-slate-300 text-base outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 bg-white disabled:opacity-60 font-body text-text-body"
        suppressHydrationWarning
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

interface CheckboxProps {
  label: string;
  name?: string;
  checked?: boolean;
}

export function Checkbox({ label, name, checked }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked ?? false);
  return (
    <label
      className="flex items-center gap-2.5 cursor-pointer text-sm text-text-body"
    >
      <input
        type="checkbox"
        name={name}
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
        className="w-4 h-4 accent-blue-500"
        suppressHydrationWarning
      />
      {label}
    </label>
  );
}

interface ToastProps {
  tone: "success" | "error";
  message: string;
  onClose: () => void;
  dismissLabel?: string;
}

export function Toast({ tone, message, onClose, dismissLabel = "Dismiss" }: ToastProps) {
  return (
    <div
      role={tone === "error" ? "alert" : "status"}
      aria-live={tone === "error" ? "assertive" : "polite"}
      className="flex items-center justify-between gap-3 px-4 py-3.5 rounded-lg text-sm font-body"
      style={{
        background:
          tone === "success"
            ? "var(--color-green-100)"
            : "var(--color-red-100)",
        color:
          tone === "success"
            ? "var(--color-green-500)"
            : "var(--color-red-500)",
      }}
    >
      <span>{message}</span>
      <button
        onClick={onClose}
        aria-label={dismissLabel}
        className="bg-none border-none cursor-pointer text-lg leading-none"
        style={{ color: "inherit" }}
      >
        &times;
      </button>
    </div>
  );
}
