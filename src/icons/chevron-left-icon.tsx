import { type SVGProps } from 'react';

export const ChevronLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M12.375 2.25L5.625 9L12.375 15.75" stroke="currentColor" strokeLinecap="round" />
    </svg>
);

export default ChevronLeftIcon;
