import React from "react";
import Container from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: "default" | "surface" | "transparent";
  spacing?: "none" | "sm" | "md" | "lg";
  pt?: "none" | "sm" | "md" | "lg";
  pb?: "none" | "sm" | "md" | "lg";
  id?: string;
}

const backgroundClasses = {
  default: "bg-[var(--color-bg)] text-[var(--color-text)]",
  surface: "bg-[var(--color-surface)] text-[var(--color-text)]",
  transparent: "bg-transparent text-[var(--color-text)]",
};

const spacingClasses = {
  none: "py-0",
  sm: "py-[var(--section-py-sm)]",
  md: "py-[var(--section-py-md)]",
  lg: "py-[var(--section-py-lg)]",
};

const ptClasses = {
  none: "pt-0",
  sm: "pt-[var(--section-py-sm)]",
  md: "pt-[var(--section-py-md)]",
  lg: "pt-[var(--section-py-lg)]",
};

const pbClasses = {
  none: "pb-0",
  sm: "pb-[var(--section-py-sm)]",
  md: "pb-[var(--section-py-md)]",
  lg: "pb-[var(--section-py-lg)]",
};

export default function Section({
  children,
  className = "",
  containerClassName = "",
  background = "default",
  spacing = "md",
  pt,
  pb,
  id,
}: SectionProps) {
  const resolvedSpacing =
    pt || pb
      ? `${pt ? ptClasses[pt] : ""} ${pb ? pbClasses[pb] : ""}`
      : spacingClasses[spacing];

  return (
    <section
      id={id}
      className={[
        backgroundClasses[background],
        resolvedSpacing,
        className,
      ].join(" ")}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}