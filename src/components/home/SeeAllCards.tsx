import SeeAllCard from "./SeeAllCard";
import {
  BellAlertIcon,
  BuildingStorefrontIcon,
  ClipboardDocumentCheckIcon,
  CubeIcon
} from "@heroicons/react/24/solid";

const SeeAllCards = () => {
  return (
    <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <SeeAllCard
        icon={BellAlertIcon}
        iconColor="bg-red-500"
        title="Inventory Warnings"
        stat="12"
        unit="New warnings"
      />
      <SeeAllCard
        icon={ClipboardDocumentCheckIcon}
        iconColor="bg-purple-500"
        title="Avg Planogram Compliance"
        stat="84.76"
        unit="Percent"
        showSeeAll={false}
      />
      <SeeAllCard
        icon={BuildingStorefrontIcon}
        iconColor="bg-green-500"
        title="Visits"
        stat="56"
        unit="Upcoming"
      />
      <SeeAllCard
        icon={CubeIcon}
        iconColor="bg-orange-500"
        title="Avg Units Replenished Per Visit"
        stat="12.64"
        unit="Units"
        showSeeAll={false}
      />
    </dl>
  );
};

export default SeeAllCards;
