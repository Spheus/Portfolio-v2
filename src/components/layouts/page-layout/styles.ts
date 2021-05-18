import styled from "styled-components";
import { queries } from "lib/styles/media";
export const PageLayoutStyled = styled.div`
    position: relative;
    margin: 0px auto;
    min-height: 100vh;
    display: flex;
    flex-flow: column;
  @media ${queries.large} {
    max-width: 1504px;
  }
`;
