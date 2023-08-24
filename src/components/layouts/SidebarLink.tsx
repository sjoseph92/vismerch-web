"use client";
import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavigationItem } from "@/consts";
import { combineClassNames } from "@/utils";

interface SidebarLinkProps {
  item: NavigationItem;
}

const SidebarLink: FC<SidebarLinkProps> = ({ item }) => {
  const pathname = usePathname();
  const isCurrent = item.href === pathname;
  return (
    <li key={item.name}>
      <Link
        href={item.href}
        className={combineClassNames(
          isCurrent
            ? "bg-gray-50 text-orange-600"
            : "text-gray-700 hover:text-orange-600 hover:bg-gray-50",
          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
        )}
      >
        <item.icon
          className={combineClassNames(
            isCurrent
              ? "text-orange-600"
              : "text-gray-400 group-hover:text-orange-600",
            "h-6 w-6 shrink-0"
          )}
          aria-hidden="true"
        />
        {item.name}
      </Link>
    </li>
  );
};

export default SidebarLink;
