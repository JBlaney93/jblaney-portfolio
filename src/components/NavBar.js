import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <div className="container nav-bar__container">
                <ul className="nav-bar__ul">
                    <li>
                        <p className="nav-bar__links">BigBoyBlaney.com</p>
                    </li>
                    <li>
                        <Link to="/jblaney-portfolio/home" className="nav-bar__links">Home</Link>
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
        </nav>
    )
}

export default NavBar;