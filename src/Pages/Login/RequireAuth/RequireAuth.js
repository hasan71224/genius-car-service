import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    let location = useLocation();

    if (loading) {
        return (
            <div style={{ height: '300px' }} className='w-100 d-flex justify-content-center align-items-center'>
                <Spinner animation="border" />
            </div>

        );
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user.emailVerified) {
        return <div>
            <h1 className='text-danger'>Your Email Not Verified!!!</h1>
            <h3 className='text-success'>Please Verify your email address</h3>
            <button
                className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Resend Verify email
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }

    return children;
};

export default RequireAuth;