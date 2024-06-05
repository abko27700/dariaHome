import React from 'react';
// import { Link } from 'react-router-dom';
import './styling/AppLanding.css';

export default function AppLanding() {
    return (
        <main className="app-landing-container">
            <h2>Applications</h2>
            <div className="buttons-container">
                <button onClick={() => window.location.href = '/applications/SmartCalendar'}>Smart Calendar</button>
            </div>
        </main>
    );
}
