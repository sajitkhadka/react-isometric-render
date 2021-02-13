import React, { useState, useEffect, useRef, Suspense } from "react";
import image1 from "./assets/img/2d.png";
// import spring from "./assets/sprites/3d.png";
import { Palette } from "./react-tile-render";
// import useDraggable from "./hooks/useDraggable";
import Map from "./react-tile-render";
import "./assets/css/styles.css";
// import tilemap from "./tilemap.json";
import map2 from "./untitled.json";
import image from "./assets/img/2d.png";

function App(props) {
  const [activeTile, setActiveTile] = useState(null);
  const [tiles, setTiles] = useState([]);
  const [mapSize, setMapSize] = useState({
    width: 1152,
    height: 576,
  });
  // console.log(map2.)
  const [selectedTile, setSelectedTile] = useState(null);
  // const { position } = useDraggable("handle");
  //check if map is getting edited
  const [allBays, setAllBays] = useState([]);

  return (
    <div className="content" style={{ backgroundColor: "#EDF5E1" }}>
      <div
        style={{
          position: "relative",
          // width: window.innerWidth,
          // height: window.innerHeight,
          // backgroundColor: "grey",
          overflow: "hidden",
          // border: "1px solid black",
          marginBottom: "50px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Map
          tiles={tiles}
          size={mapSize}
          activeTile={activeTile}
          setTiles={setTiles}
          tileMap={map2}
          image={image}
        />
      </div>
      <Palette
        tileSet={image1}
        // position={position}
        activeTile={activeTile}
        setActiveTile={setActiveTile}
        size={{ height: 128, width: 64 }}
        // size={{ height: 128, width: 64 }}
      />
    </div>
  );
}

export default App;
