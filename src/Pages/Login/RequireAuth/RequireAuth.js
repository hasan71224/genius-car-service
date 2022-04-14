import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    
    let location = useLocation();

    if(loading){
        return(
            <div style={{height: '300px'}} className='w-100 d-flex justify-content-center align-items-center'>
                <Spinner animation="border" />
            </div>
            
        );
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;