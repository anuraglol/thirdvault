import { FC } from "react";

const PlusIcon: FC = () => {
  return (
    <svg
      width="37"
      height="33"
      viewBox="0 0 37 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="20"
        cy="20"
        r="19"
        stroke="#8158D0"
        strokeWidth="2"
        strokeDasharray="10 10"
      />
      <path
        d="M20 13V27"
        stroke="#8158D0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 20H27"
        stroke="#8158D0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { PlusIcon };
