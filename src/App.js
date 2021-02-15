import React, { useState, useEffect } from "react";
import image1 from "./assets/img/2d.png";
import { Palette, RenderObjects } from "./react-tile-render";
import Render from "./react-tile-render";
import "./assets/css/styles.css";
import map2 from "./untitled.json";
import tileMap from "./tileMap.json";
import image from "./assets/img/2d.png";
import house from "./assets/img/house.png";
import background from "./assets/sprites/background.jpg";
import { Sprite } from "./react-tile-render/map";
import Layer from "./react-tile-render/map/Layer";
import Object from "./react-tile-render/map/Object";

function App(props) {
  const [activeTile, setActiveTile] = useState(null);
  const [tiles, setTiles] = useState([]);
  const [mapSize, setMapSize] = useState({
    width: 1152,
    height: 700,
  });

  const [zoom, setZoom] = useState((window.screen.width / 1600).toFixed(1));
  useEffect(() => {
    window.onresize = function () {
      setZoom((window.screen.width / 1600).toFixed(1));
    };
  }, []);

  const [allObjects, setAllObjects] = useState([]);

  return (
    <div className="content" style={{ backgroundColor: "#EDF5E1" }}>
      <div
        style={{
          position: "relative",
          marginBottom: "50px",
          paddingTop: "50px",
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          height: mapSize.height * zoom,
        }}
      >
        <Render
          activeTile={activeTile}
          tileMap={tileMap}
          tileSize={{ x: 64, y: 32 }}
          origin={{ y: 1, x: tileMap.width / 2 }}
          worldSize={{ x: tileMap.width, y: tileMap.height }}
          image={image}
          zoom={zoom}
          background={background}
          addTile={(t) => {
            // console.log(t);
            setAllObjects((prev) => {
              let old = [...prev];
              let existing = old.find((o) => o.x === t.x && o.y === t.y);
              if (existing) {
                existing.image = t.image;
                existing.tile = t.tile;
                return old;
              }
              return [
                ...prev,
                {
                  x: t.x,
                  y: t.y,
                  tile: t.tile,
                  image: t.image,
                  height: t.height,
                  width: t.width,
                },
              ];
            });
          }}
          onClick={(target) => {
            console.log(target);
          }}
        >
          <Layer
            map={tileMap.layers[0].data}
            spriteSheet={image}
            tileSize={{ x: 64, y: 32 }}
            origin={{ x: 10, y: 1 }}
            worldSize={{ x: tileMap.width, y: tileMap.height }}
          />
          <Layer
            map={tileMap.layers[1].data}
            spriteSheet={image}
            tileSize={{ x: 64, y: 32 }}
            origin={{ x: 10, y: 1 }}
            worldSize={{ x: tileMap.width, y: tileMap.height }}
          >
            {allObjects.map((a, i) => {
              return (
                <Object
                  x={a.x}
                  y={a.y}
                  tile={a.tile}
                  spriteSheet={a.image}
                  key={i}
                  height={a.height}
                  width={a.width}
                />
              );
            })}
          </Layer>
        </Render>
      </div>
      {/* <div style={{ width: "80%", margin: "50px auto", height: 128 }}>
        <Palette
          tileSet={house}
          setActiveTile={setActiveTile}
          size={{ height: 128, width: 64 }}
          zoom={zoom}
          tWidth={64}
          tHeight={128}
        />
      </div> */}
      <div style={{ width: "80%", margin: "50px auto", height: 400 }}>
        <Palette
          tileSet={image}
          setActiveTile={setActiveTile}
          size={{ height: 64, width: 64 }}
          zoom={zoom}
          tWidth={64}
          tHeight={64}
        />
      </div>
    </div>
    // </div>
  );
}

export default App;
