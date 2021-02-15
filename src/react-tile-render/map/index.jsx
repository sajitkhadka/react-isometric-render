import React, { useMemo, useState, useEffect, useRef } from "react";

import GameObjects from "../render/GameObjects";
import RenderObjects from "../render/RenderObjects";

export function Sprite({
  number,
  spriteSheet,
  height = 64,
  width = 64,
  ...props
}) {
  const ShowSprite = GameObjects(spriteSheet, height, width)[number];
  return <ShowSprite {...props} />;
}

export default React.memo(function Render({
  activeTile,
  tileMap,
  image,
  zoom = 1,
  background,
  children,
  addTile,
  onClick,
  origin,
  tileSize,
  worldSize,
}) {
  const vTileSize = { ...tileSize };

  const vWorldSize = { ...worldSize };
  const vOrigin = { ...origin };

  const toScreen = (x, y) => {
    return {
      x: vOrigin.x * vTileSize.x + (x - y) * (vTileSize.x / 2),
      y: vOrigin.y * vTileSize.y + (x + y) * (vTileSize.y / 2),
    };
  };

  // console.log(pWorld);
  const [vSelected, setVSelected] = useState({ x: 0, y: 0 });
  const [vScreen, setVScreen] = useState({ x: 0, y: 0 });

  const position = function (x, y, x1, y1, x2, y2) {
    return (x - x1) * (y2 - y1) - (y - y1) * (x2 - x1);
  };

  let dimension = {
    x: vTileSize.x * vWorldSize.x,
    y: vTileSize.y * vWorldSize.y,
  };

  return (
    <div
      style={{
        boxSizing: "border-box",
        position: "relative",
        border: "1px solid gray",
        backgroundImage: "url(" + background + ")",
        backgroundRepeat: "no-repeat",
        width: dimension.x,
        height: dimension.y + 64,
        zoom: `${zoom * 100}%`,
      }}
      onClick={() => {
        console.log("clicked");
        onClick({ x: vSelected.x, y: vSelected.y });
      }}
      onMouseMove={(e) => {
        var bounds = e.currentTarget.getBoundingClientRect();
        var mx = e.clientX / zoom - bounds.left;
        var my = e.clientY / zoom - bounds.top;

        let cx = parseInt(mx / vTileSize.x);
        let cy = parseInt(my / vTileSize.y);

        let ox = mx % vTileSize.x,
          oy = my % vTileSize.y;

        let vSelected = {
            x: cy - vOrigin.y + (cx - vOrigin.x),
            y: cy - vOrigin.y - (cx - vOrigin.x),
          },
          newVSelected = { x: vSelected.x, y: vSelected.y };
        if (ox < vTileSize.x / 2 && oy < vTileSize.y / 2) {
          if (position(ox, oy, vTileSize.x / 2, 0, 0, vTileSize.y / 2) < 0) {
            newVSelected.x -= 1;
          }
        } else if (ox < vTileSize.x / 2 && oy > vTileSize.y / 2) {
          if (
            position(ox, oy, 0, vTileSize.y / 2, vTileSize.x / 2, vTileSize.y) <
            0
          ) {
            newVSelected.y += 1;
          }
        } else if (ox > vTileSize.x / 2 && oy < vTileSize.y / 2) {
          if (
            position(ox, oy, vTileSize.x / 2, 0, vTileSize.x, vTileSize.y / 2) >
            0
          ) {
            newVSelected.y -= 1;
          }
        } else if (ox > vTileSize.x / 2 && oy > vTileSize.y / 2) {
          if (
            position(
              ox,
              oy,
              vTileSize.x / 2,
              vTileSize.y,
              vTileSize.x,
              vTileSize.y / 2,
            ) < 0
          ) {
            newVSelected.x += 1;
          }
        }

        setVSelected(newVSelected);
        setVScreen(toScreen(newVSelected.x, newVSelected.y));
      }}
    >
      {children}

      <RenderObjects
        left={vScreen.x}
        top={vScreen.y - vTileSize.y} //offsetting the size of tile

        // top={vScreen.y - (activeTile?.height - vTileSize.y)}
      >
        <div className="sprite-hover-sheet">
          {activeTile && (
            <Sprite
              number={activeTile.tile}
              spriteSheet={activeTile.spriteSheet}
              onClick={() => {
                addTile({
                  x: vSelected.x,
                  y: vSelected.y,
                  image: activeTile.spriteSheet,
                  tile: activeTile.tile,
                  height: activeTile.height,
                  width: activeTile.width,
                });
              }}
              height={activeTile.height}
              width={activeTile.width}
            />
          )}
        </div>
      </RenderObjects>
    </div>
  );
});
