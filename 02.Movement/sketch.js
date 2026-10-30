  let sugarSize = 800;      //variable for identifying the size of the sugar cube
  let cubeX = 800;          //variable to assertain the X boundary of the sugar cube
  let cubeY = 800;          //vairable to assertain the Y boundary of the sugar cube
  let graphX = 0;           //variable to track the X position of the graph
  let graphY = 0;           //variable to track the Y position of the graph
  let ant = "]D}={0}";      //text art to represent an ant

function setup() {
  createCanvas(800, 800);  //sets the canvas size
}
function draw() {
  background(170,200,100);  //background colour of a nice field
  if (sugarSize > -1) {  //so long as the sugar cube is visible, do the following:
  translate(graphX, graphY); //sets up the movement of the canvas
  graphX ++;  //graph moves to the right
  graphY ++;  //graph moves down
  square (0, 0, sugarSize);  //create the square and constantly updates the size
  sugarSize = sugarSize - 2;  //sugar size decreases by 2 each frame
  cubeX = cubeX - 2;  //shrinks the boundary that the ants can spawn in
  cubeY = cubeY - 2;  //shrinks the boundary that the ants can spawn in
  text(ant, random(0, cubeX), random(0, cubeY));  //creates ants to randomly spawn across the shrinking cube
}
if (sugarSize >700) { //as the cube shrinks, less ants will spawn on the cube.
    text(ant, random(0, cubeX), random(0, cubeY));  
}
if (sugarSize >600) {
    text(ant, random(0, cubeX), random(0, cubeY));  
}
if (sugarSize >500) {
    text(ant, random(0, cubeX), random(0, cubeY));  
}
if (sugarSize >400) {
    text(ant, random(0, cubeX), random(0, cubeY));  
}
if (sugarSize >300) {
    text(ant, random(0, cubeX), random(0, cubeY));  
}
if (sugarSize >200) {
    text(ant, random(0, cubeX), random(0, cubeY));  
}
if (sugarSize >100) {
    text(ant, random(0, cubeX), random(0, cubeY));  
}
if (sugarSize <5) {    //if the sugar cube is gone, do the following:
  ant = " ";  //the ants will leave when the sugar is gone
}
}