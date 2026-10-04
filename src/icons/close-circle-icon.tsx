import { type SVGProps } from 'react';

export const CloseCircleIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        role="img"
        focusable="false"
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        {...props}
    >
        <path
            d="M4.99998 9.16671C7.29165 9.16671 9.16665 7.29171 9.16665 5.00004C9.16665 2.70837 7.29165 0.833374 4.99998 0.833374C2.70831 0.833374 0.833313 2.70837 0.833313 5.00004C0.833313 7.29171 2.70831 9.16671 4.99998 9.16671Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M3.8208 6.17913L6.17913 3.8208"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M6.17913 6.17913L3.8208 3.8208"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default CloseCircleIcon;
