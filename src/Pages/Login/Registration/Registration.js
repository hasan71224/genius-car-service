import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import { Helmet } from 'react-helmet-async';

const Registration = () => {
    // const [agree, setAgree] = useState(false)

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    // const nameRef = useRef(" ")
    // const emailRef = useRef(" ")
    // const passwordRef = useRef (" ")
    const navigate = useNavigate();

    if (user) {
        // navigate('/home')
        console.log('user:', user);
    }


    const navigateLogin = event => {
        navigate('/login')
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const name = nameRef.current.value;
        // const email = emailRef.current.value;
        // const password = passwordRef.current.value;
        // console.log(name, email, password);
        let agree = event.target.terms.checked;
        if (agree) {
            await createUserWithEmailAndPassword(email, password)
            await updateProfile({ displayName: name });
            alert('Updated profile');
            navigate('/home')
        }
    }

    return (
        <div className="w-50 mx-auto">
            <Helmet>
                <title>Register - Genius Car Service</title>
            </Helmet>
            <h2 className='text-center mt-3 text-primary'>Pleas Register Now </h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter your name" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check name='terms' type="checkbox" label="Accept Genius Car Tramps and Condition" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block" type="submit">
                    Register
                </Button>
            </Form>
            <p className='mt-3'>Already Have an Account? <span className='text-danger' style={{ cursor: "pointer" }} onClick={navigateLogin}>please Login</span> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Registration;