import React from "react";

import GameObjects from "../render/GameObjects";

// const { Bay, MetalFrame, Skid } = GameObjects();

// const Bay = Objects["Bay"];

export default function palette({
  tileSet,
  position,
  size,
  activeTile,
  setActiveTile,
}) {
  const Sprites = GameObjects(tileSet);
  const { width, height } = size;
  const tiles = [];
  let id = 0;

  for (let y = 0; y < height; y = y + 32) {
    const row = [];
    for (let x = 0; x < width; x = x + 32) {
      row.push({
        x,
        y,
        id: id++,
      });
    }
    tiles.push(row);
  }
  return (
    <div
      id="palette"
      style={{
        // position: "absolute",
        border: "1px solid black",
        top: "200px",
        right: "200px",
        zIndex: 100,
        backgroundColor: "white",
        width: "1152px",
        // height: "128px",
        margin: "30px auto",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Sprites.map((Sprite, i) => {
          return (
            <Sprite
              onClick={() => {
                setActiveTile({ tile: i, spriteSheet: tileSet });
              }}
              hover={true}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}
