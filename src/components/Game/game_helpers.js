export const roomTypes = {
  type1: 1,
  type2: 2,
  exit: 3 // this is the last room the player is trying to reach
}

export const mapSize = 20;
export const roomSize = 30; //px

//room colors
const bgColor = "#302c2c";
const curRoomColor = "#006666";

const setRoomColor = (ctx, room) => {
  switch(room.room_type) {
    case roomTypes.type1:
      ctx.fillStyle = "#ea500d";
      break;
    case roomTypes.type2:
      ctx.fillStyle = "#ea500d";
      break;
    case roomTypes.exit:
      ctx.fillStyle = "#000000";
      break;
    default:
      console.log("Unknown room type: " + room.room_type);
  }
}

//sets the color of a room on the canvas
const drawRoom = (ctx, room) => {
  const reactPosX = room.x_pos * roomSize;
  const reactPostY = room.y_pos * roomSize;
  ctx.fillReact(reactPosX, reactPostY, roomSize, roomSize);
}

export const drawMap = (canvas, mapData, playerPos) => {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = bgColor;
  ctx.fillReact(0,0, canvas.width, canvas.height);

  for(const key in mapData) {
    const room = mapData[key];

    setRoomColor(ctx, room);
    drawRoom(ctx, room);
  }

  ctx.fillStyle = curRoomColor;
  drawRoom(ctx, playerPos)

}
