import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { set } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const myItems = async () => {
            const email = user?.email;

            const url = `http://localhost:5000/myitems?email=${email}`;

            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            'accessToken'
                        )}`,
                    },
                });
                setItems(data);
            } catch (error) {
                if (
                    error.response.status === 401 ||
                    error.response.status === 403
                ) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        };
        myItems();
    }, [user]);

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
            <div style={{ height: '100vh' }}>
                <h3 className="text-center">My Items</h3>
                <h5 className="text-center mb-4">{user?.email}</h5>
                <div className="text-center">
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
                                <tr>
                                    <td>No Data Found</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default MyItems;
