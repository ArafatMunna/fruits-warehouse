import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Inventory = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/item?limit=6')
            .then((res) => setItems(res.data))
    }, []);
    return (
        <div>
            <h3 className='text-center'>Inventory</h3>
            <div className="row">
                {items.map((item) => (
                    <Item key={item._id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Inventory;
