var thickness, wall;
var bullet,speed, weight

function setup() {
  createCanvas(1600,400);

  //speed
  speed = random(223,321);

  //weight
  weight = random(30,52);

  //thickness
  thickness = random(22,83)

  //bullet
  bullet = createSprite(50, 200, 50, 10);
  bullet.velocityX = speed;
  bullet.shapeColor = color(225);

  //wall
  wall = createSprite(1200,200,thickness,200);
  wall.shapeColor = color(225);
}

function draw() {
  background("black");  
  if(wall.x - bullet.x < (bullet.width + wall.width)/1.5){
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
    if(deformation > 10){
      wall.shapeColor = color("red");
    }
    if(deformation < 10){
      wall.shapeColor = color("green");
    }
  }
  drawSprites();
}