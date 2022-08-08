var hours, seconds, mins;

function setup() {
  createCanvas(800,800); 
}

function draw() {
  background("Black");

  hours = hour() % 12;
  mins = minute();
  seconds = second();

  startRadin = -90;
  endRadian = 269

  scAngle = map(seconds,0,60,0,360);
  minAngle = map(mins,0,60,0,360);
  hrAngle = map(hours,0,12,0,360);
  scRadian = map(seconds, 0, 60, -90, 269)
  minRadian = map(mins, 0, 60, -90, 269)   
  hrRadian = map(hours, 0, 12, -90, 269)  

  push();
  angleMode(DEGREES);
  stroke("Red");
  strokeWeight(8);
  translate(400,400);
  rotate(scAngle);
  line(0,0,0,-170);
  pop();
  
  push();
  angleMode(DEGREES);
  stroke("blue");
  strokeWeight(8);
  translate(400,400);
  rotate(minAngle);
  line(0,0,0,-140);
  pop();
  
  push();
  angleMode(DEGREES);
  stroke("green");
  strokeWeight(8);
  translate(400,400);
  rotate(hrAngle);
  line(0,0,0,-120);
  pop();

  push();
  ellipseMode(RADIUS);
  noFill();
  strokeWeight(7)
  stroke("Red");
  arc(400,400,190,190,startRadin,scRadian,OPEN);
  pop();

  push();
  ellipseMode(RADIUS);
  noFill();
  strokeWeight(7)
  stroke("blue");
  arc(400,400,210,210,startRadin,minRadian,OPEN);
  pop();

  push();
  ellipseMode(RADIUS);
  noFill();
  strokeWeight(7)
  stroke("green");
  arc(400,400,230,230,startRadin,hrRadian,OPEN);
  pop();

}