import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size: "s" | "m";
  color?: "ghost" | "gray" | "green" | "primary" | "red";
  children: ReactNode;
  href?: string;
}
