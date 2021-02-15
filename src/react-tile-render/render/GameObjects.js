import Sprite from "../sprite/index";
// import frame from "../assets/sprites/frame.png";
import pallet from "../../assets/sprites/pallet.png";
// import spritesheet from "../../assets/img/2d.png";
import React from "react";

export default function GameObjects(spritesheet, tHeight, tWidth) {
  const Sprites = [];

  for (let i = 0; i < 10 * tHeight; i = i + tHeight) {
    for (let j = 0; j < 10 * tWidth; j = j + tWidth) {
      Sprites.push((props) => (
        <Sprite
          image={spritesheet}
          data={{ y: i, x: j, h: tHeight, w: tWidth }}
          {...props}
        />
      ));
    }
  }

  return Sprites;
}
