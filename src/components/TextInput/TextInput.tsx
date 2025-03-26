import React, { InputHTMLAttributes } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const TextInput: React.FC<TextInputProps> = ({ label, className, ...props }) => {
  return (
    <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
      {label && (
        <label className="mb-2 font-b-2 text-white">{label}</label>
      )}
      <div className="gap-2.5 flex h-[45px] items-center px-[17px] py-[13px] relative self-stretch w-full mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] border-b [border-bottom-style:solid] border-[#c3c9cf] focus-within:border-[#00cde7]">
        <input
          className={`relative w-full h-6 mt-[-4.00px] mb-[-1.00px] bg-transparent transition-all duration-[0.2s] ease-[ease] font-b-2 font-[number:var(--b-2-font-weight)] text-[#c3c9cf] text-[length:var(--b-2-font-size)] tracking-[var(--b-2-letter-spacing)] leading-[var(--b-2-line-height)] whitespace-nowrap border-0 p-0 [font-style:var(--b-2-font-style)] focus:outline-none cursor-text ${className || ''}`}
          {...props}
        />
      </div>
    </div>
  );
};
