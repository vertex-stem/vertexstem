"use client";

import { useRef, useState, CSSProperties, KeyboardEvent } from "react";
import Image from "next/image";

export const accentColorVar = (accent: string) => {
  if (accent === "coral") return "var(--color-coral-500)";
  if (accent === "mint") return "var(--color-mint-500)";
  return "var(--color-blue-500)";
};

export const accentTintVar = (accent: string) => {
  if (accent === "coral") return "var(--color-coral-100)";
  if (accent === "mint") return "var(--color-mint-100)";
  return "var(--color-blue-100)";
};

interface CategoryTabsItem {
  id: string;
  name: string;
  accent: string;
  photo: string;
}

interface CategoryTabsProps<T extends CategoryTabsItem> {
  categories: T[];
  activeId: string;
  onChange: (id: string) => void;
  countLabel: (category: T) => string;
  photoFallbackLabel?: (name: string) => string;
  tablistLabel?: string;
}

export const categoryTabId = (id: string) => `tab-${id}`;
export const categoryPanelId = (id: string) => `panel-${id}`;

export function CategoryTabs<T extends CategoryTabsItem>({
  categories,
  activeId,
  onChange,
  countLabel,
  photoFallbackLabel = (name) => `${name} photo`,
  tablistLabel = "Categories",
}: CategoryTabsProps<T>) {
  const [failed, setFailed] = useState<Record<string, boolean>>({});
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const focusTab = (index: number) => {
    const category = categories[index];
    onChange(category.id);
    tabRefs.current[index]?.focus();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault();
        focusTab((index + 1) % categories.length);
        return;
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        focusTab((index - 1 + categories.length) % categories.length);
        return;
      case "Home":
        e.preventDefault();
        focusTab(0);
        return;
      case "End":
        e.preventDefault();
        focusTab(categories.length - 1);
        return;
    }
  };

  return (
    <div
      role="tablist"
      aria-label={tablistLabel}
      className="grid gap-4 md:gap-5 grid-cols-2 md:[grid-template-columns:repeat(var(--tab-cols),1fr)]"
      style={{ ["--tab-cols" as string]: categories.length }}
    >
      {categories.map((cfg, index) => {
        const colorVar = accentColorVar(cfg.accent);
        const tintVar = accentTintVar(cfg.accent);
        const isActive = cfg.id === activeId;
        const showPhoto = cfg.photo && !failed[cfg.id];
        return (
          <button
            key={cfg.id}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            id={categoryTabId(cfg.id)}
            role="tab"
            aria-selected={isActive}
            aria-controls={categoryPanelId(cfg.id)}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(cfg.id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="p-0 rounded-[20px] overflow-hidden cursor-pointer bg-white text-left transition-all duration-200 flex flex-col"
            style={{
              border: isActive
                ? `3px solid ${colorVar}`
                : "1px solid var(--color-border-subtle)",
              boxShadow: isActive ? "var(--shadow-lg)" : "var(--shadow-sm)",
              transform: isActive ? "translateY(-4px)" : "none",
            }}
          >
            <div
              className="relative h-[120px] flex items-center justify-center text-xs px-3 text-center overflow-hidden"
              style={{
                background: showPhoto ? undefined : tintVar,
                color: showPhoto ? undefined : colorVar,
                borderBottom: `4px solid ${colorVar}`,
              }}
            >
              {showPhoto ? (
                <Image
                  src={cfg.photo}
                  alt={cfg.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  className="object-cover select-none"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  style={{ WebkitUserDrag: "none" } as CSSProperties}
                  onError={() =>
                    setFailed((prev) => ({ ...prev, [cfg.id]: true }))
                  }
                />
              ) : (
                `[ ${photoFallbackLabel(cfg.name)} ]`
              )}
            </div>
            <div className="py-4 px-[18px]">
              <div
                className="font-bold text-md mb-1 font-display"
                style={{
                  color: isActive ? colorVar : "var(--color-text-heading)",
                }}
              >
                {cfg.name}
              </div>
              <div className="text-sm font-body text-text-muted">
                {countLabel(cfg)}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
