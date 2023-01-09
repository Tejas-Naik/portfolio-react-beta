import React from 'react';
import { ProjectContainer } from "./styles/Projects.styled"


function Project({ name, desc, img, tags }) {
    return (
        <ProjectContainer>
            <h1>{name}</h1>
            <p>{desc}</p>
            <img src={img} alt={name} />
            <p>{tags}</p>
        </ProjectContainer>
    )
}

export default Project