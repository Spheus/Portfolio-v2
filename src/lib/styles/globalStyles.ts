import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const { fonts } = theme;

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.palette.body};
    color: ${({ theme }) => theme.palette.text};
    font-family: ${fonts.primary};
    transition: all 0.50s linear;
  }


`;
export default GlobalStyles;
/* 
  button {
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
    background-color: #1064EA;
    color: #FFFFFF;
    font-family: ${({ theme }) => theme.font};
  }

  button.btn {
    background-color: ${({ theme }) => theme.palette.button.background};
    color: ${({ theme }) => theme.palette.button.text};
  } */