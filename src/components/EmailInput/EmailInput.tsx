import React from 'react';
import { TextInput } from '../TextInput';

interface EmailInputProps {
  label?: string;
  placeholder?: string;
}

export const EmailInput: React.FC<EmailInputProps> = ({ label = 'Email', placeholder = 'E-mail address', ...props }) => {
  return (
    <TextInput
      type="email"
      label={label}
      placeholder={placeholder}
      {...props}
    />
  );
};
