import { type SVGProps } from 'react';

export const ChevronDoubleLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14.4 3.14999L8.54998 8.99999L14.4 14.85M9.44998 3.14999L3.59998 8.99999L9.44998 14.85"
            stroke="currentColor"
            strokeLinecap="round"
        />
    </svg>
);

export default ChevronDoubleLeftIcon;
