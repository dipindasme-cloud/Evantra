import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";
type ButtonRadius = "sm" | "md" | "lg" | "full";
type ButtonIconAnimation = "none" | "shift" | "rotate";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  radius?: ButtonRadius;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  loadingText?: string;
  iconAnimation?: ButtonIconAnimation;
}

const baseClasses = [
  "btn-base",
  "inline-flex items-center justify-center gap-2",
  "font-medium whitespace-nowrap select-none",
  "transition-all duration-200",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  "disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none",
  "active:scale-[0.98]",
  "relative",
].join(" ");

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-[40px] px-4 text-sm",
  md: "min-h-[48px] px-6 text-sm md:text-base",
  lg: "min-h-[56px] px-7 text-base",
};

const radiusClasses: Record<ButtonRadius, string> = {
  sm: "rounded-[var(--radius-sm)]",
  md: "rounded-[var(--radius-md)]",
  lg: "rounded-[var(--radius-lg)]",
  full: "rounded-full",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    "btn-hover-primary",
    "bg-[var(--color-primary)] text-white",
    "focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-[var(--color-bg)]",
    "disabled:bg-[var(--color-primary)] disabled:text-white",
  ].join(" "),

  secondary: [
    "btn-hover-secondary",
    "bg-[var(--color-surface)] text-[var(--color-text)] border border-[var(--color-border)]",
    "focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-[var(--color-bg)]",
  ].join(" "),

  outline: [
    "btn-hover-outline",
    "bg-transparent text-[var(--color-text)] border border-[var(--color-border)]",
    "focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-[var(--color-bg)]",
  ].join(" "),

  ghost: [
    "btn-hover-ghost",
    "bg-transparent text-[var(--color-text)]",
    "focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-[var(--color-bg)]",
  ].join(" "),

  danger: [
    "btn-hover-danger",
    "bg-red-600 text-white",
    "focus-visible:ring-red-600 focus-visible:ring-offset-[var(--color-bg)]",
    "disabled:bg-red-600 disabled:text-white",
  ].join(" "),
};

const iconAnimationClasses: Record<ButtonIconAnimation, string> = {
  none: "",
  shift: "btn-icon-shift-right",
  rotate: "btn-icon-rotate",
};

function Spinner() {
  return (
    <span
      className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
      aria-hidden="true"
    />
  );
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      children,
      className = "",
      variant = "primary",
      size = "md",
      radius = "md",
      fullWidth = false,
      leftIcon,
      rightIcon,
      loading = false,
      loadingText,
      iconAnimation = "none",
      disabled,
      type = "button",
      onClick,
      ...props
    },
    ref
  ) {
    const isDisabled = disabled || loading;
    const computedAriaLabel =
      typeof props["aria-label"] === "string"
        ? props["aria-label"]
        : loading && typeof loadingText === "string"
        ? loadingText
        : undefined;

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
      if (isDisabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      onClick?.(event);
    };

    return (
      <button
        ref={ref}
        type={loading ? "button" : type}
        disabled={isDisabled}
        aria-label={computedAriaLabel}
        aria-disabled={isDisabled}
        aria-busy={loading || undefined}
        className={[
          baseClasses,
          sizeClasses[size],
          radiusClasses[radius],
          variantClasses[variant],
          iconAnimationClasses[iconAnimation],
          fullWidth ? "w-full" : "w-auto",
          loading ? "pointer-events-none" : "",
          className,
        ].join(" ")}
        onClick={handleClick}
        {...props}
      >
        {loading ? (
          <>
            <Spinner />
            <span>{loadingText ?? children}</span>
          </>
        ) : (
          <>
            {leftIcon ? (
              <span
                className="btn-icon-left inline-flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                {leftIcon}
              </span>
            ) : null}

            <span>{children}</span>

            {rightIcon ? (
              <span
                className="btn-icon-right inline-flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                {rightIcon}
              </span>
            ) : null}
          </>
        )}
      </button>
    );
  }
);

export default Button;