import { type SVGProps } from 'react';

export const TickCircleIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        role="img"
        focusable="false"
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        {...props}
    >
        <path
            d="M5.00004 9.16671C7.29171 9.16671 9.16671 7.29171 9.16671 5.00004C9.16671 2.70837 7.29171 0.833374 5.00004 0.833374C2.70837 0.833374 0.833374 2.70837 0.833374 5.00004C0.833374 7.29171 2.70837 9.16671 5.00004 9.16671Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M3.22913 4.99997L4.40829 6.17913L6.77079 3.8208"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default TickCircleIcon;
