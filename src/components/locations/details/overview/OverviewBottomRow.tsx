import MapCard from "./MapCard";
import StatCards from "./StatCards";

const OverviewBottomRow = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[2.5fr_1fr] gap-5">
      <StatCards />
      <MapCard address="290 E Bay St,Charleston,SC,29403" />
    </div>
  );
};

export default OverviewBottomRow;
