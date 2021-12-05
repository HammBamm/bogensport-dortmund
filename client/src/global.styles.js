import { createGlobalStyle } from 'styled-components';

export const globalScheme = {
  darkgreen: "#1E5631",
  limegreen: "#A4DE02",
  darklimegreen: "#76BA1B",
  maxgreen: "#4C9A2A",
  lightgreen: "#ACDF87",
  mantisgreen: "#68BB59"
}

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    padding: 15px 40px;
    min-height: 100vh;
    background-color: #eae7dc;
    
    
    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }
`;