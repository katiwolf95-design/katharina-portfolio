import type { ReactNode } from "react";

type BlobProps = {
  children: ReactNode;
  className?: string;
};

export default function Blob({
  children,
  className = "",
}: BlobProps) {
  return (
    <div
      className={`rounded-[48px] bg-(--beige) p-8 ${className}`}
    >
      {children}
    </div>
  );
}