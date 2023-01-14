import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="nav-bar__container">            
            <ul className="nav-bar__ul">
                <li>
                    <p className="nav-bar__links">BigBoyBlaney.com</p>
                </li>
                <li>
                    <Link to="/" className="nav-bar__links">Home</Link>
                </li>
                <li>
                    <Link to="/jblaney-portfolio/python-projects" className="nav-bar__links">Python Projects</Link>
                </li>
                <li>
                    <Link to="/jblaney-portfolio/javascript-projects" className="nav-bar__links">JavaScript Projects</Link>
                </li>
                <li>
                    <Link to="/jblaney-portfolio/contact" className="nav-bar__links">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;