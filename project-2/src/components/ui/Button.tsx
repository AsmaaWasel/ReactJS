import { ButtonHTMLAttributes, ReactNode } from "react";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Button = ({
  className = "",
  children,
  width = "w-full",
  ...rest
}: Iprops) => {
  return (
    <button
      className={`${className} ${width} p-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
