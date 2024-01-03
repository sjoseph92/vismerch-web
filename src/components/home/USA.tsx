import Card from "../shared/Card";

export default function Map() {
  return (
    <Card>
      <p className="truncate text-md font-light text-gray-500">
        Store Map
      </p>
      <img src="/us.svg" className="w-full h-full" />
    </Card>
  );
}
