import React from "react";

interface Props {
  className: any;
}

export const UserProfile02 = ({ className }: Props): JSX.Element => {
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
        d="M2.40002 20.5123C2.40002 16.7368 5.55431 13.6761 12 13.6761C18.4457 13.6761 21.6 16.7368 21.6 20.5123C21.6 21.113 21.1618 21.5999 20.6212 21.5999H3.37885C2.83826 21.5999 2.40002 21.113 2.40002 20.5123Z"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M15.6 5.9999C15.6 7.98813 13.9882 9.5999 12 9.5999C10.0118 9.5999 8.40002 7.98813 8.40002 5.9999C8.40002 4.01168 10.0118 2.3999 12 2.3999C13.9882 2.3999 15.6 4.01168 15.6 5.9999Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};
