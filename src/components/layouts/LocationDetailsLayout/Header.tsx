import Breadcrumbs from "./Breadcrumbs";

const Header = () => {
  return (
    <div className="px-4 lg:px-0">
      <Breadcrumbs />
      <h1 className="text-2xl pt-4 font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Walgreens #15512
      </h1>
    </div>
  );
};

export default Header;
