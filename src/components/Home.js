import React from "react";
import styled from 'styled-components';


const Home = () => {
    return (
        <div className="about-me-container">
            <header className="header-container header-container-home">
                <h1 className="primary-header">
                    JAMES BLANEY
                </h1>
                    <h2 className="secondary-header">
                        SOFTWARE DEVELOPER 
                    </h2>
                            <a href="https://github.com/JBlaney93" className="github-link">
                                GitHub
                            </a>
            </header>
            
            <article>
                <h2 className="tertiary-header">
                    About Me
                </h2>
                <p className="paragraph">
                    I started my journey as a developer out of curiosity, completing an introduction to
                    Web Development course on Udemy. After this course, a hobby quickly became a passion for me.
                    I have recently graduated from the Professional Software Development course
                    at <a href="https://codeclan.com/" className="codeclan-link">CodeClan</a> in Glasgow.
                </p>
            </article>
        </div>
    )
}

export default Home;