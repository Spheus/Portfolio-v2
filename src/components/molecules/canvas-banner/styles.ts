import { queries } from "lib/styles/media";
import theme from "lib/styles/theme";
import styled from "styled-components";
export const Space = styled.canvas`
  width: 100%;
  height: 100%;
`;

export const Links = styled.div`
  position: absolute;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-flow: column;
  bottom: 0px;
  left: 50px;
  display: none;
  @media ${queries.large} {
    display:inherit;
  }
  color: ${theme.darkTheme.palette.text};
  hr {
    margin: 1rem 10px 0px 8px;
    width: 0.5px;
    height: 100px;
    border: 1px solid transparent;
    border-left: 1px solid ${theme.darkTheme.palette.text};
  }
`;

export const Mail = styled.div`
  font-family: monospace;
  writing-mode: vertical-rl;

  position: absolute;
  margin: 0px;
  display: flex;
  align-items: center;
  flex-flow: row;
  bottom: 5px;
  right: 50px;
  font-size:12px;
  color: ${theme.darkTheme.palette.text};
  hr {
    margin: 1rem 0px 0px 0px;
    width: 0.5px;
    height: 100px;
    border: 1px solid transparent;
    border-left: 1px solid ${theme.darkTheme.palette.text};
  }
`;

export const Link = styled.a`
  margin-top: 1.5rem;
  cursor: pointer;
  font-weight: 100;

  display: flex;
  align-items: center;
  svg {
    height: 18px;
    width: 18px;
  }
`;
