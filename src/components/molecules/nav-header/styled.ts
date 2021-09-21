import styled, { keyframes, css } from "styled-components";
import { FiTriangle, FiCodepen, FiMail } from "react-icons/fi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import theme from "lib/styles/theme";
import { queries } from "lib/styles/media";

const { lightTheme, darkTheme } = theme;
export interface IconProps {
  toggle: boolean;
}

const rotate180 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(180deg);
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(180deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const NavigationContainer = styled.nav`
  font-family: monospace;
  padding: 1rem 2rem;
  height: 4.75rem;
  display: flex;
  color: ${(props) => darkTheme.palette.text};
  padding: 0 25px;

  @media ${queries.large} {
    padding: 0 50px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const List = styled.ul`
  margin: 0px 0px 0px 2rem;

  display: flex;
  span {
    color: ${theme.darkTheme.palette.contrastText};
  }

  align-items: center;
  li {
    margin: 0px;
  }
`;
export const NavItem = styled.text`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-right: 1.5rem;
  font-size: 13px;
`;

export const Triangle = styled(FiTriangle)<IconProps>`
  animation: ${({ toggle }) =>
    toggle
      ? css`
          ${rotate180} 0.7s linear forwards;
        `
      : css`
          ${rotate360} 0.7s linear forwards;
        `};

  height: 2rem;
  width: 2rem;
  display: inline-block;
  margin: auto;
  text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
  cursor: pointer;
`;

export const Links = styled.div`
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${queries.large} {
    display: none;
  } ;
`;

export const Link = styled.a`
  margin-left: 1rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  svg {
    height: 24px;
    width: 24px;
  }
`;
