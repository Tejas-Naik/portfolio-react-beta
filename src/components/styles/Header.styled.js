import styled from "styled-components";

export const HeaderContainer = styled.div`
    padding: 2.4rem 6.8rem;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textDecor}
`
export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;

`
export const Brand = styled.a`
    font-size: 2.4rem;
    cursor: pointer;
    font-family: 'IBM Plex Mono', monospace;
`
export const Navigation = styled.ul`
    display: flex;
    align-items: center;
    gap: 2.4rem;
`;
export const Nav = styled.li`
    font-size: 1.4rem;
    cursor: pointer;
    color: #c2ccec;

    span {
        color: #64ffda;
        display: inline-block;
        margin-right: 4px;
        font-family: 'IBM Plex Mono', monospace;
    }
`;