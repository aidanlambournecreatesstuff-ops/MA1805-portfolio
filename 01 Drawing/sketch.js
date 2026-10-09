function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);             //background
  stroke(0);                   //Lines - black
  fill(255,255,0);              //yellow
  strokeWeight(3);              //lines - thick
  circle(200,200,300);          //head




  
  fill(0,0,0);                  //black
  circle (100, 100, 50);        //left eye
  circle (300, 100, 50);        //right eye      
  fill(240,240,240);            //dull white
  strokeWeight(1);              //lines - thin
  stroke(240,240,240);          //Lines - eye sheen white
  circle(90, 90, 10);           //left sparkle
  circle(310, 90, 10);          //right sparkle
  stroke(0,0,0);                //Lines - black
  strokeWeight(3);              //Lines - thick
  fill(255,0,0);                //red 
  ellipse(200, 150, 150, 50);   //mouth  
  fill (200, 0, 0);             //maroon
  strokeWeight(2);              //Lines - thinner tongue
  ellipse(200, 165, 100, 20);   //tongue  

}

