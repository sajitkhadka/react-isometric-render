import Sprite from "../sprite/index";
// import frame from "../assets/sprites/frame.png";
import pallet from "../../assets/sprites/pallet.png";
// import spritesheet from "../../assets/img/2d.png";
import React from "react";

export default function GameObjects(spritesheet) {
  const Sprites = [];

  for (let i = 0; i < 10 * 64; i = i + 64) {
    for (let j = 0; j < 10 * 64; j = j + 64) {
      Sprites.push((props) => (
        <Sprite
          image={spritesheet}
          data={{ y: i, x: j, h: 64, w: 64 }}
          {...props}
        />
      ));
    }
  }

  return Sprites;
}
