import { Sprite } from ".";
import { RenderObjects } from "..";
import React, { useMemo } from "react";

//A function to convert regular isometric coordinates to regular coordinates
const toScreen = (vOrigin, vTileSize, x, y) => {
  return {
    x: vOrigin.x * vTileSize.x + (x - y) * (vTileSize.x / 2),
    y: vOrigin.y * vTileSize.y + (x + y) * (vTileSize.y / 2),
  };
};

function Layer({ map, spriteSheet, tileSize, origin, worldSize, children }) {
  const tiles = useMemo(() => {
    let _childMap = [];
    if (children) {
      React.Children.forEach(children, (_child) => {
        _childMap.push(_child.props);
      });
    }

    let tiles = [];
    for (let y = 0; y < worldSize.y; y++) {
      for (let x = 0; x < worldSize.x; x++) {
        let _cMap = _childMap.find((c) => c.x === x && c.y === y);
        let position = toScreen(origin, tileSize, x, y);
        if (_cMap) {
          tiles.push({
            x: position.x,
            y: position.y - tileSize.y,
            // top={vScreen.y - vTileSize.y}
            sprite: _cMap.tile,
            spriteSheet: _cMap.spriteSheet,
          });
        } else {
          tiles.push({
            x: position.x,
            y: position.y - tileSize.y,
            sprite: map[y * worldSize.x + x] - 1,
            spriteSheet: spriteSheet,
          });
        }
      }
    }
    return tiles;
  }, [map, children]);

  return tiles.map((tile, i) => {
    return (
      tile.sprite > 0 && (
        <RenderObjects left={tile.x} top={tile.y} key={i}>
          <div className="sprite-hover-sheet">
            <Sprite number={tile.sprite} spriteSheet={tile.spriteSheet} />
          </div>
        </RenderObjects>
      )
    );
  });
}

export default Layer;
