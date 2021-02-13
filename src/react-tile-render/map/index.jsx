import React, { useMemo, useState, useEffect } from "react";

import GameObjects from "../render/GameObjects";
import RenderObjects from "../render/RenderObjects";

import background from "../../assets/sprites/background.jpg";

import image1 from "../../assets/img/2d.png";
// const Sprites = GameObjects(image1);

function Sprite({ number, spriteSheet, ...props }) {
  const ShowSprite = GameObjects(spriteSheet)[number];
  return <ShowSprite {...props} />;
}

export default function Map({
  // tiles,
  // tileSet,
  size,
  setTiles,
  activeTile,
  editMap,
  tileMap,
  image,
}) {
  // console.log(tileMap);

  const [vTileSize, setVTileSize] = useState({ y: 32, x: 64 });

  const [vWorldSize, setVWorldSize] = useState({ x: 14, y: 14 });
  const vOrigin = { y: 1, x: vWorldSize.x / 2 };

  const toScreen = (x, y) => {
    return {
      x: vOrigin.x * vTileSize.x + (x - y) * (vTileSize.x / 2),
      y: vOrigin.y * vTileSize.y + (x + y) * (vTileSize.y / 2),
    };
  };

  // const [image, setImage] = useState(tileMap.tilesets[0]?.image);

  const [pWorld, setPWorld] = useState([]);

  useEffect(() => {
    // for (let y = 0; y < vWorldSize.y; y++) {
    //   for (let x = 0; x < vWorldSize.x; x++) {
    //     tiles.push({
    //       position,
    //       sprite: tileMap.layers[0].data[y * vWorldSize.x + x],
    //     });
    //   }
    // }
    setPWorld(tileMap.layers[0].data);
    setVWorldSize({ x: tileMap?.width, y: tileMap?.height });
    setVTileSize({ x: tileMap?.tilewidth, y: tileMap?.tileheight });
    // setImage();
  }, []);

  // console.log(pWorld);
  const [vSelected, setVSelected] = useState({ x: 0, y: 0 });
  const [vScreen, setVScreen] = useState({ x: 0, y: 0 });

  const position = function (x, y, x1, y1, x2, y2) {
    return (x - x1) * (y2 - y1) - (y - y1) * (x2 - x1);
  };

  const tiles = useMemo(() => {
    let tiles = [];
    for (let y = 0; y < vWorldSize.y; y++) {
      for (let x = 0; x < vWorldSize.x; x++) {
        let position = toScreen(x, y);
        tiles.push({ position, sprite: pWorld[y * vWorldSize.x + x] - 1 });
        // console.log(y * vWorldSize.x + x);
      }
    }
    return tiles;
  }, [pWorld]);

  return (
    <div
      style={{
        boxSizing: "border-box",
        width: size.width,
        height: size.height,
        position: "relative",
        border: "1px solid gray",
        backgroundImage: "url(" + background + ")",
        backgroundRepeat: "no-repeat",
      }}
      onMouseMove={(e) => {
        var bounds = e.currentTarget.getBoundingClientRect();
        var mx = e.clientX - bounds.left;
        var my = e.clientY - bounds.top;

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
      {/* <RenderObjects left={10} top={10}></RenderObjects> */}
      {/* {(() => {
        let tiles = [];
        for (let y = 0; y < vWorldSize.y; y++) {
          for (let x = 0; x < vWorldSize.x; x++) {
            let position = toScreen(x, y);
            tiles.push({ position, sprite: pWorld[y * vWorldSize.x + x] });
            // console.log(y * vWorldSize.x + x);
          }
        }
        // console.log(tiles);
        return tiles;
      })() */}
      {tiles.map((tiles, i) => {
        // console.log(i);
        return (
          <RenderObjects
            left={tiles.position.x}
            top={tiles.position.y - vTileSize.y}
            key={i}
          >
            <div className="sprite-hover-sheet">
              <Sprite number={tiles.sprite || 0} spriteSheet={image} />
            </div>
          </RenderObjects>
        );
      })}

      {/* {(() => {
        let tiles = [];
        for (let y = 0; y < vWorldSize.y; y++) {
          for (let x = 0; x < vWorldSize.x; x++) {
            let position = toScreen(x, y);
            tiles.push({ position, sprite: pWorld[y * vWorldSize.x + x] });
            // console.log(y * vWorldSize.x + x);
          }
        }
        return tiles;
      })().map((tiles, i) => (
        <RenderObjects
          left={tiles.position.x}
          top={tiles.position.y - vTileSize.y}
          key={i}
        >
          <div className="sprite-hover-sheet">
            <Sprite number={tiles.sprite || 3} spriteSheet={image1} />
          </div>
        </RenderObjects>
      ))} */}

      <RenderObjects left={vScreen.x} top={vScreen.y - vTileSize.y}>
        <div className="sprite-hover-sheet">
          {activeTile ? (
            <Sprite
              number={activeTile.tile}
              spriteSheet={activeTile.spriteSheet}
              onClick={() => {
                setPWorld((prev) => {
                  prev[vSelected.y * vWorldSize.x + vSelected.x] = activeTile;
                  return prev;
                });
              }}
            />
          ) : (
            <Sprite
              number={3}
              onClick={() => {
                console.log("clicked");
              }}
            />
          )}
        </div>
      </RenderObjects>
    </div>
  );
}
