import React from "react";

interface Props {
  className: any;
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
      <rect
        fill="white"
        height="24"
        opacity="0.01"
        transform="rotate(180 24 24)"
        width="24"
        x="24"
        y="24"
      />

      <path
        d="M17 3.49991C17 3.22377 16.7761 2.99991 16.5 2.99991H14C11.3793 2.86936 9.14528 4.88 9 7.49991V10.1999H6.5C6.22386 10.1999 6 10.4238 6 10.6999V13.2999C6 13.5761 6.22386 13.7999 6.5 13.7999H9V20.4999C9 20.7761 9.22386 20.9999 9.5 20.9999H12.5C12.7761 20.9999 13 20.7761 13 20.4999V13.7999H15.62C15.8487 13.8032 16.0505 13.6508 16.11 13.4299L16.83 10.8299C16.8703 10.6802 16.8389 10.5202 16.7449 10.3969C16.6509 10.2735 16.5051 10.2008 16.35 10.1999H13V7.49991C13.0515 6.98701 13.4845 6.59733 14 6.59991H16.5C16.7761 6.59991 17 6.37605 17 6.09991V3.49991Z"
        fill="white"
      />
    </svg>
  );
};
