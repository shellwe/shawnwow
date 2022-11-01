import React from 'react';
import Project from "./Project";

const Projects = (props) => {
    return (
        <section id="projects">
            <Project imageMobile={'bootstrap-5-logo-icon'} imageDesktop={'bootstrap-5-logo-icon'} title={'Some Title'}>Some text in here</Project>
        </section>
    )
}

export default Projects;