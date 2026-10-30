let img; 
let scream;
let angery = 0;

function preload() {
  img = loadImage('frustrated-man.jpg'); 
  scream = loadSound("scream.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(img, 800, 400);
  
  if (angery==0) {
  filter(ERODE);
  }
  else {
    filter(INVERT);
  }
}

function mousePressed() {
  img = loadImage('screaming-man.jpg');
  angery ++;
  scream.play();
  scream.amp(0.2); 
}

function mouseReleased () {
  img = loadImage('frustrated-man.jpg');
  scream.stop()
  angery --;
}