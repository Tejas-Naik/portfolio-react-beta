import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap');
    * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-behavior: smooth; 
}

body {
    font-family: "Calibre", "Inter", sans-serif;
    line-height: 1;
    font-weight: 400;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
    overflow-x: hidden;
}
.container {
  /* 1140px */
  max-width: 120rem;
  padding: 0 6.4rem;
  margin: 0 auto;
}

p{
  line-height: 1.7;
}

.heading-primary,
.heading-secondary,
.heading-tertiary {
  font-weight: 700;
  color: ${({ theme }) => theme.colors.heading};
  /* color: #45260a; */
  /* color: #343a40; */
  letter-spacing: -0.5px;
}

.heading-primary {
  font-size: 5.2rem;
  line-height: 1.05;
  margin-bottom: 3.2rem;
}

.heading-secondary {
  font-size: 4.4rem;
  line-height: 1.2;
  margin-bottom: 9.6rem;
}

.heading-tertiary {
  font-weight: 600;
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 3.2rem;
}

.heading-4 {
  font-weight: 600;
  font-size: 2.2rem;
  line-height: 1.2;
  margin-bottom: 2.4rem;
}

.subheading {
  display: block;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textDecor};
  margin-bottom: 1.6rem;
  letter-spacing: 0.75px;
  font-family: 'IBM Plex Mono', monospace;

}

.description {
  font-size: 1.8rem;
}

.btn,
.btn:link,
.btn:visited {
  display: inline-block;

  text-decoration: none;
  font-size: 1.6rem;
  padding: 1.6rem 3.2rem;
  border-radius: 9px;

  /* Only necessary for .btn */
  border: none;
  cursor: pointer;
  font-family: inherit;

  /* Put transition on original "state" */
  /* transition: background-color 0.3s; */
  transition: all 0.3s;
}

.link:link,
.link:visited {
  display: inline-block;
  color: ${({ theme }) => theme.colors.link};
  text-decoration: none;
  padding-bottom: 2px;
  transition: all 0.3s;
  border-bottom: 1px solid transparent;
}

.link:hover,
.link:active {
  border-bottom: 1px solid currentColor;
  color: ${({ theme }) => theme.colors.primary};
}

.btn--outline:link,
.btn--outline:visited {
    /* Trick to add border inside */
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.textDecor};
  background-color: ${({ theme }) => theme.colors.background};
  color:  ${({ theme }) => theme.colors.textDecor};;
}

.btn--outline:hover,
.btn--outline:active {
  background-color: ${({ theme }) => theme.colors.hover};
  /* border: 3px solid #fff; */
}

`