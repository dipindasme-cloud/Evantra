"use client";

export default function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="
        px-4 py-3 rounded-full
        bg-white/[0.05] border border-white/10
        text-sm text-white placeholder:text-white/30
        focus:outline-none focus:border-white/30
        w-full
      "
    />
  );
}