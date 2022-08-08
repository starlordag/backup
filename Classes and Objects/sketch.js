const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    birds = new Bird(100,320);

    //layer 1
    box1 = new Box(710,300,70,70);
    box2 = new Box(910,300,70,70);
    pig1 = new Pig(810,320);
    log1 = new Log(810,260,300,PI/2)

    //layer 2
    box3 = new Box(710,240,70,70);
    box4 = new Box(910,240,70,70);
    pig2 = new Pig(810,240);
    log2 = new Log(810,180,300,PI/2)
    
    //layer 3
    box5 = new Box(810,150,70,70);
    log3 = new Log(760,120,130,PI/7)
    log4 = new Log(870,120,13,-PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    birds.display();

    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();
}