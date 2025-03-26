import React, { InputHTMLAttributes, useState } from 'react';
import { useField } from 'formik';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder?: string;
}

export const TextInput: React.FC<TextInputProps> = ({ placeholder, className, ...props }) => {
  const [field, meta] = useField(props);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    field.onBlur(e);
  };

  const isError = meta.touched && meta.error;
  const showLabel = isFocused && field.value.length === 0;

  const sharedStyles = "font-b-3 font-[number:var(--b-3-font-weight)] text-[length:var(--b-3-font-size)] tracking-[var(--b-3-letter-spacing)] leading-[var(--b-3-line-height)] [font-style:var(--b-3-font-style)]";

  return (
    <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
      <div className={`gap-2.5 flex h-[45px] items-center px-[17px] py-[13px] relative self-stretch w-full mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] border-b [border-bottom-style:solid] ${isError ? 'border-[#FF3B30]' : 'border-[#c3c9cf]'} focus-within:border-[#00cde7]`}>
        {showLabel && (
          <label 
            className={`absolute transition-all duration-200 pointer-events-none ${sharedStyles}
              top-[-18px] left-0 text-[16px] ${isError ? 'text-[#FF3B30]' : 'text-white'}`}
          >
            {placeholder}
          </label>
        )}
        <input
          {...field}
          {...props}
          className={`relative w-full h-6 mt-[-4.00px] mb-[-1.00px] bg-transparent transition-all duration-[0.2s] ease-[ease] text-white text-[16px] ${sharedStyles} border-0 p-0 focus:outline-none cursor-text ${className || ''}`}
          placeholder={showLabel ? "" : placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      <div className="h-5 mt-1"> {/* Резервируем место для ошибки */}
        {isError && (
          <div className="text-[#FF3B30] text-xs">{meta.error}</div>
        )}
      </div>
    </div>
  );
};
