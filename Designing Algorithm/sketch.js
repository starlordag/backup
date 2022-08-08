var Rect1 
var Rect2

function setup() {
  createCanvas(800,400);
  Rect1 = createSprite(300, 100, 50, 50);
  Rect1.shapeColor = "blue";
  Rect1.debug = true
  Rect2 = createSprite(300, 200, 50, 50);
  Rect2.shapeColor = "red";
  Rect2.debug = true
  Rect1.velocityY = 4
  Rect2.velocityY = -4
}

function draw() {
  background(180,210,170);
  if(Rect2.x - Rect1.x === Rect1.width/2 + Rect2.width/2 &&
    Rect1.x - Rect2.x === Rect1.width/2 + Rect2.width/2) {
      Rect2.velocityX = 4
      Rect1.velocityX = -4
  }
  if(Rect2.y - Rect1.y < Rect1.height/2 + Rect2.height/2 &&
    Rect1.y - Rect2.y < Rect1.height/2 + Rect2.height/2){
      Rect2.velocityY = 4
      Rect1.velocityY = -4
    }
  drawSprites();
}