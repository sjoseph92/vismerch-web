"use client";
import { combineClassNames } from "@/utils";
import Link from "next/link";
import type { NavigationTab } from "@/consts";
import { useMemo, type FC } from "react";
import { usePathname } from "next/navigation";
import {
  getCurrentLocationDetailsTab,
  getCurrentLocationDetailsBasePath,
} from "@/utils/routes";

interface TabItemProps {
  tab: NavigationTab;
}

const TabItem: FC<TabItemProps> = ({ tab }) => {
  const pathname = usePathname();

  const isCurrentTab = useMemo(() => {
    let currentTab = getCurrentLocationDetailsTab(pathname);
    return currentTab === tab.name;
  }, [pathname, tab.name]);

  const fullHref = useMemo(() => {
    let basePath = getCurrentLocationDetailsBasePath(pathname);
    return `${basePath}${tab.href}`;
  }, [pathname, tab.href]);

  return (
    <Link
      href={fullHref}
      className={combineClassNames(
        isCurrentTab
          ? "border-orange-500 text-orange-600"
          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
        "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
      )}
      aria-current={isCurrentTab ? "page" : undefined}
    >
      {tab.name}
    </Link>
  );
};

export default TabItem;
