const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ground2,ground3,ground4;
var dustbinimg;
var dust;

function preload()
{
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,400,70);
	ground = new Ground(600, 570, 1200, 50);
	ground2 = new Dustbin(870, 488, 30, 125);
	ground3 = new Dustbin(1090, 440, 30, 220);
	ground4 = new Dustbin(900,445,200,200);

	//pap = createSprite(paper.x, paper.y, paper.width, paper.height);
    
	Engine.run(engine);
}

function draw() {
  background("white");
  paper.display();
  ground.display();
  //ground2.display();
  //ground3.display();
  ground4.display();
  jump()
  drawSprites();
 
}

function jump(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.body,{x:paper.x, y:paper.y},{x:100, y:-150})
		keyCode = null;
	}
}