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
        <body>
            <Router>
                <main>
                    <NavBar />
                    <div className="container">
                        <Routes>
                            <Route path="/" element={ <Home /> }/>
                            <Route path="/jblaney-portfolio" element={ <Home /> }/>
                            <Route path="/contact" element={ <Contact /> }/>
                            <Route path="/python-projects" element={ <PythonProjects /> }/>
                            <Route path="/javascript-projects" element={ <JavascriptProjects/> }/>
                        </Routes>
                    </div>
                </main>
                <Footer />
            </Router>
        </body>
    )
}

export default MainContainer;