import { type SVGProps } from 'react';

export const CloseCircleIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        role="img"
        focusable="false"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        strokeWidth="1"
        {...props}
    >
        <path
            d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.87499 13.125 1.5 9 1.5C4.87499 1.5 1.5 4.87499 1.5 9C1.5 13.125 4.87499 16.5 9 16.5Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M6.87744 11.1219L11.1224 6.87695"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M11.1224 11.1219L6.87744 6.87695"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default CloseCircleIcon;
