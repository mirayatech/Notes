import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function Sidebar({
  className,
  children,
  ...props
}: ComponentProps<"aside">) {
  return (
    <aside
      className={twMerge(
        "w-[250px] mt-10 h-[100vh + 10px] overflow-auto",
        className
      )}
      {...props}
    >
      {children}
    </aside>
  );
}
