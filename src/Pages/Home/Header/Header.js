import React from 'react';

const Header = () => {
    const fruits1 = process.env.PUBLIC_URL + 'images/fruits1.jpg';
    return (
        <div className="container mt-3 mb-5">
            <h2 className='text-center text-info mb-3'>Overview</h2>
            <div className="row">
                <div className="col-12 col-md-6">
                    <p className="p-2">
                        We have 11,500 m2 of storage space with variable
                        temperature, all computer monitored. In our warehouses,
                        each delivery is entered into our ERP system (Navision)
                        that ensures that the exact location and status of every
                        item is known at all times. Our ULO (Ultra Low Oxygen)
                        cooling cells are designed to slow down ripening
                        processes by regulating the oxygen level. This is highly
                        beneficial, for example for various types of berries
                        that have an extremely short lifespan between ripening
                        and spoiling.
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <img className="img-fluid" src={fruits1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;
