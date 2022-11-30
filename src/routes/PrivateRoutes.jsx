import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../contexts/AuthContext';
import { toast } from "react-hot-toast";
const PrivateRoutes = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(authContext);
    const toastId = toast.loading("Please wait...");
    if(loading){
        return toastId;
    };
    toast.dismiss();
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;;
    };
    return children;
};

export default PrivateRoutes;