import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import Item from '../Item/Item';

const Inventory = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/item?limit=6')
            .then((res) => setItems(res.data));
    }, []);
    return (
        <div>
            {!items ?  <Loading /> : (
                <div>
                    <h3 className="text-center">Inventory</h3>
                    <div className="row">
                        {items.map((item) => (
                            <Item key={item._id} item={item} />
                        ))}
                    </div>
                    <div className="mt-3 text-center">
                        <Link to="/manageinventories">
                            <button className="btn btn-info">
                                Manage Invetories
                            </button>
                        </Link>
                    </div>
                </div>
            )} 
        </div>
    );
};

export default Inventory;
