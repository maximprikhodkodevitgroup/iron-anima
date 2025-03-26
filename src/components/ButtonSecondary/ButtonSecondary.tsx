import React from "react";

interface Props {
  property1: "default";
  className: any;
  signUpClassName: any;
  text?: string;
}

export const ButtonSecondary = ({
  property1,
  className,
  signUpClassName,
  text = "SIGN UP",
}: Props): JSX.Element => {
  return (
    <button
      className={`all-[unset] box-border flex w-[200px] h-11 items-center justify-center gap-2.5 px-[178px] py-[11px] relative rounded-[1px] border border-solid border-main ${className} hover:border-white cursor-pointer`}
    >
      <div
        className={`relative w-fit mt-[-2.00px] ml-[-110.00px] mr-[-110.00px] font-button font-[number:var(--button-font-weight)] text-main text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] whitespace-nowrap [font-style:var(--button-font-style)] ${signUpClassName} group-hover:text-white`}
      >
        {text}
      </div>
    </button>
  );
};
