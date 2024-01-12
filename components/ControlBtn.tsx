import React from "react";

type Props = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ControlBtn = ({ children, ...props }: Props) => {
  return (
    <button
      {...props}
      className=" inline-flex items-center justify-center p-4 md:p-8 rounded-full aspect-square bg-transparent hover:bg-[#646464] border border-[#F5F5F5] hover:border-[#646464]">
      {children}
    </button>
  );
};

export default ControlBtn;
