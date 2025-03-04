import React from "react";

const ClockIcon = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      className="productDetail-icon svg__hover--path"
      width="24.000000"
      height="24.000000"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <desc>Created with Pixso.</desc>
      <defs>
        <clipPath id="clip1_9735">
          <rect
            id="fluent:calendar-clock-24-regular"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="fluent:calendar-clock-24-regular"
        width="24.000000"
        height="24.000000"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip1_9735)">
        <path
          id="Vector"
          d="M21 6.25C21 5.38794 20.6572 4.56128 20.0479 3.9519C19.4385 3.34253 18.6123 3 17.75 3L6.25 3C5.3877 3 4.56152 3.34253 3.95215 3.9519C3.34277 4.56128 3 5.38794 3 6.25L3 17.75C3 18.6121 3.34277 19.4387 3.95215 20.0481C4.56152 20.6575 5.3877 21 6.25 21L12.0225 21C11.7227 20.5325 11.4844 20.0283 11.3135 19.5L6.25 19.5C5.78613 19.5 5.34082 19.3157 5.0127 18.9875C4.68457 18.6592 4.5 18.2141 4.5 17.75L4.5 8.5L19.5 8.5L19.5 11.313C20.0283 11.4839 20.5322 11.7222 21 12.022L21 6.25ZM6.25 4.5L17.75 4.5C18.7158 4.5 19.5 5.28394 19.5 6.25L19.5 7L4.5 7L4.5 6.25C4.5 5.28394 5.28418 4.5 6.25 4.5Z"
          fill="#000000"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
        <path
          id="Vector"
          d="M12 17.25C12 20.1484 14.3516 22.5 17.25 22.5C20.1484 22.5 22.5 20.1484 22.5 17.25C22.5 14.3516 20.1484 12 17.25 12C14.3516 12 12 14.3516 12 17.25Z"
          stroke="#000000"
          fill="transparent"
          strokeOpacity="1.000000"
          strokeWidth="2.000000"
        />
        <path
          id="Vector"
          d="M17.25 13.75L17.25 17.6875L19.875 17.6875"
          stroke="#000000"
          strokeOpacity="1.000000"
          strokeWidth="1.800000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default ClockIcon;
