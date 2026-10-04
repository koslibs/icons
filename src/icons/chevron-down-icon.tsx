import { type SVGProps } from 'react';

export const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        role="img"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        {...props}
    >
        <g>
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </g>
    </svg>
);

export default ChevronDownIcon;
