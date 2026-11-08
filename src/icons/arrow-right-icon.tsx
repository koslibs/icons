import { type SVGProps } from 'react';

export const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M3.375 9H14.0625M9.5625 13.5L14.0625 9L9.5625 4.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default ArrowRightIcon;
