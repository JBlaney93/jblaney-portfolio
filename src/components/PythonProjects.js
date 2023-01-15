import React from "react";
import styled from 'styled-components';
// import 'travel-tracker-memories.png' from "../images"
import pic from '../images/travel-tracker-memories.png';
import pic2 from '../images/travel-tracker-countries.png';


const Paragraph = styled.p`
    margin-bottom: 0.625rem;
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

const PythonProjects = () => {
    return (
        <div>
            <Header>Python Projects</Header>
            <SubHeader>Travel Tracker</SubHeader>
            <TertiaryHeader>Python | Flask | PostgreSQL | HTML & CSS</TertiaryHeader>
            <br></br>
            <Paragraph>Travel tracker was my first full project built as an aspiring developer</Paragraph>
            <Paragraph>The brief for this project was to create a CRUD app to track someone's travel adventures.</Paragraph>
            <Paragraph>This application utilizes Python and Flask, PostgreSQL for the databases and HTML5 and CSS for the styling.</Paragraph>
            <Paragraph>This project was completed over just five days, from brief handout to submission. The development process was 
                storied, stressful and also one of the most valuable learning experiences of my developer career thus far.
            </Paragraph>
            <div className="image-container">
                <img src={pic2} className="image-container__main-image" />
                <img src={pic} className="image-container__main-image"/>
            </div>



        </div>
    )
}

export default PythonProjects;