import { FC, ComponentProps, PropsWithChildren } from "react";

interface FormWrapperProps
  extends PropsWithChildren,
    Omit<ComponentProps<"form">, "className"> {
  title: string;
  subTitle?: string;
}

const FormWrapper: FC<FormWrapperProps> = ({
  children,
  title,
  subTitle,
  ...formProps
}) => {
  return (
    <form className="pb-20" {...formProps}>
      <div className="space-y-12">
        <div className="bg-white pb-12">
          <h1 className="text-base font-semibold leading-7 text-gray-900">
            {title}
          </h1>
          {subTitle ? (
            <p className="mt-1 text-sm leading-6 text-gray-600">{subTitle}</p>
          ) : null}
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {children}
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default FormWrapper;
