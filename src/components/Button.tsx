import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: "sm" | "md";
  inverse?: boolean;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
}

const baseClasses =
  "inline-flex items-center justify-center font-semibold cursor-pointer transition-colors rounded-full [font-family:var(--font-display)] disabled:opacity-60 disabled:cursor-not-allowed";
const sizeClasses = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-[22px] py-2.5 text-base",
};
const variantClasses: Record<string, string> = {
  "primary-default": "bg-brand-primary text-white hover:bg-brand-primary-hover",
  "primary-inverse": "bg-white text-blue-900 hover:bg-slate-100",
  "secondary-default":
    "bg-brand-secondary text-white hover:bg-brand-secondary-hover",
  "secondary-inverse":
    "bg-brand-secondary text-white hover:bg-brand-secondary-hover",
  "outline-default":
    "bg-transparent border-2 border-border-default text-text-heading hover:border-brand-primary hover:text-brand-primary",
  "outline-inverse":
    "bg-transparent border-2 border-white/50 text-white hover:border-white hover:bg-white/10",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  inverse,
  onClick,
  href,
  type = "submit",
}: ButtonProps) {
  const variantClass =
    variantClasses[`${variant}-${inverse ? "inverse" : "default"}`];
  const className = `${baseClasses} ${sizeClasses[size]} ${variantClass}`;

  if (href) {
    return (
      <Link href={href} className={`${className} hover:no-underline`}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}
