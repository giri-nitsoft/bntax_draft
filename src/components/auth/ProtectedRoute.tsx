import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
    let isAuthenticated = false;
    const tokenString = localStorage.getItem('adminToken');

    if (tokenString) {
        try {
            const token = JSON.parse(tokenString);
            if (token.value === 'logged-in' && token.expiry > new Date().getTime()) {
                isAuthenticated = true;
            } else {
                // Expired or invalid
                localStorage.removeItem('adminToken');
            }
        } catch (e) {
            // Invalid format (likely legacy string), force logout
            localStorage.removeItem('adminToken');
        }
    }

    if (!isAuthenticated) {
        return <Navigate to="/admin/login" replace />;
    }

    return <Outlet />;
}
