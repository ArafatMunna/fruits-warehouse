import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

const Subcribtion = () => {
    return (
        <div className="bg-info">
            <div className="card-container mx-auto p-5">
                <h3 className="text-center">Please Subscribe</h3>
                <InputGroup size="lg">
                    <FormControl
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Enter Your Email Address"
                    />
                    <InputGroup.Text id="inputGroup-sizing-lg">
                        Subscribe
                    </InputGroup.Text>
                </InputGroup>
            </div>
        </div>
    );
};

export default Subcribtion;
