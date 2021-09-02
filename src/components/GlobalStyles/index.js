import { createGlobalStyle, ThemeProvider } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color_text}; 
    /* transition: background-color 1s,color 1s; */
  }
  `;
