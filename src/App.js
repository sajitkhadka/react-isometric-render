import React, { useState, useEffect } from "react";
import image1 from "./assets/img/2d.png";
import { Palette, RenderObjects } from "./react-tile-render";
import Render from "./react-tile-render";
import "./assets/css/styles.css";
import map2 from "./untitled.json";
import multipleLayers from "./multipleLayers.json";
import image from "./assets/img/2d.png";
import house from "./assets/img/house.png";
import background from "./assets/sprites/background.jpg";
import { Sprite } from "./react-tile-render/map";
import Map from "./react-tile-render/map/Map";
import Object from "./react-tile-render/map/Object";

function App(props) {
  const [activeTile, setActiveTile] = useState(null);
  const [tiles, setTiles] = useState([]);
  const [mapSize, setMapSize] = useState({
    width: 1152,
    height: 700,
  });

  const [zoom, setZoom] = useState((window.screen.width / 1600).toFixed(1));
  // console.log(zoom);
  // console.log(window.clientW);

  useEffect(() => {
    window.onresize = function () {
      setZoom((window.screen.width / 1600).toFixed(1));
    };
  }, []);

  const [allObjects, setAllObjects] = useState([]);

  // console.log(allObjects);
  return (
    <div className="content" style={{ backgroundColor: "#EDF5E1" }}>
      <div
        style={{
          position: "relative",
          marginBottom: "50px",
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          height: mapSize.height * zoom,
        }}
      >
        <Render
          activeTile={activeTile}
          tileMap={multipleLayers}
          image={image}
          zoom={zoom}
          background={background}
          addTile={(t) => {
            // console.log(t);
            setAllObjects((prev) => {
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
          <Map
            // tileMap={[
            //   { x: 10, y: 10, spriteSheet: image, tile: 25 },
            //   { x: 10, y: 9, spriteSheet: image, tile: 25 },
            // ]}
            layer={0}
            image={image}
            tileMap={multipleLayers}
          />
          {/* <Object x={10} y={8} tile={25} spriteSheet={image} /> */}

          {/* </Map> */}
          <Map
            // tileMap={[
            //   { x: 10, y: 10, spriteSheet: image, tile: 25 },
            //   { x: 10, y: 9, spriteSheet: image, tile: 25 },
            // ]}
            layer={1}
            image={image}
            tileMap={multipleLayers}
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
            {/* <Object x={11} y={8} tile={26} spriteSheet={image} /> */}
          </Map>

          {/* <RenderObjects x={5} y={5}>
            <div className="sprite-hover-sheet">
              <Sprite number={5} spriteSheet={image} />
            </div>
          </RenderObjects> */}

          {/* <RenderObjects x={10} y={10}>
            <div className="sprite-hover-sheet">
              <Sprite number={0} spriteSheet={image} />
            </div>
          </RenderObjects> */}
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
