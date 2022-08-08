
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

	roof = new ROOF(370,370,200,40);
	
	//Create the Bodies Here.
	var bobDiameter = 40
	var startPos = 300

	bob1 = new BOB(startPos,670,bobDiameter, "red");
	bob2 = new BOB(startPos+bobDiameter,670,bobDiameter,"yellow");
	bob3 = new BOB(startPos+(bobDiameter*2),670,bobDiameter,"pink");
	bob4 = new BOB(startPos+(bobDiameter*3),670,bobDiameter, "blue");
	bob5 = new BOB(startPos+(bobDiameter*4),670,bobDiameter, "green");
	sling = new Chain(bob1.body, roof.body, -bobDiameter*2,0);
	sling2 = new Chain(bob2.body, roof.body, -bobDiameter,0);
	sling3 = new Chain(bob3.body, roof.body, 0,0);
	sling4 = new Chain(bob4.body, roof.body, bobDiameter,0);
	sling5 = new Chain(bob5.body, roof.body, bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("white");
  
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  bob1.display();
  sling.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 38){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-20,y:-15});
	}
}

