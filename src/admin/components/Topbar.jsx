import React from 'react';

const Topbar = () => {
    return (
        <header className="h-16 bg-white shadow px-6 flex items-center justify-between">
            <h1 className="text-xl font-semibold">Admin Panel</h1>
            <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">admin@example.com</span>
                <img src="/avatar.png" alt="Admin Avatar" className="w-8 h-8 rounded-full" />
            </div>
        </header>
    );
};

export default Topbar;
