import React from "react";
import styled from 'styled-components';



const Contact = () => {
    return (
        <div>
            <header className="header-container">
                <h1 className="primary-header">
                    CONTACT
                </h1>
            </header>
            <article className="header-container-contact">
                <a
                href="https://www.linkedin.com/in/james-blaney-657076261/"
                className="contact-links">
                    LINKED IN
                </a>
                <a
                href="https://github.com/JBlaney93"
                className="contact-links">
                    GIT HUB
                </a>
                <a
                href="#"
                className="contact-links">
                    JAMESBLANEYDEV@GMAIL.COM
                </a>
            </article>
        </div>
    )
}

export default Contact;