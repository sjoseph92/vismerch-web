import MostReplenishedCard from "./MostReplenishedCard";
import MostVisitedCard from "./MostVisitedCard";
import StoreVisitsByMonthCard from "./StoreVisitsByMonthCard";


const DashboardBottomRow = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1.5fr_1fr_1fr] gap-3 h-full">
      <StoreVisitsByMonthCard />
      <MostVisitedCard />
      <MostReplenishedCard />
    </div>
  );
};

export default DashboardBottomRow;
