  let sugarSize = 800;
  let cubeX = 800;
  let cubeY = 800;
  let graphX = 0;
  let graphY = 0;
  let ant = "]D}={0}";

function setup() {
  createCanvas(800, 800);  //canvas size
}

function draw() {
  if (sugarSize > -1) {  //if sugar size is less than 0, do the following
  background(170,200,100);  //background colour
  translate(graphX, graphY); //sets up the movement of the canvas
  graphX ++;  //graph moves to the right
  graphY ++;  //graph moves down
  square (0, 0, sugarSize);  //create the square
  sugarSize = sugarSize - 2;  //sugar size decreases by 2 each frame
  cubeX = cubeX - 2;  //shrinks the boundary that the ants can spawn in
  cubeY = cubeY - 2;  //shrinks the boundary that the ants can spawn in
  text(ant, random(0, cubeX), random(0, cubeY));  //creates ants to randomly move across the cube
}
if (sugarSize <5) {
  ant = " ";  //the ants will leave when the sugar is gone
}
}