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

  // const { docPosition } = usePanning(docRef.current);

  // const [image, setImage] = useState(tileMap.tilesets[0]?.image);

  const [pWorld, setPWorld] = useState([]);
  const [pWorld2, setPWorld2] = useState([]);

  const [worldMap, setWorldMap] = useState([]);

  // console.log(worldMap);
  useEffect(() => {
    // for (let y = 0; y < vWorldSize.y; y++) {
    //   for (let x = 0; x < vWorldSize.x; x++) {
    //     tiles.push({
    //       position,
    //       sprite: tileMap.layers[0].data[y * vWorldSize.x + x],
    //     });
    //   }
    // }
    let noLayers = tileMap.layers?.length;
    // console.log(noLayers);
    setPWorld(tileMap.layers[0].data);
    // setPWorld2(
    //   tileMap.layers[noLayers - 2] ? tileMap.layers[noLayers - 2]?.data : [],
    // );
    // setPWorld(tileMap.layers[0].data);
    // setPWorld2(tileMap.layers[1] ? tileMap.layers[1]?.data : []);
    setVWorldSize({ x: tileMap?.width, y: tileMap?.height });
    setVTileSize({ x: tileMap?.tilewidth, y: tileMap?.tileheight });
    // setImage();
  }, []);

  // console.log(pWorld);
  const [vSelected, setVSelected] = useState({ x: 0, y: 0 });
  const [vScreen, setVScreen] = useState({ x: 0, y: 0 });
  const [objects, setObjects] = useState([]);

  const position = function (x, y, x1, y1, x2, y2) {
    return (x - x1) * (y2 - y1) - (y - y1) * (x2 - x1);
  };

  // console.log(pWorld);

  // const tiles = useMemo(() => {
  //   let tiles = [];
  //   for (let y = 0; y < vWorldSize.y; y++) {
  //     for (let x = 0; x < vWorldSize.x; x++) {
  //       let position = toScreen(x, y);
  //       tiles.push({ position, sprite: pWorld[y * vWorldSize.x + x] - 1 });
  //       // console.log(y * vWorldSize.x + x);
  //     }
  //   }
  //   return tiles;
  // }, [pWorld]);

  // const tiles2 = useMemo(() => {
  //   console.log("changed");
  //   let tiles = [];
  //   for (let y = 0; y < vWorldSize.y; y++) {
  //     for (let x = 0; x < vWorldSize.x; x++) {
  //       let position = toScreen(x, y);
  //       // console.log(pWorld2[y * vWorldSize.x + x]?.tile);
  //       tiles.push({
  //         position,
  //         sprite: pWorld2[y * vWorldSize.x + x]?.tile,
  //         spriteSheet: pWorld2[y * vWorldSize.x + x]?.image,
  //       });
  //       // console.log(y * vWorldSize.x + x);
  //     }
  //   }
  //   return tiles;
  // }, [pWorld2]);

  let dimension = {
    x: vTileSize.x * vWorldSize.x,
    y: vTileSize.y * vWorldSize.y,
  };

  // console.log(dimension);
  useEffect(() => {
    let _objects = [...objects];
    let _worldMap = [];
    React.Children.forEach(children, (child) => {
      // console.log(child);
      switch (child.type.name) {
        case "RenderObjects":
          let x = child.props?.x,
            y = child.props?.y;
          let position = toScreen(x, y);
          let left = position.x;
          let top = position.y - vTileSize.y;
          let element = React.cloneElement(child, { left, top });
          // console.log(element);
          _objects = [..._objects, element];
          break;
        case "Map":
          // console.log(child);
          let _wMap = [];
          let newTile = child.props?.tileMap?.length
            ? [...child.props?.tileMap]
            : [];
          // console.log(newTile);
          if (child.props?.children) {
            React.Children.forEach(child.props.children, (_child) => {
              let _c = { ..._child.props };
              let x = _c?.x,
                y = _c?.y;
              let position = toScreen(x, y);
              _c.x = position.x;
              _c.y = position.y;
              // console.log(_c);
              newTile.push(_c);
            });
          }

          if (child.props.tileMap) {
            let tileMap = child.props.tileMap.layers[child.props.layer].data;
            for (let y = 0; y < vWorldSize.y; y++) {
              for (let x = 0; x < vWorldSize.x; x++) {
                // let position = toScreen(x, y);
                // tiles.push({ position, sprite: pWorld[y * vWorldSize.x + x] - 1 });

                let position = toScreen(x, y);
                // console.log(pWorld2[y * vWorldSize.x + x]?.tile);
                let tile = tileMap[y * vWorldSize.x + x] - 1;
                // console.log(position);
                tile >= 0 &&
                  newTile.push({
                    x: position.x,
                    y: position.y,
                    tile,
                    spriteSheet: child.props.image,
                  });
                // console.log(y * vWorldSize.x + x);
              }
            }
          }
          // console.log(newTile);

          let newTiles = newTile?.sort((a, b) => {
            if (a.y + a.height || 64 > b.y + b.height || 64) {
              return 1;
            }
            // else if (a.y === b.y && a.x > b.x) {
            //   return 1;
            // }
            else {
              return -1;
            }
          });

          for (let tile of newTiles) {
            // index++;
            // console.log(tile);

            // let element = React.cloneElement(child, { left, top });

            let element = () => {
              return (
                <RenderObjects
                  left={tile.x}
                  top={tile.y - vTileSize.y}
                  onClick={() => {
                    console.log("clicked");
                    onClick(tile);
                  }}
                >
                  <div className="sprite-hover-sheet">
                    <Sprite
                      number={tile.tile}
                      spriteSheet={tile.spriteSheet}
                      height={tile.height || 64}
                      width={tile.width || 64}
                    />
                  </div>
                </RenderObjects>
              );
            };
            // _objects2 = [..._objects2, element];
            _wMap.push(element);
          }
          // _worldMap = [..._worldMap, _objects2];
          _worldMap.push(_wMap);
          break;
        default:
          console.log("default");
      }
    });
    // setObjects(_objects);
    setWorldMap(_worldMap);
  }, [children, vWorldSize, vTileSize]);

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
      {/* {tiles.map((tiles, i) => {
        // console.log(i);
        return (
          tiles.sprite >= 0 && (
            <RenderObjects
              left={tiles.position.x}
              top={tiles.position.y - vTileSize.y}
              key={i}
            >
              <div className="sprite-hover-sheet">
                <Sprite number={tiles.sprite || 0} spriteSheet={image} />
              </div>
            </RenderObjects>
          )
        );
      })} */}

      {/* {tiles2.map((tiles, i) => {
        // console.log(tiles.sprite);
        return tiles.sprite >= 0 ? (
          <RenderObjects
            left={tiles.position.x}
            top={tiles.position.y - vTileSize.y}
            key={i}
          >
            <div className="sprite-hover-sheet">
              <Sprite
                number={tiles.sprite}
                spriteSheet={tiles.spriteSheet || image}
              />
            </div>
          </RenderObjects>
        ) : null;
      })} */}

      {objects}

      {worldMap.map((wMap, i) => {
        // console.log("render");
        return wMap.map((W, j) => {
          return (
            <>
              <W key={i + j} />
            </>
          );
        });
      })}

      <RenderObjects
        left={vScreen.x}
        top={vScreen.y - vTileSize.y}

        // top={vScreen.y - (activeTile?.height - vTileSize.y)}
      >
        <div className="sprite-hover-sheet">
          {activeTile && (
            <Sprite
              number={activeTile.tile}
              spriteSheet={activeTile.spriteSheet}
              onClick={() => {
                // console.log(activeTile);
                // setPWorld2((prev) => {
                //   prev[vSelected.y * vWorldSize.x + vSelected.x] = activeTile;
                //   console.log(vSelected.y * vWorldSize.x + vSelected.x);
                //   return prev;
                // });
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
    // {/* </div> */}
  );
});
