import {
  CalendarDaysIcon,
  HomeIcon,
  MapPinIcon,
  CubeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export interface NavigationItem {
  name: string;
  href: string;
  icon: HeroIconType;
}

export const navigationItems: Record<string, NavigationItem> = {
  "/home": { name: "Home", href: "/home", icon: HomeIcon },
  "/jobs": { name: "Jobs", href: "/jobs", icon: CalendarDaysIcon },
  "/locations": { name: "Locations", href: "/locations", icon: MapPinIcon },
  "/products": { name: "Products", href: "/products", icon: CubeIcon },
  "/team": { name: "Team", href: "/team", icon: UserGroupIcon },
};

export const sideBarOptions = Object.values(navigationItems);
