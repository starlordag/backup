const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect1, rect2, rect3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,400,50);
	ground = new Ground(600, 570, 1200, 50);
	ground2 = new Ground(800, 488, 30, 125);
	ground3 = new Ground(1000, 488, 30, 125);
	ground4 = new Ground(900,535,200,30);
	rect1 = createSprite(800,488,30,125);
	rect2 = createSprite(900,535,200,30);
	rect3 = createSprite(1000,488,30,125);
    
	Engine.run(engine);
}

function draw() {
  background(0);
  paper.display();
  ground.display();
  rect1.display();
  rect2.display();
  rect3.display();
  jump()
  drawSprites();
 
}

function jump(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.body,{x:paper.x, y:paper.y},{x:57, y:-57})
		keyCode = null;
	}
}