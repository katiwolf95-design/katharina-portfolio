import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto w-full max-w-300 px-6 md:px-15">
      {children}
    </div>
  );
}