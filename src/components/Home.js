import React from "react";
import styled from 'styled-components';


const p = styled.p`
    margin-bottom: 0.625rem;
    line-height: 1.6;
`
const Header = styled.h1`
    font-weight: 400;
    font-size: 2.375rem;
    margin-bottom: 0.9375rem;
`

const h2 = styled.h2`
    font-weight: 300;
    font-size: 2rem;
    margin-bottom: 0.3125rem;
`

const TertiaryHeader = styled.h2`
    font-weight: 200;
    font-size: 1.375rem;
    margin-bottom: 0.3125rem;
`

const Link = styled.a`
    text-decoration:none;
    font-weight: 300;
    font-size: 1.375rem;
`

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
                    I started my journey as a developer out of curiosity, completing an intorduction to
                    Web Development course on Udemy. After this course, a hobby quickly became a passion for me.
                    I am currently studying Professional Software Development
                    at <a href="https://codeclan.com/" className="codeclan-link">CodeClan</a> in Glasgow.
                </p>
            </article>
        </div>
    )
}

export default Home;