var fixedRect, movingRect;
var Rect1, Rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityX = -2
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  Rect1 = createSprite(200,100,50,50)
  Rect2 = createSprite(200,400,50,50)
  Rect2.velocityX = 3
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(touching(movingRect, Rect1) === true){
    movingRect.shapeColor = "red";
    Rect1.shapeColor = "red";
  }
  if(touching(movingRect, Rect1) === false){
    movingRect.shapeColor = "green";
    Rect1.shapeColor = "green";
  }

  bounce(Rect2, fixedRect);
  drawSprites();
}