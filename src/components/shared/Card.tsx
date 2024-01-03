import { FC, PropsWithChildren } from "react";

const Card: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 mx-3 sm:mx-0">
      {children}
    </div>
  );
};

export default Card;
