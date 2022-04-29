import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user, loading, hookError] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });

    useEffect(() => {
        if (hookError) {
            setError(hookError.message);
        }
    }, [hookError]);

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user]);

    const handleRegister = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password);
            setError('');
        } else {
            setError("Password didn't match");
        }
    };
    return (
        <div className="container">
            <div className="mx-auto mt-5 px-4 pt-5 form-container">
                <h2 className="text-secondary text-center mb-4">
                    Please Register
                </h2>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="formBasicConfirmPassword"
                    >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            required
                        />
                    </Form.Group>
                    <p className="text-danger">{error}</p>
                    <Button
                        className="w-50 d-block mx-auto "
                        variant="secondary"
                        type="submit"
                    >
                        Register
                    </Button>
                </Form>
                <p className="text-center mt-3">
                    Already have an account?{' '}
                    <Link className="text-decoration-none" to="/login">
                        Login
                    </Link>
                </p>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Register;
