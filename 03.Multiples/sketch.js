let row = [10, 100, 200, 300, 400, 500, 600, 700, 800, 900]; //the creation of the array
let x = 0;                                                   //variable to help cycle through the array
function setup() {
  createCanvas(1000, 1000);                                  //canvas creation
}
function draw() {
 background(50,155,100);                                     //creates a mint green canvas
let i=1;                                                     //local variable used to create an ever-increasing iterations
while(i<=height){                                            //while loop to 
  fill (random (0,255), random (0,255), random (0,255));     //creates the constantly changing random colours
	circle(10*i-500, row[x], 10);                              //creates the circles in an infinite pattern across the X-axis, and allows their Y-axis to be redrawn with the array
	i++;                                                       //creates the iteration
}
}
function mousePressed() {
  if (x<row.length-1){                                       //if the circles have not yet hit the bottom, do the following:
    x++;                                                     //move through the array
  }
  else {                                                     //otherwise, 
    x=0;                                                     //restart the array
  }
  }