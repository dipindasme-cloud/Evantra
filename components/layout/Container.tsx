import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  full?: boolean;
  noPadding?: boolean;
}

export default function Container({
  children,
  className = "",
  full = false,
  noPadding = false,
}: ContainerProps) {
  return (
    <div
      className={[
        "w-full",
        full ? "max-w-none" : "max-w-[var(--container-max-width)]",
        "mx-auto",
        noPadding ? "px-0" : "px-[var(--container-px)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}