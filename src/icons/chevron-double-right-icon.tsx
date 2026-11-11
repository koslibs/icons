import { type SVGProps } from 'react';

export const ChevronDoubleRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M3.6 3.14999L9.45 8.99999L3.6 14.85M8.55 3.14999L14.4 8.99999L8.55 14.85"
            stroke="currentColor"
            strokeLinecap="round"
        />
    </svg>
);

export default ChevronDoubleRightIcon;
