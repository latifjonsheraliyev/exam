import React, { useContext } from 'react';
import useAuth from '../Components/Hooks/useAuth/useAuth';
import useAdmin from '../Components/Hooks/useAdmin/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../Components/Shared/LoadingSpiner/LoadingSpinner';
import { AuthContext } from '../Provider/AuthProvider';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    console.log("Admin Check:", { user, isAdmin, loading, isAdminLoading }); // Log states for debugging

    if (loading || isAdminLoading) {
        return <LoadingSpinner />;
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to={'/'} state={{ from: location }} replace />;
};

export default AdminRoute;