
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gameState = "onSling";
var boy,tree;
var stoneBodyPosition, mongoBodyPosition;
var sling, engine, world, stones, ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10

function preload(){
  boy = loadImage("sprites/boy.png");
  tree = loadImage("sprites/tree.png");
}

function setup(){
  createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,700,900,100);
	
	mango1 = new Mango(500,400,30,60);
	mango2 = new Mango(550,400,30,60);
	mango3 = new Mango(700,380,30,60);
	mango4 = new Mango(600,350,30,60);
	mango5 = new Mango(680,300,30,60);
	mango6 = new Mango(650,370,30,60);
	mango7 = new Mango(540,300,30,60);
	mango8 = new Mango(630,300,30,60);
	mango9 = new Mango(750,370,30,60);
	mango10 = new Mango(780,400,30,60);

  stones = new stone(200,550,45,45);
  
  sling = new slingshoot(stones.body,{x:200,y:555});

	Engine.run(engine);
  
}


function draw(){
  rectMode(CENTER);
  background("white");

  
    ground.display();

    image(this.tree,390,200,450,490);

    image(this.boy,170,490,170,240);

    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();
    mango9.display();
    mango10.display();

    stones.display();

    sling.display();

    detection(stones,mango1);
    detection(stones,mango2);
    detection(stones,mango3);
    detection(stones,mango4);
    detection(stones,mango5);
    detection(stones,mango6);
    detection(stones,mango7);
    detection(stones,mango8);
    detection(stones,mango9);
    detection(stones,mango10);
  
  drawSprites();
 
}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(stones.body, {x: mouseX , y: mouseY});
      Matter.Body.setStatic(stones.body,false);
  }
}


function mouseReleased(){
  sling.fly();
  Matter.Body.applyForce(stones.body, stones.body.position,{x:11 , y:-5 })
  gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(stones.body, {x: 200 , y: 550});
        Matter.Body.setStatic(stones.body,true);
        sling.attach(stones.body);
        gameState = "onSling"
    } 
}

function detection(Lstone,Lmango){
  mangoBodyPosition=Lmango.body.position;
  stoneBodyPosition=Lstone.body.position;

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y,
    mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=Lmango.width+Lstone.width){
    Matter.Body.setStatic(Lmango.body,false);
  }
}



