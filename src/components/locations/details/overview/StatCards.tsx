import StatCard from "@/components/shared/StatCard";
import {
  BellAlertIcon,
  BuildingStorefrontIcon,
  ClipboardDocumentCheckIcon,
  CubeIcon,
} from "@heroicons/react/24/solid";

const StatCards = () => {
  return (
    <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <StatCard
        icon={BellAlertIcon}
        iconColor="bg-red-500"
        title="Inventory Warnings"
        stat="3"
        unit="New warnings"
      />
      <StatCard
        icon={ClipboardDocumentCheckIcon}
        iconColor="bg-purple-500"
        title="Avg Planogram Compliance"
        stat="73.77"
        unit="Percent"
        showSeeAll={false}
      />
      <StatCard
        icon={BuildingStorefrontIcon}
        iconColor="bg-green-500"
        title="Visits"
        stat="4"
        unit="Upcoming"
      />
      <StatCard
        icon={CubeIcon}
        iconColor="bg-orange-500"
        title="Avg Units Replenished Per Visit"
        stat="14.64"
        unit="Units"
        showSeeAll={false}
      />
    </dl>
  );
};

export default StatCards;
