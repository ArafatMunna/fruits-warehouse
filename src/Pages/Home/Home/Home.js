import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Inventory from '../Inventory/Inventory';
import Subcribtion from '../Subscribtion/Subcribtion';

const Home = () => {
    return (
        <div>
            <Banner />
            <Header />
            <Inventory />
            <Subcribtion />
        </div>
    );
};

export default Home;
