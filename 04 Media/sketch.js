let img;                                        //variable to easily change the displayed image
let scream;                                     //vairable to modify the audio across functions
let angery = 0;                                 //variable to change the applied filter seamlessly

function preload() {                            //preloading to reduce strain when loading in assets
  img = loadImage('frustrated-man.jpg');        //default displayed image is the frustrated man
  scream = loadSound("scream.mp3");             //makes the scream the current audio
}
function setup() {                              
  createCanvas(windowWidth, windowHeight);      //basic canvas set up
}
function draw() {
  image(img, 0, 0);                             //displays the image
  
  if (angery==0) {                              //if function to control when the INVERT filter is applied to the image
  filter(ERODE);                                //establishes a default filter that has minimal aesthetic change on the image
  }
  else {
    filter(INVERT);                             //the INVERT filter is applied only when the angery variable is changed through the following functions
  }
}
function mousePressed() {                       //upon the press and hold of a mouse, do the following:
  img = loadImage('screaming-man.jpg');         //changes the image to the screaming man
  angery ++;                                    //increases the angery variable to signal the filter change
  scream.loop();                                //plays the scream on loop
  scream.amp(0.2);                              //sets the volume of the scream
}
function mouseReleased () {                     //upon the release of the mouse click, do the following:
  img = loadImage('frustrated-man.jpg');        //changes the image back to the frustrated man  
  scream.stop()                                 //halts the scream audio
  angery --;                                    //signals the revertion to the default filter.
}