import React from "react";

type Variant = "h1" | "h2" | "h3" | "sub" | "body";
type Element = "h1" | "h2" | "h3" | "div" | "p" | "span";

interface TypographyProps {
  children: React.ReactNode;
  variant?: Variant;
  as?: Element;
  className?: string;
}

const defaultElement: Record<Variant, Element> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  sub: "p",
  body: "p",
};

export default function Typography({
  children,
  variant = "h2",
  as,
  className = "",
}: TypographyProps) {
  const Component = as || defaultElement[variant];

  const variantClasses: Record<Variant, string> = {
    h1: "text-h1",
    h2: "text-h2",
    h3: "text-h3",
    sub: "text-sub",
    body: "text-body",
  };

  return (
    <Component
      className={[variantClasses[variant], className].join(" ").trim()}
    >
      {children}
    </Component>
  );
}