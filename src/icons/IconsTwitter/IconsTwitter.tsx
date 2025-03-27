import React from "react";

interface Props {
  className: string;
}

export const IconsTwitter = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.08 20C11.0733 20.0094 13.9736 18.8973 16.1284 16.8253C18.2832 14.7532 19.5087 11.8982 19.526 9C20.2035 8.16116 20.7077 7.19556 21.007 6.16C21.0526 5.99284 20.9959 5.81445 20.8621 5.70438C20.7283 5.5943 20.5423 5.57301 20.387 5.65C19.6598 5.99934 18.7906 5.84644 18.227 5.27C17.5179 4.49337 16.5246 4.03697 15.4732 4.00484C14.4218 3.97271 13.4022 4.36775 12.647 5.1C11.6059 6.10819 11.1696 7.58828 11.497 9C8.14699 9.20011 5.84399 7.61011 3.99999 5.43C3.88704 5.30208 3.70914 5.25307 3.54661 5.30507C3.38409 5.35708 3.2677 5.50027 3.24999 5.67C2.53211 9.65216 4.36686 13.6606 7.84999 15.72C6.70963 17.0279 5.1082 17.8447 3.37999 18C3.19017 18.0314 3.04137 18.1802 3.00973 18.37C2.9781 18.5598 3.07064 18.7487 3.23999 18.84C4.74351 19.5912 6.39922 19.9881 8.07999 20"
        fill="white"
      />
    </svg>
  );
};
