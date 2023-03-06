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
    color: ${({theme}) => theme.colors.font};
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

`

export default GlobalStyles;