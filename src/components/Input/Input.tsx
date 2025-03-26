import React, { InputHTMLAttributes } from "react";

interface Props {
  property1: "default" | "filled" | "pressed" | "disable" | "hover";
  className: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  rightIcon?: React.ReactNode;
}

export const Input = ({ property1, className, inputProps, rightIcon }: Props): JSX.Element => {
  return (
    <div
      className={`w-full flex flex-col items-start relative ${className}`}
    >
      <div
        className={`w-full flex self-stretch items-center px-[17px] py-[13px] h-[45px] border-b justify-between relative ${
          property1 === "disable"
            ? "border-neutral-600"
            : property1 === "hover"
            ? "border-[#00cce7]"
            : "border-[#c3c9cf]"
        }`}
      >
        <input
          className={`font-b-2 w-full bg-transparent border-none outline-none ${
            property1 === "disable"
              ? "text-neutral-600"
              : property1 === "filled"
              ? "text-white"
              : "text-[#c3c9cf]"
          }`}
          {...inputProps}
        />
        {rightIcon && (
          <div className="flex items-center ml-2">
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
};
