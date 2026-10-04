import { type SVGProps } from 'react';

export const DangerTriangleIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        role="img"
        focusable="false"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        {...props}
    >
        <path d="M6 4.5V7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path
            d="M6 10.705H2.97C1.235 10.705 0.509999 9.465 1.35 7.95L2.91 5.14L4.38 2.5C5.27 0.894999 6.73 0.894999 7.62 2.5L9.09 5.145L10.65 7.955C11.49 9.47 10.76 10.71 9.03 10.71H6V10.705Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M5.99725 8.5H6.00174"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default DangerTriangleIcon;
