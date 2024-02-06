import { FC, PropsWithChildren } from "react";
import Button, { ButtonProps } from "./Button";

interface TableWrapperProps extends PropsWithChildren {
  title: string;
  subTitle: string;
  buttonA?: ButtonProps;
  buttonB?: ButtonProps;
  buttonC?: ButtonProps;
}
const TableWrapper: FC<TableWrapperProps> = ({
  children,
  title,
  subTitle,
  buttonA,
  buttonB,
  buttonC,
}) => {
  return (
    <main className="bg-white min-h-screen py-10 lg:pl-72">
      <div className="bg-white px-4 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-base font-semibold leading-6 text-gray-900">
                {title}
              </h1>
              <p className="mt-2 text-sm text-gray-700">{subTitle}</p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 flex flex-row gap-2">
              {!!buttonA && <Button label={buttonA.label} color={buttonA.color} />}
            </div>
          </div>
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TableWrapper;
