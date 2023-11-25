import SideBarNav from "./SideBarNav";
import SideBarWrapper from "./SideBarWrapper";

const SideBar = () => {
  return (
    <SideBarWrapper>
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
        <div className="flex h-16 shrink-0 items-center">
          {/*eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=orange&shade=600"
            alt="Your Company"
          />
        </div>
        <SideBarNav />
      </div>
    </SideBarWrapper>
  );
};

export default SideBar;
