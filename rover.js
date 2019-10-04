// Rover Object Goes Here
// ======================
let rover = {
  x:5,
  y:5,
  cardinal : ["N","W","S","E"],
  path : [{x:5,y:5}],
  faceDirection : "N",
  turnNow : 0
};
// ======================
// Determinates the facing Direction anti clock wise
  function turnLeft(theRover){
    if(theRover.faceDirection ==="E"){
      rover.faceDirection = "N"
      rover.turnNow = 0
    }else {
      rover.turnNow++
      rover.faceDirection = rover.cardinal[rover.turnNow]
    }
    console.log("turnLeft was called!");
}
// Determinates the facing Direction clock wise
function turnRight(theRover){
  if(theRover.faceDirection === "N"){
    rover.faceDirecction = "E"
    rover.turnNow = 3
  }else {
    rover.turnNow--
    rover.faceDirection = rover.cardinal[rover.turnNow]
    }
  console.log("turnRight was called!");
}

function moveForward(theRover){
  let noGo = "No go, you will lose me";
  let pointing = theRover.faceDirection;
  let go = "moveForward was called";
  // First group determinates boundaries//
  switch(true){
    case theRover.x === 0 && pointing === "N":
      console.log(noGo);
      break;
    case theRover.y === 0 && pointing === "W":
      console.log(noGo);
      break;
    case theRover.x === 9 && pointing === "S":
      console.log(noGo);
      break;
    case theRover.y === 9 && pointing === "E":
      console.log(noGo);
      break;
 // Until here
 // From here tells depending the direction what is the move
    case theRover.faceDirection === "N":
      theRover.x--;
      theRover.path.push({x:theRover.x,y:theRover.y});
      console.log(go);
      break;
    case theRover.faceDirection === "W":
      theRover.y--;   theRover.path.push({x:theRover.x,y:theRover.y});
      console.log(go);
      break;
    case theRover.faceDirection === "S":
      theRover.x++;
      theRover.path.push({x:theRover.x,y:theRover.y});
      console.log(go);
      break;
    case theRover.faceDirection === "E":
      theRover.y++;
      theRover.path.push({x:theRover.x,y:theRover.y});
      console.log(go)
      break;
  }
  console.log(`I am at x:${theRover.x} and y:${theRover.y}`)
}
// The Gas and Steering wheel
function command(theRover , orders){ 
  for(let i = 0; i < orders.length; i++){
    let order = orders[i];
    switch(order){
      case "l":
        turnLeft(theRover);
        break;
      case "r":
        turnRight(theRover);
        break;
      case "f":
        moveForward(theRover);
        break;
      default:
        console.log("Please us l , r or f");
    }
    
  } console.log(rover.path);
  
}
//unquote to test
//command(rover,"");


