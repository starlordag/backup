const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
var engine
var world
var ground
var ball

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  var option = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,380,400,50,option);
  World.add(world,ground);

  var balloption = {
    restitution: 0.8
  }
  ball = Bodies.circle(200,200,20,balloption);
  World.add(world,ball);
}

function draw() {
  background("black"); 
  Engine.update(engine); 

  fill("green");
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 400, 50);

  fill("brown")
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}