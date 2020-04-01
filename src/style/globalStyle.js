import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
      /* Removal of margins on all elements **/ 
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }

  *:focus {
  outline: 0;
  outline: none;
  }

  html {
      /* Allows you to change the value of 1rem = 10px, same for the queries that follow **/
    font-size: 62.5%;
    box-sizing: border-box;
    /* Creation of variable containing colors **/
    --color-main: ${props => props.theme.colors.main};
    --color-mainDark: ${props => props.theme.colors.mainDark};
    --color-mainLight: ${props => props.theme.colors.mainLight};
    --color-mainLighter: ${props => props.theme.colors.mainLighter};
    --color-text: ${props => props.theme.colors.textColor};
    --color-white: ${props => props.theme.colors.whiteColor};
    --color-validation: ${props => props.theme.colors.validation};
    --color-error: ${props => props.theme.colors.error};
    --shadow: ${props => props.theme.colors.shadow};

    @media ${props => props.theme.mediaQueries.small} {
      font-size: 60%;
    }
    
    @media ${props => props.theme.mediaQueries.smallest} {
      font-size: 55%;
    }
  }

  body {
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    line-height: 1.6;
  }

  a, input, textarea, button {
    outline: none;
    text-decoration: none;
    font-family: inherit;
  }
`;
