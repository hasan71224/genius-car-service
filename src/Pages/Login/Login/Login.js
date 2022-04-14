import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef(" ")
    const passwordRef = useRef(" ")
    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    console.log(user);
    if (user) {
        navigate(from, { replace: true });
    }
    //   else{
    //       navigate('/registration')
    //   }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    let errorElement;
    if (error) {
        errorElement = <div> <p className='text-danger'>Error: {error?.message}</p> </div>
    }

    const navigateRegister = event => {
        navigate('/registration')
    }
    const resetPassword = async () => {

        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast("Please Enter Your Email Address")
        }

    }

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center mt-3 text-primary'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary w-50 mx-auto d-block" type="submit">
                    LogIn
                </Button>
            </Form>
            {errorElement}
            <p className='mt-3'>New To Genius Car? <span className='text-danger' style={{ cursor: "pointer" }} onClick={navigateRegister}>Register</span> </p>

            <p className='mt-3'>Forget Password? <span className='text-primary' style={{ cursor: "pointer" }} onClick={resetPassword}>Reset Password</span></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;