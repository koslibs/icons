import { type SVGProps } from 'react';

export const DangerTriangleIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M9 6.75V10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path
            d="M8.99995 16.0575H4.45495C1.85245 16.0575 0.764949 14.1975 2.02495 11.925L4.36495 7.70996L6.56995 3.74996C7.90495 1.34246 10.0949 1.34246 11.4299 3.74996L13.635 7.71746L15.9749 11.9325C17.2349 14.205 16.1399 16.065 13.5449 16.065H8.99995V16.0575Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M8.99585 12.75H9.00258"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default DangerTriangleIcon;
