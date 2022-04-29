import React from 'react';

const Item = ({ item }) => {
    const { name, img, _id, description, price, quantity, supplierName } = item;
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 g-5">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier Name: {supplierName}</p>
                    <button>Update</button>
                </div>
            </div>
        </div>
    );
};

export default Item;
