import { ButtonHTMLAttributes, FC } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: HeroIconType;
  label: string;
  color: 'orange' | 'slate' | 'blue'
}

const Button: FC<ButtonProps> = ({ Icon, label }) => {
  return (
    <button
      type="button"
      className="ml-3 inline-flex items-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
    >
      {!!Icon && <Icon className="h-4 w-4 mr-2" color="#fff" />}
      {label}
    </button>
  );
};

export default Button;
