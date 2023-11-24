import { usePathname } from "next/navigation";

import { navigationItems } from "@/consts";
import { useMemo } from "react";

export const useMobileHeaderTitle = () => {
  const path = usePathname();

  const title = useMemo(() => {
    if (navigationItems[path]) {
      return navigationItems[path].name;
    }
    return "";
  }, [path]);

  return title;
};
