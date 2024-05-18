import { ReactNode } from "react";

interface Iprops {
  children: ReactNode;
  className: string;
}

const Button = ({ className, children }: Iprops) => {
  return (
    <Button className={className} w-full p-2 rounded-md text-white>
      {children}
    </Button>
  );
};

export default Button;
