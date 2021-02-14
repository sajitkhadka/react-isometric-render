import React, { useState, useEffect } from "react";
import image1 from "./assets/img/2d.png";
import { Palette } from "./react-tile-render";
import Map from "./react-tile-render";
import "./assets/css/styles.css";
import map2 from "./untitled.json";
import image from "./assets/img/2d.png";
import background from "./assets/sprites/background.jpg";

function App(props) {
  const [activeTile, setActiveTile] = useState(null);
  const [tiles, setTiles] = useState([]);
  const [mapSize, setMapSize] = useState({
    width: 1152,
    height: 700,
  });

  const [zoom, setZoom] = useState((window.screen.width / 1600).toFixed(1));
  // console.log(zoom);
  console.log(window.clientW);

  useEffect(() => {
    window.onresize = function () {
      setZoom((window.screen.width / 1600).toFixed(1));
    };
  }, []);

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
        <Map
          activeTile={activeTile}
          tileMap={map2}
          image={image}
          zoom={zoom}
          background={background}
        />
      </div>
      <div style={{ width: "80%", margin: "50px auto", height: 576 }}>
        <Palette
          tileSet={image1}
          activeTile={activeTile}
          setActiveTile={setActiveTile}
          size={{ height: 128, width: 64 }}
          zoom={zoom}
        />
      </div>
    </div>
    // </div>
  );
}

export default App;
