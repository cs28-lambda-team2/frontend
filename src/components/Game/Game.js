import React, { useState, useEffect, useRef } from "react";
import {drawMap, mapSize, roomSize} from './game_helpers.js';
import axios from "axios";
const Game = () => {
  return <>
    <canvas width={mapSize * roomSize} height={mapSize * roomSize} ref={} />
  </>
}
