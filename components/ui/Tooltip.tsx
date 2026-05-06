import { cloneElement, isValidElement, ReactElement, ReactNode, useId } from "react";

interface TooltipProps {
  content: ReactNode;
  children: ReactElement;
  id?: string;
  side?: "top" | "bottom";
}

export default function Tooltip({
  content,
  children,
  id,
  side = "top",
}: TooltipProps) {
  const generatedId = useId();
  const tooltipId = id ?? `tooltip-${generatedId}`;

  if (!isValidElement(children)) {
    return null;
  }

  const child = cloneElement(children, {
    tooltipId,
    describeWithTooltip: true,
  } as Partial<typeof children.props>);

  const positionClasses =
    side === "bottom"
      ? "top-full mt-2 left-1/2 -translate-x-1/2"
      : "bottom-full mb-2 left-1/2 -translate-x-1/2";

  return (
    <div className="group relative inline-flex">
      {child}

      <div
        id={tooltipId}
        role="tooltip"
        className={[
          "pointer-events-none absolute z-50 whitespace-nowrap rounded-md",
          "bg-[var(--color-text)] px-2 py-1 text-xs text-[var(--color-bg)] shadow-md",
          "opacity-0 transition-opacity duration-200",
          "group-hover:opacity-100 group-focus-within:opacity-100",
          positionClasses,
        ].join(" ")}
      >
        {content}
      </div>
    </div>
  );
}