import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return <main className="mx-auto w-full max-w-6xl px-6">{children}</main>;
}
