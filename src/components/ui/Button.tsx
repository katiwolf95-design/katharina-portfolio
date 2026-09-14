import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "filled" | "outline";
  children: ReactNode;
};

export default function Button({
  variant = "filled",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "flex items-center justify-center px-8 py-4 text-sm font-medium transition-all duration-300";

  const styles = {
    filled:
      "bg-[var(--b-filled)] rounded-full hover:-translate-y-0.5 hover:shadow-lg",

    outline:
      "border-2 border-[var(--primary-light)] bg-transparent text-[var(--text)] hover:bg-[var(--b-filled)]",
  };

  return (
    <button
      className={`${base} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}