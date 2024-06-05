import React from 'react';
import { Link } from 'react-router-dom';
// import './styling/Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="navbar-brand">ProjectDaria</Link>
            </div>
            <div className="navbar-right">
                <Link to="/prototypes" className="navbar-item">Prototypes</Link>
                <Link to="/applications" className="navbar-item">Applications</Link>
            </div>
        </nav>
    );
}
