import type { ReactNode } from "react";

/** Passthrough root layout — `<html>` / `<body>` live in `[locale]/layout`. */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
