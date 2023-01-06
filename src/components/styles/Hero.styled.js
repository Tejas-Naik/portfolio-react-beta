import styled from "styled-components";

export const HeroSection = styled.section`
    min-height: 80vh;
    margin: 2.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .subheading {
        margin-bottom: 2rem;
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
    }
`
