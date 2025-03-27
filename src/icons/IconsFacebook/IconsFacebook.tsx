import React from "react";

interface Props {
  className: string;
}

export const IconsFacebook = ({ className }: Props): JSX.Element => {
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
        d="M17 3.5C17 3.22386 16.7761 3 16.5 3H14C11.3793 2.86939 9.14277 4.88179 9 7.5V10.2H6.5C6.22386 10.2 6 10.4239 6 10.7V13.3C6 13.5761 6.22386 13.8 6.5 13.8H9V20.5C9 20.7761 9.22386 21 9.5 21H12.5C12.7761 21 13 20.7761 13 20.5V13.8H15.62C15.8487 13.8033 16.0505 13.6509 16.11 13.43L16.83 10.83C16.8703 10.6803 16.8389 10.5203 16.7449 10.397C16.6509 10.2737 16.5051 10.2009 16.35 10.2H13V7.5C13.0515 6.98721 13.4845 6.59759 14 6.6H16.5C16.7761 6.6 17 6.37614 17 6.1V3.5Z"
        fill="white"
      />
    </svg>
  );
};
