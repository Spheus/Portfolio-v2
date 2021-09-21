import styled from "styled-components";
export const PageLayoutStyled = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
`;

export const AnimatedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  position: relative;
`;
