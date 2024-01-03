"use client";
import { memo } from "react";
import Card from "../shared/Card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "Jan",
    visits: 2376,
  },
  {
    month: "Feb",
    visits: 1896,
  },
  {
    month: "Mar",
    visits: 2578,
  },
  {
    month: "Apr",
    visits: 3560,
  },
  {
    month: "May",
    visits: 4358,
  },
  {
    month: "Jun",
    visits: 4240,
  },
  {
    month: "Jul",
    visits: 4658,
  },
  {
    month: "Aug",
    visits: 4328,
  },
  {
    month: "Sep",
    visits: 3769,
  },
  {
    month: "Oct",
    visits: 3968,
  },
  {
    month: "Nov",
    visits: 4127,
  },
  {
    month: "Dec",
    visits: 3958,
  },
];

const StoreVisitsByMonthCard = () => {
  return (
    <Card>
        <p className="truncate text-md font-light text-gray-500">
          Store Visits By Month
        </p>
        <ResponsiveContainer className="mr-auto" width="100%" height={250}>
          <BarChart
            data={data}
            height={250}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 5,
            }}
            barSize={16}
            className="mr-auto"
          >
            <XAxis
              dataKey="month"
              scale="point"
              padding={{ left: 10, right: 10 }}
              fontSize={10}
            />
            <YAxis fontSize={10} />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar
              dataKey="visits"
              fill="#EA580C"
              background={{ fill: "#eee" }}
              radius={[10, 10, 10, 10]}
            />
          </BarChart>
        </ResponsiveContainer>
    </Card>
  );
};

export default memo(StoreVisitsByMonthCard);
