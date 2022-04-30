import React, { useEffect, useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';

const SocialLogin = () => {
    const google = process.env.PUBLIC_URL + 'images/google.png';
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    const [signInWithGoogle, user, loading, hookError] =
        useSignInWithGoogle(auth);

    const [token] = useToken(user);

    useEffect(() => {
        if (hookError) {
            setError(hookError.message);
        }
    }, [hookError]);

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token]);

    const handleGoogleLogin = () => {
        setError('');
        signInWithGoogle();
    };
    return (
        <div>
            <div className="d-flex align-items-center">
                <div
                    style={{ height: '1px' }}
                    className="bg-secondary w-50"
                ></div>
                <p className="mt-2 px-2">or</p>
                <div
                    style={{ height: '1px' }}
                    className="bg-secondary w-50"
                ></div>
            </div>
            <p className="text-danger text-center">{error}</p>
            <div>
                <button
                    onClick={handleGoogleLogin}
                    className="btn btn-info w-50 mx-auto d-block my-2"
                >
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className="px-2">Continue with Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
