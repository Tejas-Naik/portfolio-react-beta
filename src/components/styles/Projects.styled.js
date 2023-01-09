import styled from "styled-components";

export const ProjectsContainer = styled.div`

    .heading-tertiary > span {
        font-family: 'IBM Plex Mono', monospace;
        color: ${({ theme }) => theme.colors.textDecor};
        font-size: 2.4rem;
    }
`
// Project Component
export const ProjectContainer = styled.div`
    max-width: 120rem;
    display: flex;
    gap: 50px;
`

export const ProjectTextWrapper = styled.div`
    width: 40%;

`;

export const ProjectImageWrapper = styled.div`
    width: 60%;
    img{
        object-fit: contain;
        width: 100%;
    }
`;