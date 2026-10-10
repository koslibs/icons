import { type SVGProps } from 'react';

export const PenIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M11.25 3.75001L14.25 6.75001M3 12L2.25 15.75L6 15L15.125 5.87501C15.8154 5.18461 15.8154 4.06541 15.125 3.37501L14.625 2.87501C13.9346 2.18461 12.8154 2.18461 12.125 2.87501L3 12Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default PenIcon;
