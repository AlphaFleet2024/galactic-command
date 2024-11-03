import React from 'react';
import Registration from '../components/Registration';
import Login from '../components/Login';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Galactic Command</h1>
            <Registration />
            <Login />
        </div>
    );
};

export default Home;
