import { FC, PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  withPadding?: boolean;
}

const Card: FC<CardProps> = ({ children, withPadding = true }) => {
  return (
    <div
      className={`overflow-hidden rounded-lg bg-white shadow mx-3 sm:mx-0 ${
        withPadding ? "px-4 py-5 sm:px-6" : undefined
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
