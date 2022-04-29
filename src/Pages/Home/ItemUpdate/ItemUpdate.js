import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemUpdate = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const { name, img, _id, description, price, quantity, supplierName } = item;

    useEffect(() => {
        axios
            .get(`http://localhost:5000/item/${itemId}`)
            .then((res) => setItem(res.data));
    }, [itemId]);
    return (
        <div className="container mt-5">
            <div className="card">
                <img
                    height={250}
                    src={img}
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier Name: {supplierName}</p>
                    <button
                        onClick={() => navigate(`/inventory/${_id}`)}
                        className="btn btn-info"
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemUpdate;
