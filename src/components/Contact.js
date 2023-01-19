import React from "react";
import styled from 'styled-components';


const Contact = () => {
    return (
            <div className="container-contact">
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
                    {/* CANNOT GET THIS TO FLEX WRAP FOR MOBILE DISPLAY */}
                </a>
            </div>
    )
}

export default Contact;