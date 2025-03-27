import React from "react";

interface Props {
  className: string;
}

export const IconsGoogle = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5835 11.6667C14.0852 13.4002 12.6182 14.6813 10.8335 14.9417C9.45281 15.142 8.0501 14.7708 6.94924 13.9137C5.84838 13.0566 5.14453 11.7877 5.00019 10.4001C4.88831 9.00615 5.36528 7.62909 6.31536 6.603C7.26544 5.57691 8.6018 4.99558 10.0002 5.00006C10.6483 5.00098 11.2903 5.12542 11.8919 5.36673C12.0882 5.45486 12.3193 5.37902 12.4252 5.19173L13.6252 2.9834C13.6774 2.88067 13.6865 2.76139 13.6505 2.65193C13.6145 2.54247 13.5365 2.45183 13.4335 2.40006C10.8139 1.21403 7.76795 1.46236 5.37506 3.05706C2.98218 4.65175 1.58053 7.36745 1.66685 10.2417C1.83704 14.5936 5.29295 18.1 9.64185 18.3334C14.2179 18.5363 18.0998 15.0079 18.3335 10.4334V8.76673C18.3291 8.53847 18.1451 8.3545 17.9169 8.35006H10.4169C10.1867 8.35006 10.0002 8.53661 10.0002 8.76673V11.2667C10.0002 11.4969 10.1867 11.6834 10.4169 11.6834H14.5835"
        fill="white"
      />
    </svg>
  );
};
