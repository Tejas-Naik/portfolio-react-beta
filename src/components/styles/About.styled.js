import styled from "styled-components";

export const SectionAbout = styled.section`
    .container-about {
        width: 1080px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex: 1;
        gap: 3.6rem;
        padding: 3rem;
    }

    .container-text {
        flex: .6;
    }

    .heading-tertiary > span {
        font-family: 'IBM Plex Mono', monospace;
        color: ${({ theme }) => theme.colors.textDecor};
        font-size: 2.4rem;
    }

    .description {
        line-height: 1.5;
        margin-bottom: 2.4rem;
    }

    .container-img {
        flex: .4;
        display: flex;
        justify-content: center;
    }

    .container-img > img {
        object-fit: cover;
        width: 300px;
        height: 300px;
    }

    .skills-list {
        list-style-type: none;
        display: grid;
        grid-template-columns: repeat(2, minmax(140px, 200px));
        gap: 0px 10px;
        padding: 0px;
        margin: 20px 0px 0px;
        overflow: hidden;
    }

    .skills-list {
        position: relative;
        margin-bottom: 10px;
        padding-left: 20px;
        font-size: 1.8rem;
    }

    .skills-list li {
        display: flex;
        align-items: center;
        gap: 1.8rem;
        margin-bottom: 1.2rem;
        font-family: 'IBM Plex Mono', monospace;
    }

    .skills-list span {
        color: ${({ theme }) => theme.colors.textDecor};
        font-size: 1.6rem;
    }
`
