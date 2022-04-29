import React, { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const form = location.state?.from?.pathname || '/';

    const [signInWithEmailAndPassword, user, loading, hookError] =
        useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    useEffect(() => {
        if (hookError) {
            setError(hookError.message);
        }
    }, [hookError]);

    useEffect(() => {
        if (user) {
            navigate(form, { replace: true });
        }
    }, [user]);

    const handleLogin = (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
        setError('');
    };

    const resetPassword = async (event) => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Sent Email');
        } else {
            toast.error('Please enter your email address');
        }
    };
    return (
        <div className="container">
            <div className=" mx-auto mt-5 form-container px-4 pt-5">
                <h2 className="text-secondary text-center mb-4">
                    Please Login
                </h2>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            ref={emailRef}
                            type="email"
                            placeholder="Enter email"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            ref={passwordRef}
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </Form.Group>
                    <p className="text-danger">{error}</p>
                    <Button
                        className="w-50 mx-auto d-block"
                        variant="secondary"
                        type="submit"
                    >
                        Login
                    </Button>
                </Form>
                <div className="d-flex justify-content-between mt-4 flex-wrap">
                    <p>
                        New to Fruits Warehouse?{' '}
                        <Link className="text-decoration-none" to="/register">
                            Register
                        </Link>
                    </p>
                    <p>
                        Forget Password?{''}
                        <button
                            onClick={resetPassword}
                            className="text-primary border-0 reset-btn"
                        >
                            Reset Password
                        </button>
                    </p>
                </div>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;
