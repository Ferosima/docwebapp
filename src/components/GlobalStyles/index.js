import { createGlobalStyle, ThemeProvider } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color_text}; 
    /* transition: background-color 1s,color 1s; */
  } ::-webkit-scrollbar {
      width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      border: ${({ theme }) => theme.scroll.border};
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.scroll.color};
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.scroll.hover};
    }
  `;
