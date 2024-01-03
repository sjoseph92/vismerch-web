import TopListCard, { TopListItem } from "./TopListCard";

const data: TopListItem[] = [
  {
    name: "Harris Teeter #277",
    amt: 573,
  },
  {
    name: "CVS #3564",
    amt: 465,
  },
  {
    name: "Harris Teeter #456",
    amt: 450,
  },
  {
    name: "Harris Teeter #365",
    amt: 300,
  },
  {
    name: "Walgreens #12782",
    amt: 259,
  },
  {
    name: "Harris Teeter #406",
    amt: 206,
  },
  {
    name: "CVS #3560",
    amt: 130,
  },
];

const MostVisitedCard = () => {
  return <TopListCard data={data} title="Top locations by visits completed" />;
};

export default MostVisitedCard;
