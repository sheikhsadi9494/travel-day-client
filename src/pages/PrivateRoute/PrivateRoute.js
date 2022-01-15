import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const {user, isLoading} = useAuth();
    const location = useLocation();

    if(isLoading){
        return <Spinner animation="border" variant="dark" />
    }

    return user?.email ? children : <Navigate to="/signin" state={{ from : location }} />
};

export default PrivateRoute;