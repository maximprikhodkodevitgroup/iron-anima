import React, { useState } from 'react';
import { TextInput } from '../TextInput';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface PasswordInputProps {
  label?: string;
  placeholder?: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({ label = 'Password', placeholder = 'Enter your password', ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      <TextInput
        type={showPassword ? "text" : "password"}
        label={label}
        placeholder={placeholder}
        className="pr-10" // Add right padding to accommodate the eye icon
        {...props}
      />
      <button 
        onClick={() => setShowPassword(!showPassword)} 
        className="absolute right-[17px] top-[50%] transform translate-y-[2px] cursor-pointer bg-transparent border-none p-0 focus:outline-none"
        type="button"
      >
        <FontAwesomeIcon 
          icon={showPassword ? faEyeSlash : faEye} 
          className="text-white hover:text-[#00cde7] text-xl"
        />
      </button>
    </div>
  );
};
