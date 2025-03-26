import React from 'react';
import { TextInput } from '../TextInput';

interface EmailInputProps {
  placeholder?: string;
}

export const EmailInput: React.FC<EmailInputProps> = ({ placeholder = 'E-mail address', ...props }) => {
  return (
    <TextInput
      type="email"
      placeholder={placeholder}
      {...props}
    />
  );
};
