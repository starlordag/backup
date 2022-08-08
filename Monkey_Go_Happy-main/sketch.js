var backImage,backgr;
var player, player_running;
var ground,ground_img;
var bananapng;
var bananaGroup,obstacleGroup;
var stonepng;
var score;
var gmoverimg, gmover;

var END =0;
var PLAY =1;
var gameState = PLAY;

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananapng = loadImage("banana.png");
  stonepng = loadImage("stone.png");
  gmoverimg = loadImage("gameOver.png");

}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;

  bananaGroup = new Group();
  obstacleGroup = new Group();

  score = 0;

  gmover = createSprite(400,200,10,10);
  gmover.addImage(gmoverimg);
  gmover.visible = false;
}

function draw() { 

  background(0);

  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(keyDown("space") ) {
      player.velocityY = -12;
    }

    //obstacles
    bananas();
    obsticles();

    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);

    if(bananaGroup.isTouching(player)){
      bananaGroup.destroyEach();
      score = score + 1;
      player.scale = player.scale + 0.05;
    }

    if(obstacleGroup.isTouching(player)){
      gameState = END;
    }
  } else if(gameState === END){
    backgr.velocityX = 0;
    player.visible = false;

    bananaGroup.destroyEach();
    obstacleGroup.destroyEach();

    gmover.visible = true;
  }

  drawSprites();
  textSize(30);
  fill("white");
  text("Score: " + score, 340,50);
}

function bananas(){
  if(frameCount % 212 === 0){
    var banana = createSprite(805,100,20,20)
    banana.y = Math.round(random(90,270))
    banana.velocityX = -4
    banana.addImage(bananapng)
    banana.scale = 0.05
    banana.lifetime = 210
    bananaGroup.add(banana)
  }
}

function obsticles(){
  if (frameCount % 195 === 0){
    var obstacle = createSprite(805,315,10,40);
    obstacle.velocityX = -4;  
    obstacle.addImage(stonepng)
    obstacle.scale = 0.2;
    obstacle.lifetime = 210;
    obstacleGroup.add(obstacle);
  }
 }
