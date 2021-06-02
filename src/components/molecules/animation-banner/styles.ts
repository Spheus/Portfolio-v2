import styled, { css, keyframes } from "styled-components";
const pixelSize = 4;

const moveSpritesheet = keyframes`
  {
   from {
      transform: translate3d(0px,0,0)
   }
   to {
      transform: translate3d(-100%,0,0)
   }
`;
export const Character = styled.div`
  width: ${128 * pixelSize}px;
  height: ${128 * pixelSize}px;
  overflow: hidden;
  position: relative;
  margin: 4em auto;
`;

export const CharacterSprite = styled.img`
  animation: ${moveSpritesheet} 0.2s steps(4) infinite;
  width: ${512 * pixelSize}px;
  position: absolute;
  image-rendering: pixelated;
`;
