import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Homepage Sections', path: '/admin/homepage' },
    { name: 'Users', path: '/admin/users' },
    { name: 'Settings', path: '/admin/settings' },
];

const Sidebar = () => {
    const location = useLocation();

    return (
        <div className="w-64 bg-white shadow-lg p-4">
            <h2 className="text-2xl font-bold mb-8">SaleStream Admin</h2>
            <nav className="space-y-4">
                {links.map(link => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className={`block px-4 py-2 rounded-md text-lg ${
                            location.pathname === link.path
                                ? 'bg-emerald-100 text-emerald-700 font-semibold'
                                : 'text-gray-600 hover:bg-gray-100'
                        }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
