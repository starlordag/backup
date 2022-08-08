
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Bob1, Bob2, Bob3, Bob4, Bob5;
var sling, roof, ground;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	/*
	ground = new ROOF(370,700,870,60);
	roof = new ROOF(370,300,420,40);
	
	//Create the Bodies Here.
	
	bob1 = new BOB(130,300,30, "red");
	bob2 = new BOB(160,300,30,"yellow");
	bob3 = new BOB(190,300,30,"pink");
	bob4 = new BOB(220,300,30, "blue");
	bob5 = new BOB(250,300,30, "green");

	sling = new Chain(bob1.body, roof.body, -bob1.r*4, 0);
	sling2 = new Chain(bob2.body, roof.body, -bob2.r*4, 30);
	sling3 = new Chain(bob3.body, roof.body, -bob3.r*4, 60);
	sling4 = new Chain(bob4.body, roof.body, -bob4.r*4, 90);
	sling5 = new Chain(bob5.body, roof.body, -bob5.r*4, 120);
	*/

	roof=new ROOF(400,175,200,20);

	bobDiameter=40;

	bob1=new BOB(320,175,bobDiameter, "red");
	bob2=new BOB(360,175,bobDiameter, "yellow");
	bob3=new BOB(400,175,bobDiameter, "pink");
	bob4=new BOB(440,175,bobDiameter, "blue");
	bob5=new BOB(480,175,bobDiameter, "green");
	
	sling=new Chain(bob1.body,roof.body,-bobDiameter*2, 0);
	sling2=new Chain(bob2.body,roof.body,-bobDiameter, 0);
	sling3=new Chain(bob3.body,roof.body,0, 0);
	sling4=new Chain(bob4.body,roof.body,bobDiameter, 0);
	sling5=new Chain(bob5.body,roof.body,bobDiameter*2, 0);

	Engine.run(engine);  
}


function draw() {
  //rectMode(CENTER);
  background("white");
  
  //ground.display();
  roof.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  sling.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		//Matter.Body.setStatic(bob1.body, false)
		//Matter.Body.applyForce(bob1.body,{x: bob1.body.position.x -50 ,y: bob1.body.position.y + 50},{x:bob1.body.position.x,y:bob1.body.position.y});
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-20,y:-15});
	}
}

