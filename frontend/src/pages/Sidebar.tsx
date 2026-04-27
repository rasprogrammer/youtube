

import { Home, Play, User, Library, History, Clock, ThumbsUp, Download, Settings, HelpCircle, Flag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sidebar() {

    const menuLinks = [
        {icon: <Home size={24} />, label: 'Home', path: '/'},
        {icon: <Play size={24} />, label: 'Shorts', path: '/shorts'},
        {icon: <User size={24} />, label: 'Subscriptions', path: '/subscriptions'},
        {icon: <Library size={24} />, label: 'Library', path: '/library'},
        {icon: <History size={24} />, label: 'History', path: '/history'},
        {icon: <Clock size={24} />, label: 'Watch Later', path: '/watch-later'},
        {icon: <ThumbsUp size={24} />, label: 'Liked Videos', path: '/liked-videos'},
        {icon: <Download size={24} />, label: 'Downloads', path: '/downloads'},
        {icon: <Settings size={24} />, label: 'Settings', path: '/settings'},
        {icon: <HelpCircle size={24} />, label: 'Help', path: '/help'},
        {icon: <Flag size={24} />, label: 'Send Feedback', path: '/feedback'}
    ];

    return (
        <div className="sidebar w-40 h-screen bg-gray-800 text-white">
            <ul className="sidebar-list">
                {menuLinks.map((link, index) => (
                    <Link to={link.path} key={index} className="flex items-center gap-2 p-2 hover:bg-gray-700 cursor-pointer">
                        {link.icon}
                        <span>{link.label}</span>
                    </Link>
                ))}
            </ul>
        </div>
    );
}
 