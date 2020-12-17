import React from "react";
import { Link } from "react-router-dom"
import "./Navigation.css"

function Navigation() {
    return <div className="nav">
        <ul className="nav-ul">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </div>
}

export default Navigation;