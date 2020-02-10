import React from "react";

const Loader = ({ primaryColor, secondaryColor, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        margin: "auto",
        background: "transparent",
        display: "block",
        shapeRendering: "auto"
      }}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g>
        <circle cx="75.9234" cy="50" r="4" fill={secondaryColor}>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1s"
            values="95;35"
            keyTimes="0;1"
            begin="-0.67s"
          ></animate>
          <animate
            attributeName="fill-opacity"
            repeatCount="indefinite"
            dur="1s"
            values="0;1;1"
            keyTimes="0;0.2;1"
            begin="-0.67s"
          ></animate>
        </circle>
        <circle cx="36.3234" cy="50" r="4" fill={secondaryColor}>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1s"
            values="95;35"
            keyTimes="0;1"
            begin="-0.33s"
          ></animate>
          <animate
            attributeName="fill-opacity"
            repeatCount="indefinite"
            dur="1s"
            values="0;1;1"
            keyTimes="0;0.2;1"
            begin="-0.33s"
          ></animate>
        </circle>
        <circle cx="56.1234" cy="50" r="4" fill={secondaryColor}>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1s"
            values="95;35"
            keyTimes="0;1"
            begin="0s"
          ></animate>
          <animate
            attributeName="fill-opacity"
            repeatCount="indefinite"
            dur="1s"
            values="0;1;1"
            keyTimes="0;0.2;1"
            begin="0s"
          ></animate>
        </circle>
      </g>
      <g transform="translate(-15 0)">
        <path
          d="M50 50L20 50A30 30 0 0 0 80 50Z"
          fill={primaryColor}
          transform="rotate(90 50 50)"
        ></path>
        <path
          d="M50 50L20 50A30 30 0 0 0 80 50Z"
          fill={primaryColor}
          transform="rotate(31.6851 50 50)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;45 50 50;0 50 50"
            keyTimes="0;0.5;1"
          ></animateTransform>
        </path>
        <path
          d="M50 50L20 50A30 30 0 0 1 80 50Z"
          fill={primaryColor}
          transform="rotate(-31.6851 50 50)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;-45 50 50;0 50 50"
            keyTimes="0;0.5;1"
          ></animateTransform>
        </path>
      </g>
    </svg>
  );
};

export default Loader;
