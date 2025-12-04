import { createGlobalStyle } from "styled-components"; 

export const GlobalStyle = createGlobalStyle`

  :root {
    font-family: "Poppins", sans-serif;
    background: ${(props) => props.theme.colors.main.bg};
    color: ${(props) => props.theme.colors.main.text};
    margin: 30px;
    box-sizing: border-box;
  }

  p {
  margin: 0;
  }
`;