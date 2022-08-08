const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

function preload(){}

function setup() {
	createCanvas(900, 700);
	//creating world
	engine = Engine.create();
	world = engine.world;

	//sprites
	ground = new Ground(600,700,1400,100);
	block = new blocks(400,600,40,40);
	block2 = new blocks(400,560,40,40);
	block3 = new blocks(400,520,40,40);
	block4 = new blocks(400,480,40,40);
	block5 = new blocks(400,440,40,40);
	block6 = new blocks(400,400,40,40);
	block7 = new blocks(400,360,40,40);
	block8 = new blocks(400,320,40,40);
	block9 = new blocks(400,280,40,40);
	block10 = new blocks(400,240,40,40);

	block11 = new blocks(440,600,40,40);
	block12 = new blocks(440,560,40,40);
	block13 = new blocks(440,520,40,40);
	block14 = new blocks(440,480,40,40);
	block15 = new blocks(440,440,40,40);
	block16 = new blocks(440,400,40,40);
	block17 = new blocks(440,360,40,40);

	block18 = new blocks(480,600,40,40);
	block19 = new blocks(480,560,40,40);
	block20 = new blocks(480,520,40,40);
	block21 = new blocks(480,480,40,40);
	block22 = new blocks(480,440,40,40);
	block23 = new blocks(480,400,40,40);
	block24 = new blocks(480,360,40,40);
	block25 = new blocks(480,320,40,40);
	block26 = new blocks(480,280,40,40);
	block27 = new blocks(480,240,40,40);
	block28 = new blocks(480,200,40,40);
	block29 = new blocks(480,160,40,40);
	block30 = new blocks(480,120,40,40);
	block31 = new blocks(480,80,40,40);

	balls = new ball(300,100,50);

	sling = new slingshot(balls.body, {x:300,y:100});

	Engine.run(engine);
}


function draw() {
	background("black")

	Engine.update(engine);

	ground.display();
	block.display();
	block2.display();
	block3.display();
	block4.display();
	block5.display();
	block6.display();
	block7.display();
	block8.display();
	block9.display();
	block10.display();

	block11.display();
	block12.display();
	block13.display();
	block14.display();
	block15.display();
	block16.display();
	block17.display();

	block18.display();
	block19.display();
	block20.display();
	block21.display();
	block22.display();
	block23.display();
	block24.display();
	block25.display();
	block26.display();
	block27.display();
	block28.display();
	block29.display();
	block30.display();
	block31.display();

	balls.display();

	sling.display();
}

function mouseDragged(){
	Matter.Body.setPosition(balls.body, {x: mouseX , y: mouseY});
  }
  
  
  /*function mouseReleased(){
  }*/



