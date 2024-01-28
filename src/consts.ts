import {
  CalendarDaysIcon,
  HomeIcon,
  MapPinIcon,
  CubeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export interface NavigationTab {
  name: string;
  href: string;
}

export const LOCATION_DETAIL_TABS: NavigationTab[] = [
  { name: "Overview", href: "/" },
  { name: "Displays", href: "/displays" },
  { name: "Photos", href: "/photos" },
  { name: "Visits", href: "/visits" },
];

export interface NavigationItem {
  name: string;
  href: string;
  icon: HeroIconType;
}

export const navigationItems: Record<string, NavigationItem> = {
  "/home": { name: "Home", href: "/", icon: HomeIcon },
  "/jobs": { name: "Jobs", href: "/jobs", icon: CalendarDaysIcon },
  "/locations": { name: "Locations", href: "/locations", icon: MapPinIcon },
  "/products": { name: "Products", href: "/products", icon: CubeIcon },
  "/team": { name: "Team", href: "/team", icon: UserGroupIcon },
};

export const sideBarOptions = Object.values(navigationItems);
