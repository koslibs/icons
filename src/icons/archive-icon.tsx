import { type SVGProps } from 'react';

export const ArchiveIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M15 2.75H3C2.58579 2.75 2.25 3.08579 2.25 3.5V5.5C2.25 5.91421 2.58579 6.25 3 6.25H15C15.4142 6.25 15.75 5.91421 15.75 5.5V3.5C15.75 3.08579 15.4142 2.75 15 2.75Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M3.75 6.25V14.5C3.75 14.9142 4.0858 15.25 4.5 15.25H13.5C13.9142 15.25 14.25 14.9142 14.25 14.5V6.25M7.25 9.25H10.75"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default ArchiveIcon;
