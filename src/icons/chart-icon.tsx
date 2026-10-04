import { type SVGProps } from 'react';

export const ChartIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        role="img"
        focusable="false"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        {...props}
    >
        <path
            d="M0.999985 11H11"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M4.875 2V11H7.125V2C7.125 1.45 6.9 0.999996 6.225 0.999996H5.775C5.1 0.999996 4.875 1.45 4.875 2Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M1.5 5V11H3.5V5C3.5 4.45 3.3 4 2.7 4H2.3C1.7 4 1.5 4.45 1.5 5Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M8.49998 7.5V11H10.5V7.5C10.5 6.95 10.3 6.5 9.69998 6.5H9.29998C8.69998 6.5 8.49998 6.95 8.49998 7.5Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default ChartIcon;
