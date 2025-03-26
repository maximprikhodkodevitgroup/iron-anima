import React from "react";

interface Props {
  property1: "default";
  className: any;
  logInClassName: any;
  text: string;
}

export const ButtonPrimary = ({
  property1,
  className,
  logInClassName,
  text,
}: Props): JSX.Element => {
  return (
    <button
      className={`flex w-[200px] h-11 items-center justify-center gap-2.5 px-[178px] py-[11px] relative bg-main rounded-[1px] ${className} hover:bg-white cursor-pointer`}
    >
      <div
        className={`relative w-fit mt-[-2.00px] ml-[-104.50px] mr-[-104.50px] font-button font-[number:var(--button-font-weight)] text-black text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] whitespace-nowrap [font-style:var(--button-font-style)] ${logInClassName}`}
      >
        {text}
      </div>
    </button>
  );
};
