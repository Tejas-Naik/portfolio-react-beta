import styled from "styled-components";

export const HeaderContainer = styled.div`
    padding: 24px 68px;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textDecor}
`
export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;

`
export const Brand = styled.a`
    font-size: 24px;
    cursor: pointer;
`
export const Navigation = styled.ul`
    display: flex;
    align-items: center;
    gap: 24px;
`;
export const Nav = styled.li`
    font-size: 14px;
    cursor: pointer;
    color: #c2ccec;

    span {
        color: #64ffda;
        display: inline-block;
        margin-right: 4px;
    }
`;
export const Btn = styled.button`
    font-size: 14px;
    padding: 8px 16px;
    border: 1px solid;
    border-radius: 5px;
`