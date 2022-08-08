const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState = "onSling";

function preload(){
}

function setup(){
    createCanvas(1400,700)
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500,700,2000,100);
    stand = new Ground(750,500,300,20);
    stand2 = new Ground(1200,250,300,20);

    //level 1
    block = new Box(650,470,30,40,"blue");
    block2 = new Box(680,470,30,40,"blue");
    block3 = new Box(710,470,30,40,"blue");
    block4 = new Box(740,470,30,40,"blue");
    block5 = new Box(770,470,30,40,"blue");
    block6 = new Box(800,470,30,40,"blue");
    block7 = new Box(830,470,30,40,"blue");

    //level 2
    block8 = new Box(680,430,30,40,"green");
    block9 = new Box(710,430,30,40,"green");
    block10 = new Box(740,430,30,40,"green");
    block11 = new Box(770,430,30,40,"green");
    block12 = new Box(800,430,30,40,"green");

    //level 3
    block13 = new Box(710,390,30,40,"yellow");
    block14 = new Box(740,390,30,40,"yellow");
    block15 = new Box(770,390,30,40,"yellow");

    //level 4
    block16 = new Box(740,350,30,40,"pink");

    //level 1
    bloc = new Box(1100,220,30,40,"pink");
    bloc2 = new Box(1130,220,30,40,"pink");
    bloc3 = new Box(1160,220,30,40,"pink");
    bloc4 = new Box(1190,220,30,40,"pink");
    bloc5 = new Box(1220,220,30,40,"pink");
    bloc6 = new Box(1250,220,30,40,"pink");
    bloc7 = new Box(1280,220,30,40,"pink");

    //level 2
    bloc8 = new Box(1130,180,30,40,"yellow");
    bloc9 = new Box(1160,180,30,40,"yellow");
    bloc10 = new Box(1190,180,30,40,"yellow");
    bloc11 = new Box(1220,180,30,40,"yellow");
    bloc12 = new Box(1250,180,30,40,"yellow");

    //level 3
    bloc13 = new Box(1160,140,30,40,"green");
    bloc14 = new Box(1190,140,30,40,"green");
    bloc15 = new Box(1220,140,30,40,"green");

    //level 4
    bloc16 = new Box(1190,100,30,40,"blue");

    polygons = new Polygon(300,400,50,60);

    slingshot1 = new slingshoot(polygons.body,{x:300,y:400});
    Engine.run(engine);
}

function draw(){
    background("black");

    ground.display();
    stand.display();
    stand2.display();
    
    //polygon
    polygons.display();
    slingshot1.display();

    //level1
    block.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    //level2
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    //level3
    block13.display();
    block14.display();
    block15.display();

    //level4
    block16.display();

    //level1
    bloc.display();
    bloc2.display();
    bloc3.display();
    bloc4.display();
    bloc5.display();
    bloc6.display();
    bloc7.display();

    //level2
    bloc8.display();
    bloc9.display();
    bloc10.display();
    bloc11.display();
    bloc12.display();

    //level3
    bloc13.display();
    bloc14.display();
    bloc15.display();

    //level4
    bloc16.display();

    drawSprites();
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(polygons.body, {x: mouseX , y: mouseY});
        Matter.Body.setStatic(polygons.body,false);
    }
}



function mouseReleased(){
    slingshot1.fly();
    Matter.Body.applyForce(polygons.body, polygons.body.position,{x:3 , y:-1 })
    gameState = "launched";
}