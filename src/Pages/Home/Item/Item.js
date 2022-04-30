import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
    const { name, img, _id, description, price, quantity, supplierName } = item;

    const navigate = useNavigate();
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 g-5">
            <div className="card shadow">
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

export default Item;
