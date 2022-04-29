import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: '100vh' }}>
            <div
                style={{ height: '500px' }}
                className="w-100 d-flex justify-content-center align-items-center"
            >
                <Spinner animation="border" variant="secondary" />
            </div>
        </div>
    );
};

export default Loading;
