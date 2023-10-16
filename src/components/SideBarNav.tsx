import React from 'react';
import SideBarLink from './SideBarLink';
import { TwitterIcon } from './Icons';

const SidebarNav = () => {
    const links = [
        { title: 'Home', icon: <TwitterIcon.Home /> , path: '/' },
        { title: 'Explore', icon: <TwitterIcon.Search /> , path: '/explore' },
        { title: 'Notifications', icon: <TwitterIcon.Bell/>, path: '/notifications' },
        { title: 'Messages', icon: <TwitterIcon.Envelope />, path: '/messages' },
        { title: 'Bookmarks', icon: <TwitterIcon.Bookmark />, path: '/bookmarks' },
        { title: 'Lists', icon: <TwitterIcon.List />, path: '/lists' },
        { title: 'Profile', icon: <TwitterIcon.User />, path: '/profile' },
        { title: 'More', icon: <TwitterIcon.More />, path: '/more' },
    ];
    

    return (
        <nav className="sidebar-nav">
            <ul className="sidebar-nav__list">
                {links.map((link) => (
                    <SideBarLink key={link.title} label={link.title} icon={link.icon} href={link.path} />
                ))}
            </ul>
        </nav>
    );
};

export default SidebarNav;
