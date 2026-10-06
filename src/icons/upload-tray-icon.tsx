import { type SVGProps } from 'react';

export const UploadTrayIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M9 2.25V11.25M12.75 6L9 2.25L5.25 6M15.75 11.25V14.25C15.75 14.6478 15.5919 15.0293 15.3107 15.3107C15.0293 15.5919 14.6478 15.75 14.25 15.75H3.75C3.35217 15.75 2.97064 15.5919 2.68934 15.3107C2.40804 15.0293 2.25 14.6478 2.25 14.25V11.25"
            stroke="currentColor"
            strokeLinecap="round"
        />
    </svg>
);

export default UploadTrayIcon;
