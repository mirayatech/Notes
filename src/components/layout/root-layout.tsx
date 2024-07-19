import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function RootLayout({
  children,
  className,
  ...props
}: ComponentProps<"main">) {
  return (
    <main className={twMerge("flex flex-row h-screen", className)} {...props}>
      {children}
    </main>
  );
}
