const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var particles = [];
var pinkos = [];
var div = [];
var divisionHeight = 300;

function setup() {
  createCanvas(400,800);

  //creating world
  engine = Engine.create();
  world = engine.world;

  //division
  for(var k = 0; k <= width; k = k + 80){
    div.push(new division(k,height-divisionHeight/2,10,divisionHeight));
  }

  //pinkos
  for(var j = 30; j <= width -20; j=j+50){
    pinkos.push(new pinko(j,75,9));
  }
  for(var j = 12; j <= width -10; j=j+50){
    pinkos.push(new pinko(j,175,9));
  }
  for(var j = 30; j <= width -20; j=j+50){
    pinkos.push(new pinko(j,275,9));
  }
  for(var j = 12; j <= width -30; j=j+50){
    pinkos.push(new pinko(j,375,9));
  }
  
  //sprites
  ground = new Ground(400,800,1000,50);

  Engine.run(engine);
}

function draw() {
  background("black");

  Engine.update(engine);

  //display
  ground.display();
  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  for(var k = 0; k < div.length; k++){
    div[k].display();
  }
  for(var l = 0; l < pinkos.length; l++){
    pinkos[l].display();
  }

  //framecount
  if(frameCount%60===0){
    particles.push(new particle(random(width/2-10,width/2+10),10,10))
  }

  drawSprites();
}