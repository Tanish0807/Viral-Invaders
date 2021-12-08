// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/biN3v3ef-Y0
var imagef;

function preload(){
  imagef = loadImage("gun.png");
  //w = 40
  
  
}

//function setup(){}
  //imagef = loadImage("gun.png");  
  //imagef.resize(40,60);}

function Ship() {

  
  this.x = width/2-30;
  this.xdir = 0;
  imagef.resize(100,100);

  this.show = function() {
    //fill(255);
    //rectMode(CENTER);
    //image(this.x, height/2+10, 20, 50);
    image(imagef,this.x, height/2-40);
  }

  this.setDir = function(dir) {
    this.xdir = dir;
  }

  this.move = function(dir) {
    this.x += this.xdir*5;
  }
}
