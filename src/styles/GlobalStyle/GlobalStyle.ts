import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,::before,::after{
    box-sizing: border-box;
  }

  html {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  
  body {
    background-color: ${(props) => props.theme.colors.secondaryClean};
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
    font: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
    font: inherit;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  button {
    border: none;
    cursor: pointer;
    background-color: transparent;
    padding: 0;
  }
`;

export default GlobalStyle;
