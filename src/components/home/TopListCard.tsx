import React, { FC } from "react";
import Card from "../shared/Card";

export interface TopListItem {
  name: string;
  amt: number;
}

interface TopListCardProps {
    title: string;
    data: TopListItem[]
}


const TopListCard: FC<TopListCardProps> = ({data, title}) => {
  return (
    <Card>
      <p className="truncate text-md font-light text-gray-500">
        {title}
      </p>
      <ul className="w-full">
        {data.map((item, index) => {
          return (
            <li
              className="text-black text-sm flex flex-row justify-between my-1.5"
              key={index.toString()}
            >
              <p className="truncate font-medium text-black">{item.name}</p>
              <p className="ml-6 text-orange-500 font-light">{item.amt.toLocaleString()}</p>
            </li>
          );
        })}
      </ul>
      <div className="flex flex-row justify-end my-4">
        <div className="bg-gray-100 px-2 py-1 rounded-sm">
          <p className="text-black text-xs font-lg">{"See All >"}</p>
        </div>
      </div>
    </Card>
  );
};

export default TopListCard;
