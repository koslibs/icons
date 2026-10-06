import { type SVGProps } from 'react';

export const ChevronRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M5.625 2.25L12.375 9L5.625 15.75" stroke="currentColor" strokeLinecap="round" />
    </svg>
);

export default ChevronRightIcon;
