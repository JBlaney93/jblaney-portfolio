import React from "react";
import styled from 'styled-components';


const Paragraph = styled.p`
    margin-bottom: 0.625rem;
    line-height: 1.6;
`
const Header = styled.h1`
    font-weight: 400;
    font-size: 2.375rem;
    margin-bottom: 0.9375rem;
`

const SubHeader = styled.h2`
    font-weight: 300;
    font-size: 2rem;
    margin-bottom: 0.3125rem;
`

const TertiaryHeader = styled.h2`
    font-weight: 200;
    font-size: 1.375rem;
    margin-bottom: 0.3125rem;
`

const Contact = () => {
    return (
        <div>
            <Header>Contact</Header>
            <SubHeader>Welcome to the contact page</SubHeader>
            <TertiaryHeader>linked in? github? twitter? email?</TertiaryHeader>
        </div>
    )
}

export default Contact;