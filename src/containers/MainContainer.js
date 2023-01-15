import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import PythonProjects from "../components/PythonProjects";
import JavascriptProjects from "../components/JavascriptProjects";

const MainContainer = () => {

    return (
        <div >
            <Router>
                <NavBar />
                <div className="container">
                    <Routes>
                        <Route path="/jblaney-portfolio/home" element={ <Home /> }/>
                        <Route path="/jblaney-portfolio/contact" element={ <Contact /> }/>
                        <Route path="/jblaney-portfolio/python-projects" element={ <PythonProjects /> }/>
                        <Route path="/jblaney-portfolio/javascript-projects" element={ <JavascriptProjects/> }/>
                    </Routes>
                </div>
                <Footer />
            </Router>
        </div>
    )
}

export default MainContainer;