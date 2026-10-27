import { type SVGProps } from 'react';

export const CalendarIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M5.625 2.25V3.9375M5.625 3.9375V5.625M5.625 3.9375H3.9375C3.63913 3.9375 3.35298 4.05603 3.142 4.267C2.93103 4.47798 2.8125 4.76413 2.8125 5.0625V7.3125M5.625 3.9375H12.375M2.8125 7.3125H15.1875M2.8125 7.3125V14.0625C2.8125 14.3609 2.93103 14.647 3.142 14.858C3.35298 15.0689 3.63913 15.1875 3.9375 15.1875H14.0625C14.3609 15.1875 14.647 15.0689 14.858 14.858C15.0689 14.647 15.1875 14.3609 15.1875 14.0625V7.3125M12.375 3.9375V2.25M12.375 3.9375V5.625M12.375 3.9375H14.0625C14.3609 3.9375 14.647 4.05603 14.858 4.267C15.0689 4.47798 15.1875 4.76413 15.1875 5.0625V7.3125"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default CalendarIcon;
