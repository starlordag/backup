var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var part = "notNull";

var divisionHeight=300;
var score =0;
var turn=0;
var gamestate = "play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 55; j <=width; j=j+50){
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 30; j <=width-10; j=j+50){
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 55; j <=width; j=j+50){
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 30; j <=width-10; j=j+50){
       plinkos.push(new Plinko(j,375));
    }
}
 
function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
  if(turn >= 5){
    gamestate = "end";
    part = "null";
  }
  if(gamestate === "end"){
    textSize(60)
    text("GAMEOVER",220,250);
  }
  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
  }
  for (var j = 0; j < particles.length; j++) {
     particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
  }
  /*if(part !== "null"){
  //  particles.display();
    if(particles.body.position<300){
      score = score+500
    }
    if(particles.body.position>301 && particles.body.position<600){
      score = score+300
    }
    if(particles.body.position>601 && particles.body.position<801){
      score = score+100
    }
  }*/
}

function mousePressed(){
  if(gamestate!=="end"){
    turn++
    particles=new Particle(mouseX,10,10);
  }
}