import { ReactNode } from "react";

export interface SidebarMenu{
  text: string;
  icon?: ReactNode;
  url?: string;
  children?: SidebarMenu[];
}