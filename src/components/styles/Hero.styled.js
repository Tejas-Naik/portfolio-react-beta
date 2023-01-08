import styled from "styled-components";

export const HeroSection = styled.section`
    min-height: 80vh;
    margin: 2.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    margin-bottom: 6.4rem;

    .subheading {
        margin-bottom: 2rem;
        font-family: 'IBM Plex Mono', monospace;
    }

    .fade {
        color: ${({ theme }) => theme.colors.primary};
    }

    p {
        font-size: 1.6rem;
        max-width: 54rem;
        margin-bottom: 4.8rem;
    }

    button {
        background: transparent;
        display: inline-block;
        font-family: 'IBM Plex Mono', monospace;
    }

    .links-left {
        position: fixed;
        top: 50%;
        left: 3%;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    
    .links-left > a {
        font-size: large;
    }

    .link-icon {
        font-size: large;
    }

    .vl {
        border-left: 1px solid ${({ theme }) => theme.colors.primary};
        height: 300px;
        align-self: center;
    }

    .links-right {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        position: fixed;
        right: 3%;
        top: 50%;
    }

    .email {
        font-size: 18px;
        writing-mode: vertical-rl;
        text-orientation: mixed;
    }
`
