import React, { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { AuthContext } from '../Contexts/UserContext';

const PublicRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className='text-center my-5'><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div>
    }
    return user && user.uid ? <Navigate to='/' /> : children;
}

export default PublicRoute;