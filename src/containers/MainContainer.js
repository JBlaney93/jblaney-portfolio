import React from "react";
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

const MainContainer = () => {

    return (
        <body>
            <HashRouter>
                <main>
                    <NavBar />
                    <div className="container">
                        <Routes>
                            <Route path="/" element={ <Home /> }/>
                            <Route path="/jblaney-portfolio" element={ <Home /> }/>
                            <Route path="/contact" element={ <Contact /> }/>
                            <Route path="/projects" element={ <Projects /> }/>
                        </Routes>
                    </div>
                </main>
                <Footer />
            </HashRouter>
        </body>
    )
}

export default MainContainer;