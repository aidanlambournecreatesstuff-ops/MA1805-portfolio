//if,else,then
//arrays

let row = [100, 200, 300, 400, 500, 600, 700, 800, 900];
let x = 0;

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
 background(50,155,100);
let i=1;

while(i<=height){

  let valueY = random(0, i)+i
  fill (random (0,255), random (0,255), random (0,255));
	circle(10*i-500, row[x], 7);
	i++; 

}
}

function mousePressed() {
  if (x<row.length-1){
    x++;
  }
    else {
x=0;
    }
    return false;
  }

