import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from './AuthContext';

// Higher-order component (HOC) for handling authentication checks
function ProtectedRoute({ element, ...rest }) {
    const { authenticated } = useAuth();

    return authenticated ? (
        <Route {...rest} element={element} />
    ) : (
        <Navigate to="/login" replace />
    );
}

export default ProtectedRoute;
