import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import Contact from "../components/Contact";

const MainContainer = () => {

    return (
        <div>
            <h1>HELLO MAIN CONTAINER</h1>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={ <Home /> }/>
                    <Route path="/jblaney-portfolio/contact" element={ <Contact /> }/>
                </Routes>
            </Router>
        </div>
    )
}

export default MainContainer;