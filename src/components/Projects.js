import React from 'react';
import { ProjectsContainer } from './styles/Projects.styled';
import Project from './Project';
import netflix from "../static/projects/netflix.png";
import slack from "../static/projects/slack.png";

function Projects() {
    return (
        <ProjectsContainer>

            <div className='container'>
                <h3 className='heading-tertiary'><span>02.</span>Some things I've built</h3>
                <Project
                    name="Netflix Clone"
                    desc="Netflix clone that fetched data from TMDB server in real-time"
                    tags="Netflix TMDb styled-components"
                    img={netflix}
                />

                <Project
                    name="Slack Clone"
                    desc="Real-time chatting app"
                    tags="Slack Firebase styled-components"
                    img={slack}
                />

            </div>
        </ProjectsContainer>
    )
}

export default Projects;