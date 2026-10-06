import { type SVGProps } from 'react';

export const UploadIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M12.3291 6.6748C15.0291 6.9073 16.1316 8.2948 16.1316 11.3323V11.4298C16.1316 14.7823 14.7891 16.1248 11.4366 16.1248H6.55413C3.20163 16.1248 1.85913 14.7823 1.85913 11.4298V11.3323C1.85913 8.3173 2.94663 6.9298 5.60163 6.6823"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M9 11.2498V2.71484"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M11.5127 4.3875L9.00017 1.875L6.48767 4.3875"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default UploadIcon;
