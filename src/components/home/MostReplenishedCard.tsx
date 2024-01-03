import TopListCard, { TopListItem } from "./TopListCard";

const data: TopListItem[] = [
  {
    name: "Raspberry Rose Prebiotic Soda - 12 fl oz Can",
    amt: 2388,
  },
  {
    name: "Cherry Limeade Prebiotic Soda - 4pk/12 fl oz Cans",
    amt: 2100,
  },
  {
    name: "Doc Pop Prebiotic Soda - 12 fl oz Can",
    amt: 1874,
  },
  {
    name: "Orange Prebiotic Soda - 12 fl oz Can",
    amt: 1540,
  },
  {
    name: "Raspberry Rose Prebiotic Soda - 4pk/12 fl oz Cans",
    amt: 967,
  },
  {
    name: "Coca Cola Prebiotic Soda - 12 fl oz Can",
    amt: 812,
  },
  {
    name: "Rootbeer Prebiotic Soda - 12 fl oz Can",
    amt: 565,
  },
];
const MostReplenishedCard = () => {
  return <TopListCard data={data} title="Top products by units replenished" />;
};

export default MostReplenishedCard;
