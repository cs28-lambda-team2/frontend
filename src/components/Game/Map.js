import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { drawMap } from "./game_helpers";

const Map = (props) => {
  const [mapData, setMapData] = useState(null);
  const canvasRef = useRef(null)
console.log(props)
  useEffect(() => {
if(mapData === null){
  axios
      .get("https://calm-reaches-19822.herokuapp.com/api/adv/map")
      .then((res) => {
        setMapData(Object.values(res.data));
      })
      .catch((err) => console.log(err));
}
   else{ drawMap(canvasRef.current, mapData,props.current_room)}
  }, [mapData,props.current_room]);

  if (mapData === null) return <p> Loading map data </p>;

  // return <></>
  return <canvas width="450" height="450" ref={canvasRef} />;
};

export default Map;
