import { type SVGProps } from 'react';

export const DiamondsIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M9 2.25L15.75 9L9 15.75L2.25 9L9 2.25Z" fill="currentColor" />
    </svg>
);

export default DiamondsIcon;
