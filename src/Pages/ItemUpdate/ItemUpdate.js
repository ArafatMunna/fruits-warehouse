import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './ItemUpdate.css';

const ItemUpdate = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const { name, img, description, price, quantity, supplierName } = item;

    useEffect(() => {
        axios
            .get(`https://fruits-warehouse-server.herokuapp.com/item/${itemId}`)
            .then((res) => setItem(res.data));
    }, [itemId, item]);

    const updateItem = (newQuantity) => {
        axios
            .put(
                `https://fruits-warehouse-server.herokuapp.com/item/${itemId}`,
                { newQuantity }
            )
            .then((res) => {
                setItem(res.data);
                toast.success(res?.data?.message);
            });
    };

    const handleDelivered = () => {
        if (quantity > 0) {
            const newQuantity = parseInt(quantity) - 1;
            updateItem(newQuantity);
        }
    };

    const handleRestock = (event) => {
        event.preventDefault();

        const addedQuantity = event.target.quantity.value;
        if (addedQuantity > 0) {
            const newQuantity = parseInt(quantity) + parseInt(addedQuantity);
            updateItem(newQuantity);
            event.target.reset();
        } else {
            toast.error('Please give a positve number greater than 0');
        }
    };
    return (
        <div className="container mt-5">
            <div className="mx-auto card-container shadow">
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <p>Price: ${price}</p>
                        <p>Quantity: {quantity}</p>
                        <p>Supplier Name: {supplierName}</p>
                        {quantity === 0 ? <h5>Sold Out</h5> : ''}
                        <button
                            onClick={handleDelivered}
                            className="btn btn-info"
                        >
                            Delivered
                        </button>
                    </div>
                </div>
            </div>
            <div className="mx-auto shadow card-container mt-3 p-3">
                <Form onSubmit={handleRestock}>
                    <Form.Group className="mb-3" controlId="formBasicQuantity">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Quantity"
                            name="quantity"
                            required
                        />
                    </Form.Group>
                    <Button
                        className="w-50 d-block mx-auto "
                        variant="info"
                        type="submit"
                    >
                        Restock Item
                    </Button>
                </Form>
            </div>
            <div className="mt-3 text-center">
                <Link to="/manageinventories">
                    <button className="btn btn-info">Manage Invetories</button>
                </Link>
            </div>
        </div>
    );
};

export default ItemUpdate;
