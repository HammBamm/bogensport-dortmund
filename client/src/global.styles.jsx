import { createGlobalStyle } from 'styled-components';

import bgWiese from './assets/bg/bg-wiese.jpg';

export const globalScheme = {
  darkgreen: "#1E5631",
  limegreen: "#A4DE02",
  darklimegreen: "#76BA1B",
  maxgreen: "#4C9A2A",
  lightgreen: "#ACDF87",
  mantisgreen: "#68BB59",
  background: "#E8E8E8"
}

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    padding: 20px 40px;
    min-height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;

    background: ${globalScheme.background};
    flex: 1; 
    
    @media screen and (max-width: 800px) {
      padding: 10px 10px;
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

export const GlobalStyleLanding = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    padding: 20px 40px;
    min-height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;

    background: radial-gradient(circle, transparent 60%, var(--color-v) 80%),
      linear-gradient(to right, var(--color), var(--color)),
      var(--image2);

    background-position: center center;
    background-size: cover;
    background-blend-mode: 
      var(--blend-top, normal),
      var(--blend-bottom, saturation),
      normal;
    
    --image2: url(${bgWiese});
    
    --color-v: ${globalScheme.background};
    --color: transparent;
    
    flex: 1;
    
    
    @media screen and (max-width: 800px) {
      padding: 10px 10px;
      background: ${globalScheme.background};
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