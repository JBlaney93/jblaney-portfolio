import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <div className="container nav-bar__container">
                <ul className="nav-bar__ul">
                    <li>
                        <Link to="/" className="nav-bar__links">HOME</Link>
                    </li>
                    <li>
                        <Link to="/projects" className="nav-bar__links">PROJECTS</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav-bar__links">CONTACT</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;