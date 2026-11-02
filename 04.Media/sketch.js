let img;                                        //variable to easily change the displayed image
let meow;                                       //vairable to modify the audio across functions
let angery = 0;                                 //variable to change the applied filter seamlessly

function preload() {                            //preloading to reduce strain when loading in assets
  img = loadImage('cat1.jpg');                  //default displayed image is the cluelss cat
  meow = loadSound("meow.wav");                 //makes the meow the current audio
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
  img = loadImage('cat2.jpg');                  //changes the image to the meowing cat
  angery ++;                                    //increases the angery variable to signal the filter change
  meow.loop();                                  //plays the meow on loop
  meow.amp(0.2);                                //sets the volume of the meow
}
function mouseReleased () {                     //upon the release of the mouse click, do the following:
  img = loadImage('cat1.jpg');                  //changes the image back to the clueless cat  
  meow.stop()                                   //halts the meow audio
  angery --;                                    //signals the revertion to the default filter.
}