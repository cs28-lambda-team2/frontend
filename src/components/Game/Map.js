import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {drawMap} from "./game_helpers"


const Map = (props) => {
  const [mapData, setMapData] = useState(null);
  const room_size = 100;
  const canvas = useRef(null);

 console.log("I am props",props)
  useEffect(()=> {
    axios.get("https://calm-reaches-19822.herokuapp.com/api/adv/map").then(res => {
      setMapData(Object.values(res.data));
      canvas.current = <canvas width="2000" height="2000"/>
    }).catch(err => console.log(err));
  }, []);

  if(mapData === null)
    return <p> Loading map data </p>;

  console.log(mapData);
  // return <></>
  return drawMap(canvas,mapData,props.currentPosition);
}

export default Map
