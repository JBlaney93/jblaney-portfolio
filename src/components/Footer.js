import React from "react";
import styled from 'styled-components';

const FooterText = styled.p`
    line-height: 1.6;
    text-align: center;
    font-size: 14px;
    font-weight: 200;
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
                            <a href="https://github.com/JBlaney93" class="fa fa-github"></a>
                        </li>
                        {/* <li>
                            <a href="jamesblaneydev@gmail.com" class="fa fa-google"></a>
                        </li> */}
                    </ul>
                    <FooterText>©JamesBlaney2023</FooterText>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;