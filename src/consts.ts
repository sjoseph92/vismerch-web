import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export type Icon = ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, "ref"> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & RefAttributes<SVGSVGElement>
>;

export interface NavigationItem {
  name: string;
  href: string;
  icon: Icon;
}

export const navigation: NavigationItem[] = [
  { name: "Home", href: "/home", icon: HomeIcon },
  { name: "Jobs", href: "/jobs", icon: UsersIcon },
];
