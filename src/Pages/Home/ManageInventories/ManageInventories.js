import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageInventories = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/item').then((res) => {
            setItems(res.data);
        });
    }, [items]);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`;

            axios.delete(url).then((res) => {
                const { data } = res;
                if (data?.deletedCount > 0) {
                    const remaining = items.filter((item) => item._id !== id);
                    setItems(remaining);
                }
            });
        }
    };

    return (
        <div className="container mt-5">
            <h3 className="text-center mb-4">Manage Inventories</h3>
            <div className="text-center" style={{ height: '100vh' }}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Supplier Name</th>
                            <th>Image</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items?.length ? (
                            items.map((item) => {
                                return (
                                    <tr>
                                        <td>{item?.name}</td>
                                        <td>{item?.price}</td>
                                        <td>{item?.quantity}</td>
                                        <td>{item?.supplierName}</td>
                                        <td>
                                            <img
                                                width={40}
                                                src={item?.img}
                                                alt=""
                                            />
                                        </td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    handleDelete(item?._id)
                                                }
                                                className="btn btn-danger"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <div></div>
                        )}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageInventories;
