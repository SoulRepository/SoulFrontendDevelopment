import { createIcon } from '@chakra-ui/react';

export const InstaStaticIcon = createIcon({
  displayName: 'InstagramIcon',
  defaultProps: { h: '15px', w: '15px' },
  path: (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.55 14H9.45C12.7 14 14 12.7 14 9.45V5.55C14 2.3 12.7 1 9.45 1H5.55C2.3 1 1 2.3 1 5.55V9.45C1 12.7 2.3 14 5.55 14Z"
        stroke="url(#paint0_linear_1_233)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.50156 9.77498C8.75801 9.77498 9.77656 8.75642 9.77656 7.49998C9.77656 6.24353 8.75801 5.22498 7.50156 5.22498C6.24511 5.22498 5.22656 6.24353 5.22656 7.49998C5.22656 8.75642 6.24511 9.77498 7.50156 9.77498Z"
        stroke="url(#paint1_linear_1_233)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.1635 4.25005H11.171"
        stroke="#F80B04"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_233"
          x1="14"
          y1="0.999999"
          x2="4"
          y2="14"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D70063" />
          <stop offset="0.446925" stopColor="#F21100" />
          <stop offset="1" stopColor="#FB9E17" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_233"
          x1="9.5"
          y1="4.99997"
          x2="6"
          y2="9.99997"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E2042A" />
          <stop offset="1" stopColor="#F9600F" />
        </linearGradient>
      </defs>
    </svg>
  ),
});
