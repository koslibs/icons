import { type SVGProps } from 'react';

export const ChartLineIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        role="img"
        focusable="false"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        {...props}
    >
        <g>
            <path
                d="M2.25 2.25V14.25C2.25 14.6478 2.40804 15.0294 2.68934 15.3107C2.97064 15.592 3.35218 15.75 3.75 15.75H15.75M14.25 6.75L10.5 10.5L7.5 7.5L5.25 9.75"
                stroke="currentColor"
                strokeLinecap="round"
            />
        </g>
    </svg>
);

export default ChartLineIcon;
