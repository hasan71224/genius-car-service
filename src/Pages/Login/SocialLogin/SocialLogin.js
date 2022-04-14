import React from 'react';
import social2 from '../../../images/social/social2.png'
import social3 from '../../../images/social/social3.png'
import social1 from '../../../images/social/social1.png'
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    let loadingElement;
    
    if (error || error1) {
        errorElement = <div> <p className='text-danger'>Error: {error?.message} {error1?.message}</p> </div>
    }
    if (loading || loading1) {
        loadingElement = <div> <p>Loading...</p> </div>
      }

    if (user || user1) {
        navigate("/home")
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mx-3 mt-2'>OR</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            {loadingElement}

            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='w-50 btn btn-primary d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={social2} alt="" />
                    <span className='px-3 mt-2'>Google SignIn</span>
                </button>

                <button

                    className='w-50 btn btn-primary d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={social3} alt="" />
                    <span className='px-3 mt-2'>Facebook SignIn</span>
                </button>

                <button
                    onClick={() => signInWithGithub()}
                    className='w-50 btn btn-primary d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={social1} alt="" />
                    <span className='px-4 mt-2'>Github SignIn</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;