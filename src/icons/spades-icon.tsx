import { type SVGProps } from 'react';

export const SpadesIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M9 2.25C6.75 4.5 2.25 7.875 2.25 10.125C2.25 13.5 6.75 14.625 8.325 12.15L7.3125 15.75H10.6875L9.675 12.15C11.25 14.625 15.75 13.5 15.75 10.125C15.75 7.875 11.25 4.5 9 2.25Z"
            fill="currentColor"
        />
    </svg>
);

export default SpadesIcon;
