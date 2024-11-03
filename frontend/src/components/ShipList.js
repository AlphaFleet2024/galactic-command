import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShipList = () => {
    const [ships, setShips] = useState([]);

    const fetchShips = async () => {
        const token = localStorage.getItem('token');
        const userId = 1; // Replace with the actual user ID after login
        const response = await axios.get(`http://localhost:5000/api/ships/${userId}`, {
            headers: { Authorization: token }
        });
        setShips(response.data);
    };

    useEffect(() => {
        fetchShips();
    }, []);

    return (
        <div>
            <h2>Your Ships</h2>
            <ul>
                {ships.map((ship) => (
                    <li key={ship.ship_id}>{ship.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ShipList;
