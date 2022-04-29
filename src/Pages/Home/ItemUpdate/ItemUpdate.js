import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './ItemUpdate.css';

const ItemUpdate = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const { name, img, description, price, quantity, supplierName } = item;

    useEffect(() => {
        axios
            .get(`http://localhost:5000/item/${itemId}`)
            .then((res) => setItem(res.data));
    }, [itemId, item]);

    const updateItem = async (newQuantity) => {
        await axios
            .put(`http://localhost:5000/item/${itemId}`, { newQuantity })
            .then((res) => {
                setItem(res.data);
                toast.success(res?.data?.message);
            });
    };

    const handleDelivered = () => {
        if (quantity > 0) {
            const newQuantity = quantity - 1;
            updateItem(newQuantity);
        }
    };
    return (
        <div className="container mt-5">
            <div className="mx-auto card-container">
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
        </div>
    );
};

export default ItemUpdate;
