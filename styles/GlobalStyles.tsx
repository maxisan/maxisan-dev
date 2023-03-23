import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
  html, body {
    padding: 0;
    margin: 0;
    font-family: 'Quicksand', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: ${({theme}) => theme.colors.font.base};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 1.7rem;
    line-height: 1;
  }

  h2 {
    font-size: 1.2rem;
  }

`

export default GlobalStyles;