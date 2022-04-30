import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const Subcribtion = () => {
    return (
        <div className="bg-info">
            <div className="card-container mx-auto p-5">
                <h3 className="text-center">Please Subscribe</h3>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Enter Your Email Address"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="secondary" id="button-addon2">
                        Button
                    </Button>
                </InputGroup>
            </div>
        </div>
    );
};

export default Subcribtion;
