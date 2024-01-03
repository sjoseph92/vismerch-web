import { FC } from "react";
import Card from "../shared/Card";

interface SeeAllCardProps {
  icon: HeroIconType;
  iconColor: string;
  title: string;
  stat: string;
  unit: string;
  showSeeAll?: boolean;
}
const SeeAllCard: FC<SeeAllCardProps> = ({ showSeeAll = true, ...props }) => {
  return (
    <Card>
      <dt className="flex flex-row gap-1.5 items-center justify-start">
        <props.icon
          className={`h-10 w-10 p-2 rounded-3xl text-white ${props.iconColor}`}
          aria-hidden="true"
        />
        <p className="truncate text-sm font-light text-gray-500">
          {props.title}
        </p>
      </dt>
      <div className="flex flex-row justify-between items-center">
        <dd className="flex flex-row gap-1.5 items-end justify-start mt-3">
          <p className="text-3xl font-medium text-black">{props.stat}</p>
          <p className="text-md font-normal pb-1 text-gray-500">{props.unit}</p>
        </dd>
        {showSeeAll && (
          <div className="bg-gray-100 px-2 py-1 rounded-sm">
            <p className="text-black text-xs font-lg">{"See All >"}</p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default SeeAllCard;
