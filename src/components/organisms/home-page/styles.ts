import styled from "styled-components";
import theme from "lib/styles/theme";

const { lightTheme, darkTheme, queries } = theme;
export const Parragraph = styled.p`
  max-width: 540px;
  font-size: 20px;
  margin-top: 1rem;
  color: ${darkTheme.palette.text};
  line-height: 2vmax;
`;

export const About = styled.section`
  margin: 0px auto;
  padding: 100px 0px;
  max-width: 1000px;
  text-align: left;
`;

export const Main = styled.main`
max-width: 100%;
  @media ${queries.large} {
    padding: 0 150px;
  } ;
`;

export const Name = styled.h1`
  margin: 0px;

  font-size: clamp(40px, 8vw, 80px);

  color: ${(props) => darkTheme.palette.header};
`;

export const SubHeader = styled.h3`
  margin: 0px;

  font-size: 2rem;
  font-size: clamp(40px, 8vw, 80px);

  color: ${(props) =>
    props.theme.isDark
      ? lightTheme.palette.contrastText
      : darkTheme.palette.contrastText};
`;
