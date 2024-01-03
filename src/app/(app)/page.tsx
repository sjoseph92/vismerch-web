import DashboardBottomRow from "@/components/home/DashboardBottomRow";
import DashboardTopRow from "@/components/home/DashboardTopRow";

const page = () => {
  return (
    <main className="sm:h-screen py-4 sm:py-8 sm:pl-60">
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight sm:px-6 lg:px-8 my-4 sm:my-8">
        Home
      </h2>
      <div className="flex flex-col w-full sm:px-6 lg:px-8 gap-5">
        <DashboardTopRow />
        <DashboardBottomRow />
      </div>
    </main>
  );
};

export default page;
