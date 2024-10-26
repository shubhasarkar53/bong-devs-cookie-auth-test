// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../baseUrl';
import axios from 'axios';

function Dashboard() {
    const [dashboardMessage, setDashboardMessage] = useState('');
    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/v1/admin/profile`, {
                    withCredentials: true, // include cookies
                });
    
                setDashboardMessage(response.data.admin.username);
            } catch (error) {
                setDashboardMessage('Unauthorized. Please log in.');
            }
        };
    
        fetchDashboard();
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <p>HI {dashboardMessage}</p>
        </div>
    );
}

export default Dashboard;
