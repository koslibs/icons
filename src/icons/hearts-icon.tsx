import { type SVGProps } from 'react';

export const HeartsIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M9 15.75C7.3125 13.4865 2.25 9.52545 2.25 6.13024C2.25 1.60329 7.3125 1.03742 9 4.43264C10.6875 1.03742 15.75 1.60329 15.75 6.13024C15.75 9.52545 10.6875 13.4865 9 15.75Z"
            fill="currentColor"
        />
    </svg>
);

export default HeartsIcon;
