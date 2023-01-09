import React from 'react';
import { ProjectContainer, ProjectImageWrapper, ProjectTextWrapper } from "./styles/Projects.styled";


function Project({ name, desc, img, tags }) {
    return (
        <ProjectContainer>
            <ProjectTextWrapper>
                <span className='subheading'>Featured Project</span>
                <h4 className='heading-4'>{name}</h4>
                <p>{desc}</p>
                <p>{tags}</p>
            </ProjectTextWrapper>

            <ProjectImageWrapper>
                <img src={img} alt={name} />
            </ProjectImageWrapper>
        </ProjectContainer>
    )
}

export default Project