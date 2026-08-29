"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";

interface CountUpStatProps {
  value: string;
  className?: string;
  style?: CSSProperties;
}

const STAT_PATTERN = /^(\D*)(\d+)(.*)$/;

export function CountUpStat({ value, className, style }: CountUpStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(() => {
    const match = value.match(STAT_PATTERN);
    return match ? `${match[1]}0${match[3]}` : value;
  });

  useEffect(() => {
    const match = value.match(STAT_PATTERN);
    const node = ref.current;
    if (!match || !node) return;

    const [, prefix, digits, suffix] = match;
    const target = parseInt(digits, 10);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationFrame: number;

    const animate = () => {
      if (reduceMotion) {
        setDisplay(value);
        return;
      }

      const duration = 1200;
      const startTime = performance.now();

      const step = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(`${prefix}${Math.round(eased * target)}${suffix}`);
        if (progress < 1) animationFrame = requestAnimationFrame(step);
      };
      animationFrame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [value]);

  return (
    <div ref={ref} className={className} style={style}>
      {display}
    </div>
  );
}
