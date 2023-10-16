'use client'

import Link from 'next/link';
import {  usePathname } from 'next/navigation'

interface SidebarLinkProps {
    href: string;
    label: string;
    icon: React.ReactNode;
}

const SidebarLink: React.FC<SidebarLinkProps> =  ({ href, label, icon }) => {
    const pathName = usePathname();
    const isActive = pathName === href;
    
    return (
        <Link href={href}
                className={`flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 ${
                    isActive ? 'bg-gray-200 dark:bg-gray-800' : ''
                }`}
            >
                {icon}
                <span>{label}</span>
        </Link>
    );
};

export default SidebarLink;
