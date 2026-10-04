import { type SVGProps } from 'react';

export const ProfileColorIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        role="img"
        focusable="false"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        {...props}
    >
        <circle cx="6" cy="6" r="6" fill="currentColor" />
    </svg>
);

export default ProfileColorIcon;
