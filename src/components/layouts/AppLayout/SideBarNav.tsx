import Image from "next/image";
import { sideBarOptions } from "@/consts";
import SideBarLink from "./SideBarLink";
import NavWrapper from "./NavWrapper";

const SideBarNav = () => {
  return (
    <NavWrapper>
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            {sideBarOptions.map((item) => (
              <SideBarLink item={item} key={item.name} />
            ))}
          </ul>
        </li>
        <li className="-mx-6 mt-auto">
          <a
            href="#"
            className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
          >
            <Image
              className="h-8 w-8 rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              width={8}
              height={8}
            />
            <span className="sr-only">Your profile</span>
            <span aria-hidden="true">Sam Joseph</span>
          </a>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default SideBarNav;
