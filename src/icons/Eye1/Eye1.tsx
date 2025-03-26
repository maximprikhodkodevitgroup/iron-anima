import React from "react";

interface Props {
  className: any;
}

export const Eye1 = ({ className }: Props): JSX.Element => {
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
        d="M12 5.24951C4.5 5.24951 1.5 12.0002 1.5 12.0002C1.5 12.0002 4.5 18.7495 12 18.7495C19.5 18.7495 22.5 12.0002 22.5 12.0002C22.5 12.0002 19.5 5.24951 12 5.24951Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M12 15.7495C14.0711 15.7495 15.75 14.0706 15.75 11.9995C15.75 9.92836 14.0711 8.24951 12 8.24951C9.92893 8.24951 8.25 9.92836 8.25 11.9995C8.25 14.0706 9.92893 15.7495 12 15.7495Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
