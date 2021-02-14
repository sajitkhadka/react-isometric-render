import React from "react";

import GameObjects from "../render/GameObjects";

// const { Bay, MetalFrame, Skid } = GameObjects();

// const Bay = Objects["Bay"];

export default function palette({ tileSet, size, setActiveTile, zoom = 1 }) {
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
        boxSizing: "border-box",
        position: "relative",
        border: "1px solid black",
        zIndex: 100,
        backgroundColor: "white",
        margin: "30px auto",
        zoom: `${zoom * 100}%`,
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
