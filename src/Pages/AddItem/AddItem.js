import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const handleAddItem = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplierName = event.target.supplierName.value;
        const img = event.target.img.value;
        const email = user?.email;

        const item = {
            name,
            description,
            price,
            quantity,
            supplierName,
            img,
            email,
        };
        // console.log(item);

        const { data } = await axios.post(
            'https://fruits-warehouse-server.herokuapp.com/item',
            item
        );
        toast.success(data.message);
        event.target.reset();
    };
    return (
        <div className="container">
            <div className="mx-auto mt-5 px-4 pt-5 form-container">
                <h2 className="text-center text-info">Add Item</h2>
                <Form onSubmit={handleAddItem}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Item Name"
                            name="name"
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="formBasicDescription"
                    >
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Description"
                            name="description"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Price"
                            name="price"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicQuantity">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Quantity"
                            name="quantity"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicImg">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Photo URL"
                            name="img"
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="formBasicSupplierName"
                    >
                        <Form.Label>Supplier Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Supplier Name"
                            name="supplierName"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            value={user?.email}
                            placeholder="Enter email"
                            name="email"
                            required
                            readOnly
                            disabled
                        />
                    </Form.Group>
                    <Button
                        className="w-50 d-block mx-auto "
                        variant="info"
                        type="submit"
                    >
                        Add Item
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddItem;
