import { type SVGProps } from 'react';

export const UploadIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8.2194 4.44989C10.0194 4.60489 10.7544 5.52989 10.7544 7.55489V7.61989C10.7544 9.85489 9.8594 10.7499 7.6244 10.7499H4.3694C2.1344 10.7499 1.2394 9.85489 1.2394 7.61989V7.55489C1.2394 5.54489 1.9644 4.61989 3.7344 4.45489"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M6 7.49993V1.80993"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M7.67515 2.92474L6.00015 1.24974L4.32515 2.92474"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default UploadIcon;
