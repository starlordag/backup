var car, wall;
var speed, weight

function setup() {
  createCanvas(1600,400);

  //speed
  speed = random(55,100);

  //weight
  weight = random(400,1500);

  //car
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = color(225);

  //wall
  wall = createSprite(1300,200,60,200);
  wall.shapeColor = color("blue");
}

function draw() {
  background("black");  
  if(wall.x - car.x < (car.width + wall.width)/1.5){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation > 180){
      car.shapeColor = color("red");
    }
    if(deformation < 180 && deformation > 100){
      car.shapeColor = color("yellow");
    }
    if(deformation < 100){
      car.shapeColor = color("green");
    }
  }
  drawSprites();
}