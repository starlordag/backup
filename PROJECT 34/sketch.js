
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
	
}

function setup() {
	createCanvas(800, 450);

	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	bob1 = new pendulum(300,250,"blue");
	bob2 = new pendulum(360,250,"red");
	bob3 = new pendulum(420,250,"yellow");
	bob4 = new pendulum(480,250,"green");
	bob5 = new pendulum(540,250,"orange");

	sling1 = new sling(bob1.body,{x:300, y:100});
	sling2 = new sling(bob2.body,{x:360, y:100});
	sling3 = new sling(bob3.body,{x:420, y:100});
	sling4 = new sling(bob4.body,{x:480, y:100});
	sling5 = new sling(bob5.body,{x:540, y:100});

	Engine.run(engine);
  
}


function draw() {
  background("black");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x:mouseX, y:mouseY});
}
