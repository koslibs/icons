import { type SVGProps } from 'react';

export const GridIcon = (props: SVGProps<SVGSVGElement>) => (
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
                d="M2.25 6.75H15.75M2.25 11.25H15.75M6.75 2.25V15.75M11.25 2.25V15.75M3.75 2.25H14.25C15.0784 2.25 15.75 2.92157 15.75 3.75V14.25C15.75 15.0784 15.0784 15.75 14.25 15.75H3.75C2.92157 15.75 2.25 15.0784 2.25 14.25V3.75C2.25 2.92157 2.92157 2.25 3.75 2.25Z"
                stroke="currentColor"
                strokeLinecap="round"
            />
        </g>
    </svg>
);

export default GridIcon;
