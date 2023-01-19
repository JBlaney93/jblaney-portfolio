import React from "react";
import styled from 'styled-components';
import './Projects.css';
import tt_countries_pic from '../images/travel-tracker-countries.png';
import tt_memories_pic from '../images/travel-tracker-memories.png';


const PythonProjects = () => {
    return (
        <div>
            <div className="header-container">
                <h1 className="primary-header">
                    PROJECTS
                </h1>
            </div>
            
            <div className="projects-container">
                <div className="projects-container__item">
                    <h2 className="secondary-header">
                        Travel Tracker 
                        
                        <a
                         href="https://github.com/JBlaney93/travel_app_flask_solo_project" 
                        className="github-link">
                            GitHub
                        </a>
                    </h2>

                    <h2 className="tertiary-header">Python | Flask | PostgreSQL | HTML & CSS</h2>

                    <article>
                        <p className="paragraph">
                            Travel tracker was my first full project built as an aspiring developer.
                        </p>
                        <p className="paragraph">
                            The brief for this project was to create a CRUD app to track users travel adventures. The project
                            contains a relational database to store this information before it is rendered to the front end.
                        </p>
                        {/* <p className="paragraph">
                            This application utilizes Python and Flask, PostgreSQL for the databases and HTML5 & CSS for the styling.
                        </p> */}
                        <p className="paragraph">
                            The app has a minimal yet pretty layout that enables users to add, view, edit and delete memories.
                        </p>
                        <p className="paragraph">
                            This project was completed over just five days, from brief handout to submission. The development process was
                            storied, stressful and also one of the most valuable learning experiences of my developer career thus far.
                        </p>
                    </article>
                    
                    <div className="image-container">
                        <img src={tt_countries_pic} className="image-container__main-image" />
                        <img src={tt_memories_pic} className="image-container__main-image"/>
                    </div>

                </div>
                
                <div className="projects-container__item">
                    <h2 className="secondary-header">
                        Group Project
                        </h2>
                    <h2 className="tertiary-header">
                        JavaScript | React | MongoDB | HTML & CSS
                    </h2>
                    <p className="paragraph">
                        Construction for this project is currently underway. Coming soon.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PythonProjects;