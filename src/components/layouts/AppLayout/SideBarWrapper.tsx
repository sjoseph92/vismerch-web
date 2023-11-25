"use client";
import { FC, PropsWithChildren } from "react";
import { useIsParentPage } from "./utils";

const SideBarWrapper: FC<PropsWithChildren> = ({ children }) => {
  const isParentPage = useIsParentPage();
  return (
    <nav
      className={`hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-${
        isParentPage ? 72 : 20
      } lg:flex-col`}
    >
      {children}
    </nav>
  );
};

export default SideBarWrapper;
