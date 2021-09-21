import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const { fonts, queries } = theme;

const GlobalStyles = createGlobalStyle`
  body {
    font-size:20px;
    font-family: "Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;;
    transition: all 0.50s linear;
    font-weight: 400;
    margin: 0px;
    
    overflow:hidden;
    h1, h2, h3, h4, h5, h6{
      font-weight:600;

    }
   a {
     @media ${queries.large}{
       
     }
   }

    & ::-webkit-scrollbar {
  display: none;
    }
    @media (max-width: 480px) {
      font-size: 18px
    }

  
  }

  @font-face {
  font-family: "San Francisco";
  font-weight: 400;
  src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");
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
