import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import [drawMap, mapSize, roomSize]


const Map = () => {
  const [mapData, setMapData] = useState(null);
  const room_size = 100;
  const canvas = useRef(null);

  const drawMap = () => {

  }

  useEffect(()=> {
    axios.get("https://calm-reaches-19822.herokuapp.com/api/adv/map").then(res => {
      setMapData(Object.values(res.data));
      canvas.current = <canvas width="2000" height="2000"/>
    }).catch(err => console.log(err));
  }, []);

  if(mapData === null)
    return <p> Loading map data </p>;

  console.log(mapData);
  return <></>;
}

export default Map
