import React from "react";
import styled from 'styled-components';

const FooterText = styled.p`
    line-height: 1.6;
    text-align: center;
    /* margin: 5px 0; */
`

const Footer = () => {
    return (
        <footer>
            <div className="container footer__container">
                <nav className="footer">
                    <ul className="footer__ul">
                        <li>
                            <a href="https://www.linkedin.com/in/james-blaney-657076261/" class="fa fa-linkedin"></a>
                        </li>
                        <li>
                            <a href="#" class="fa fa-twitter"></a>
                        </li>
                        <li>
                            <a href="#" class="fa fa-google"></a>
                        </li>
                        <li>
                            <a href="#" class="fa fa-instagram"></a>
                        </li>
                    </ul>
                    <FooterText>Copyright BigBoyBlaney 2023</FooterText>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;