"use client";
import { Dispatch, FC, SetStateAction } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";

import { useIsParentPage, useMobileHeaderTitle } from "./utils";

interface MobileHeaderProps {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileHeader: FC<MobileHeaderProps> = ({ setSidebarOpen }) => {
  const title = useMobileHeaderTitle();
  const onClick = () => setSidebarOpen(true);
  const isParentPage = useIsParentPage();
  if (!isParentPage) {
    return null;
  }
  
  return (
    <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        onClick={onClick}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
        {title}
      </div>
      <a href="#">
        <span className="sr-only">Your profile</span>
        <Image
          className="h-8 w-8 rounded-full bg-gray-50"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
          height={8}
          width={8}
        />
      </a>
    </div>
  );
};

export default MobileHeader;
