import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom
import './styling/login.css';

export default function LoginForm() {
    // const [isBoss, setIsBoss] = useState(false);
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize useHistory

    function handleChange(event) {
        const { id, value, type, checked } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: type === 'checkbox' ? checked : value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
                navigate('/applications/SmartCalendar/home'); // Redirect to the dashboard upon successful login
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            navigate('/applications/SmartCalendar/home')
            console.log('Network error.Temporarily logging you in.');
            setError('Network error. Temporarily logging you in.');
        }
    };

    return (
        <main>
            <h2>Smart Calendar Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    onChange={handleChange}
                    value={formData.username}
                />
                <br />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <br />
                <br />
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </main>
    );
}
