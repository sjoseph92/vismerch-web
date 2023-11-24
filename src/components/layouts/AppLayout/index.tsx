"use client";
import { FC, PropsWithChildren, useState } from "react";

import MobileHeader from "./MobileHeader";
import MobileSideBar from "./MobileSideBar";
import SideBar from "./SideBar";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div>
        <MobileSideBar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <SideBar />
        <MobileHeader setSidebarOpen={setSidebarOpen} />
        {children}
      </div>
    </>
  );
};

export default AppLayout;
