import React from "react";
import { Character, CharacterSprite } from "./styles";
// @ts-ignore
import devSprite from "images/dev_sprite.png";

function AnimatedBanner() {
  return (
    <Character>
      <CharacterSprite src={devSprite}></CharacterSprite>
    </Character>
  );
}

export default AnimatedBanner;
