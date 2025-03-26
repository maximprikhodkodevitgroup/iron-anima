import React from "react";

interface Props {
  className: any;
}

export const EyeClosed2 = ({ className }: Props): JSX.Element => {
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
        d="M20.4 19.5L5.40002 4.5M10.2 10.4416C9.82661 10.8533 9.60002 11.394 9.60002 11.9863C9.60002 13.2761 10.6745 14.3217 12 14.3217C12.6112 14.3217 13.169 14.0994 13.5927 13.7334M20.4388 14.3217C21.265 13.0848 21.6 12.0761 21.6 12.0761C21.6 12.0761 19.4154 5.1 12 5.1C11.5837 5.1 11.1839 5.12199 10.8 5.16349M17.4 17.3494C16.0226 18.2281 14.2494 18.8495 12 18.8127C4.67695 18.693 2.40002 12.0761 2.40002 12.0761C2.40002 12.0761 3.45788 8.69808 6.60002 6.64332"
        stroke="#C3C9CF"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
