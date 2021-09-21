import styled from "styled-components";
import theme from "lib/styles/theme";

export const OutlinedButton = styled.button`
  color: ${theme.darkTheme.palette.contrastText};
  border-color: ${theme.darkTheme.palette.contrastText};
  border-radius: 5px;
  border: 1px solid;
  padding: 1.25rem 1.75rem;
  background-color: transparent;
  font-family: "San Francisco";
`;
