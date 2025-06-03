import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import Dashboard from './pages/Dashboard';
import HomepageSections from './pages/HomepageSections';
import Users from './pages/Users';
import Settings from './pages/Settings';


const AdminRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/admin" element={<AdminLayout><Dashboard /></AdminLayout>} />
                <Route path="/admin/homepage" element={<AdminLayout><HomepageSections /></AdminLayout>} />
                <Route path="/admin/users" element={<AdminLayout><Users /></AdminLayout>} />
                <Route path="/admin/settings" element={<AdminLayout><Settings /></AdminLayout>} />
                <Route path="*" element={<Navigate to="/admin" />} />
            </Routes>
        </Router>
    );
};

export default AdminRoutes;
