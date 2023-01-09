import React from 'react';
import { ProjectContainer } from './styles/Projects.styled';
import Project from './Project';
import netflix from "../static/projects/netflix.png"

function Projects() {
    return (
        <ProjectContainer>

            <div className='container'>
                <h3 className='heading-tertiary'><span>02.</span>Some things I've built</h3>
                <Project
                    name="Netflix Clone"
                    desc="Netflix clone that fetched data from TMDB server in real-time"
                    tags="Netflix TMDb styled-components"
                    img={netflix}
                />
            </div>
        </ProjectContainer>
    )
}

export default Projects;