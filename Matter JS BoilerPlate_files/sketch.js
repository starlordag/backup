
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Bob1, Bob2, Bob3, Bob4, Bob5;
var sling, roof, ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new BOB(100,100,50, "red");
	//bob2 = new BOB(105,100,50,"yellow");
	/*bob3 = new BOB(110,100,50,"pink");
	bob4 = new BOB(115,100,50, "blue");
	bob5 = new BOB(120,100,50, "green");*/
	ground = new ROOF(370,700,870,60);
	roof = new ROOF(370,300,320,40);
	sling = new Chain(bob1.body, roof.body, bob1.r*2, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bob1.display();
  //bob2.display();
  /*bob3.display();
  bob4.display();
  bob5.display();*/
  ground.display();
  roof.display();
  sling.display();
  drawSprites();
 
}



