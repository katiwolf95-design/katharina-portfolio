import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export default function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`py-28 lg:py-36 ${className}`}>
      {children}
    </section>
  );
}