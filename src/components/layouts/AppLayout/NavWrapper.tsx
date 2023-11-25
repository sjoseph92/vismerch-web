"use client"
import { FC, PropsWithChildren } from "react";
import { useIsParentPage } from "./utils";

const NavWrapper: FC<PropsWithChildren> = ({ children }) => {
  const isParentPage = useIsParentPage();
  return (
    <nav className={isParentPage ? "flex flex-1 flex-co" : "hidden"}>
      {children}
    </nav>
  );
};

export default NavWrapper;
