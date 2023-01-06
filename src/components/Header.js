import React from 'react';
import { Brand, HeaderContainer, NavContainer, Nav, Navigation, Btn } from './styles/Header.styled';

function Header() {
    return (
        <HeaderContainer>
            <NavContainer>
                <Brand>
                    RN.Tejas
                </Brand>
                <Navigation>
                    <Nav as="a"><span>01.</span>About</Nav>
                    <Nav as="a"><span>02.</span>Projects</Nav>
                    <Nav as="a"><span>03.</span>Experience</Nav>
                    <Nav as="a"><span>04.</span>Contact</Nav>
                    <Btn as="a">Resume</Btn>
                </Navigation>
            </NavContainer>
        </HeaderContainer>
    )
}

export default Header;
