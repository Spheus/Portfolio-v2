import styled from "styled-components";
import theme from "lib/styles/theme";

const { lightTheme, darkTheme } = theme;
export const Space = styled.canvas`
  width: 100%;
  max-height: 440px;
`;

export const Name = styled.h1`
  margin: 0px;
  text-align: center;
  position: relative;
  bottom: 250px;
  z-index: 2;
  font-size: 4rem;
  font-weight: 400;

  color: ${(props) =>
    props.theme.isDark ? lightTheme.palette.text : darkTheme.palette.text};
`;

export const SubHeader = styled.h2`
  margin: 0px;
  text-align: center;
  position: relative;
  bottom: 250px;
  z-index: 2;
  font-size: 2rem;
  font-weight: 300;

  color: ${(props) =>
    props.theme.isDark
      ? lightTheme.palette.contrastText
      : darkTheme.palette.contrastText};
`;
