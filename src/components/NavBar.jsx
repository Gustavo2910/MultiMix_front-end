import React from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/NavBar.css';

export default function NavBar(){
    const location = useLocation();

    const isActive = (path) => location.pathname == path;

    return (
        <nav className="navbar">
            <div className="navbar-links">
                <h1>MultiMix</h1>
                <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
                <Link to="/products" className={`nav-link ${isActive('/products') ? 'active' : ''}`}>Produtos</Link>
                <Link to="/login" className={`nav-link ${isActive('/login') ? 'active' : ''}`}>Login</Link>
            </div>
        </nav>
    )
}