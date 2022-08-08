var bg,bgImg;
var ninjaimg, rockMonsterimg, amongUsimg, Alienimg, Sonicimg, femaleimg;
var ninja, rockMonster, amongUs, Alien, Sonic, female;
var characterNumber = 6;
var PLAY = 1
var END = 2
var START = 0
var gameState = START;
var character;
var bg1, chooseCharacter;
var button,button2,button3,button4,button5,button6,RestartButton;
var ninja1, rockMonster1, amongUs1, Alien1, Sonic1, female1;
var invisFloor;
var runningSoundEffect;
var Important = 0.8;
var rand;
var obstacle1,obstacle2,obstacle3,obstacle4,coinimg;
var obstacleGroup,coinsGroup,characterGroup,bootsGroup;
var Score = 0;
var CoinsCollected = 0;
var bootimg;

function preload(){
    //background
    bgImg = loadImage("images/bgimage.png");

    //characters
    ninjaimg = loadAnimation("images/Character6/Ninja1.png","images/Character6/Ninja2.png","images/Character6/Ninja3.png",
                          "images/Character6/Ninja4.png","images/Character6/Ninja5.png")
    Alienimg = loadAnimation("images/Character5/Alien1.png","images/Character5/Alien2.png","images/Character5/Alien3.png",
                          "images/Character5/Alien4.png","images/Character5/Alien5.png","images/Character5/Alien6.png",
                          "images/Character5/Alien7.png");
    rockMonsterimg = loadAnimation("images/Character4/RM1.png","images/Character4/RM2.png","images/Character4/RM3.png",
                                "images/Character4/RM4.png","images/Character4/RM5.png","images/Character4/RM6.png",
                                "images/Character4/RM7.png","images/Character4/RM8.png");
    Sonicimg = loadAnimation("images/Character3/Sonic1.png","images/Character3/Sonic2.png","images/Character3/Sonic3.png",
                          "images/Character3/Sonic4.png");
    amongUsimg = loadAnimation("images/Character2/amongUs1.png","images/Character2/amongUs2.png","images/Character2/amongUs3.png",
                            "images/Character2/amongUs4.png");
    femaleimg = loadAnimation("images/Character1/femaleSkin1.png","images/Character1/femaleSkin2.png","images/Character1/femaleSkin3.png",
                           "images/Character1/femaleSkin4.png","images/Character1/femaleSkin5.png","images/Character1/femaleSkin6.png",
                           "images/Character1/femaleSkin7.png","images/Character1/femaleSkin8.png");
    runningSoundEffect = loadSound("SoundEffects/RunningSoundEffect.mp3");
    obstacle1 = loadImage("Images/Obstacles/block.png");
    obstacle2 = loadImage("Images/Obstacles/Spike.png");
    obstacle3 = loadImage("Images/Obstacles/turtle.png");
    obstacle4 = loadImage("Images/Obstacles/electric.png");
    coinimg = loadImage("Images/coins.png");
    bootimg = loadImage("Images/runningBoost.png");

}

function setup(){
    createCanvas(1600,400);

    obstacleGroup = new Group();
    coinsGroup = new Group();
    characterGroup = new Group();
    bootsGroup = new Group();

    invisFloor = createSprite(200,400,1600,10);
    invisFloor.shapeColor = "Red"
    invisFloor.visible = false;
    bg1 = createSprite(1300,0,1600,200);
    bg1.scale = 0.8
    bg1.addImage(bgImg);
    bg1.velocityX = -3

    button = createButton("Ninja");
    button.position(300,100);
    ninja1 = createSprite(300,250,100,100);
    ninja1.addAnimation("running ninja",ninjaimg);
    ninja1.scale = 0.5
    button.mousePressed(()=>{
        gameState = PLAY;
        characterNumber = 6;
        changeGamestateToPlay();
    })

    button2 = createButton("Alien");
    button2.position(500,100);
    Alien1 = createSprite(530,250,100,100);
    Alien1.addAnimation("running alien",Alienimg);
    Alien1.scale = 1.4
    button2.mousePressed(()=>{
        gameState = PLAY;
        characterNumber = 3;
        changeGamestateToPlay();
    })

    button3 = createButton("Rock M.");
    button3.position(700,100);
    rockMonster1 = createSprite(720,240,100,100);
    rockMonster1.addAnimation("running monster",rockMonsterimg);
    rockMonster1.scale = 2.8
    button3.mousePressed(()=>{
        gameState = PLAY;
        characterNumber = 5;
        changeGamestateToPlay();
    })

    button4 = createButton("Sonic");
    button4.position(900,100);
    Sonic1 = createSprite(910,250,100,100);
    Sonic1.addAnimation("as fast as light",Sonicimg);
    Sonic1.scale = 3.8
    button4.mousePressed(()=>{
        gameState = PLAY;
        characterNumber = 2;
        changeGamestateToPlay();
    })

    button5 = createButton("Among Us");
    button5.position(1100,100);
    amongUs1 = createSprite(1150,250,100,100);
    amongUs1.addAnimation("running imposter",amongUsimg);
    amongUs1.scale = 1.4
    button5.mousePressed(()=>{
        gameState = PLAY;
        characterNumber = 4;
        changeGamestateToPlay();
    })

    button6 = createButton("Elda");
    button6.position(1300,100);
    female1 = createSprite(1315,250,100,100);
    female1.addAnimation("running female character",femaleimg);
    female1.scale = 2.3
    button6.mousePressed(()=>{
        gameState = PLAY;
        characterNumber = 1;
        changeGamestateToPlay();
    })

    chooseCharacter = createElement("h1","CHOOSE YOUR CHARACTER");
    chooseCharacter.position(600,10);
}


    function draw(){
        background("black");

        if(gameState === END){
            theEnd();
        }

        drawSprites();

        if(gameState === END){
            textSize(70);
            fill("Red");
            text("GAME OVER",535,200)
        }

        if(gameState === PLAY){
            if(frameCount%150 === 0){
                Score = Score + 1
            }

            textSize(30)
            fill("black");
            text("Your Score: " + Score,100,50);
            text("Coins Collected: " + CoinsCollected,600,50);

            chooseCharacter.hide();
            if(bg1.x<70){
                bg1.x=1500;
            }

            Obstacles();
            coins();
            Boots();


            RestartButton = createButton("Leave");
            RestartButton.position(1450,30);
            RestartButton.size(100,20)
            RestartButton.mousePressed(()=>{
                endingGame();
                gameState = START;
                Score = 0;
                CoinsCollected = 0;
            })
        if(characterNumber === 6){
            if(keyDown("space")&& ninja.y >= 159.9) {
                ninja.velocityY = -12;
              }
            ninja.velocityY = ninja.velocityY + Important;   
        }

        if(characterNumber === 5){
            if(keyDown("space")&& rockMonster.y >= 149.9){
                rockMonster.velocityY = -12
            }
            rockMonster.velocityY = rockMonster.velocityY + Important;
        }

        if(characterNumber === 4){
            if(keyDown("space")&& amongUs.y >= 159.9){
                amongUs.velocityY = -12
            }
            amongUs.velocityY = amongUs.velocityY + Important;
        }

        if(characterNumber === 3){
            if(keyDown("space")&& Alien.y >= 159.9){
                Alien.velocityY = -12
            }
            Alien.velocityY = Alien.velocityY + Important;   
        }

        if(characterNumber === 2){
            if(keyDown("space")&& Sonic.y >= 159.9){
                Sonic.velocityY = -12
            }
            Sonic.velocityY = Sonic.velocityY + Important;
        }

        if(characterNumber === 1){
            if(keyDown("space")&& female.y >= 159.9){
                female.velocityY = -12
            }
            female.velocityY = female.velocityY + Important;
        }

        if(characterGroup.isTouching(coinsGroup)){
            coinsGroup.destroyEach();
            CoinsCollected = CoinsCollected + 1
            bg1.velocityX = -9
        }

        if(characterGroup.isTouching(obstacleGroup)){
            coinsGroup.destroyEach();
            obstacleGroup.destroyEach();
            gameState = END;
        }

        if(characterGroup.isTouching(bootsGroup)){
            Score = Score + 20;
            for(i=0;i<100;i++){
                coinsGroup.destroyEach();
                obstacleGroup.destroyEach();
                bootsGroup.destroyEach();
                bg1.velocityX = -20
            }
        }
    }

    if(gameState === START){   
        if(bg1.x<70){
            bg1.x=1500;
        }
    }
    if(character !== undefined)
    {
     character.collide(invisFloor);
    }
}


function changeGamestateToPlay(){
    button.remove();
    button2.remove();
    button3.remove();
    button4.remove();
    button5.remove();
    button6.remove();

    ninja1.remove();
    rockMonster1.remove();
    amongUs1.remove();
    Alien1.remove();
    Sonic1.remove();
    female1.remove();

    bg1.velocityX = -9

    if(characterNumber === 6){
        ninja = createSprite(200,300,100,100);
        ninja.addAnimation("running ninja",ninjaimg);
        ninja.scale = 0.5
        character = ninja
        //ninja.debug = true;
      }
    if(characterNumber === 5){
        rockMonster = createSprite(200,300,100,100);
        rockMonster.addAnimation("running monster",rockMonsterimg);
        rockMonster.scale = 2.8
        character = rockMonster  
        //rockMonster.debug = true;
    }
    if(characterNumber === 4){
        amongUs = createSprite(200,300,100,100);
        amongUs.addAnimation("running imposter",amongUsimg);
        amongUs.scale = 1.4
        character = amongUs
        //amongUs.debug = true;
    }
    if(characterNumber === 3){
        Alien = createSprite(200,300,100,100);
        Alien.addAnimation("running alien",Alienimg);
        Alien.scale = 1.4
        character = Alien
    }
    if(characterNumber === 2){
        Sonic = createSprite(200,300,100,100);
        Sonic.addAnimation("as fast as light",Sonicimg);
        Sonic.scale = 3.8
        character = Sonic
        //Sonic.debug = true;
    }
    if(characterNumber === 1){
        female = createSprite(200,300,100,100);
        female.addAnimation("running female character",femaleimg);
        female.scale = 2.3
        character = female
        //female.debug = true;
    }
    characterGroup.add(character);
}

function endingGame(){
    bg1.remove();

    chooseCharacter.show();

    if(bg1.x<70){
        bg1.x=1500;
    }

    bg1 = createSprite(1300,0,1600,200);
    bg1.scale = 0.8
    bg1.addImage(bgImg);
    bg1.velocityX = -3

    if(bg1.x<70){
        bg1.x=1500;
    }

    button = createButton("Ninja");
    button.position(300,100);
    ninja1 = createSprite(300,250,100,100);
    ninja1.addAnimation("running ninja",ninjaimg);
    ninja1.scale = 0.5
    button.mousePressed(()=>{
        gameState = PLAY;
        characterNumber = 6;
        changeGamestateToPlay();
    })

    button2 = createButton("Alien");
    button2.position(500,100);
    Alien1 = createSprite(530,250,100,100);
    Alien1.addAnimation("running alien",Alienimg);
    Alien1.scale = 1.4
    button2.mousePressed(()=>{
        gameState = PLAY;
        characterNumber = 3;
        changeGamestateToPlay();
    })

    button3 = createButton("Rock M.");
    button3.position(700,100);
    rockMonster1 = createSprite(720,240,100,100);
    rockMonster1.addAnimation("running monster",rockMonsterimg);
    rockMonster1.scale = 2.8
    button3.mousePressed(()=>{
        gameState = PLAY;
        characterNumber = 5;
        changeGamestateToPlay();
    })

    button4 = createButton("Sonic");
    button4.position(900,100);
    Sonic1 = createSprite(910,250,100,100);
    Sonic1.addAnimation("as fast as light",Sonicimg);
    Sonic1.scale = 3.8
    button4.mousePressed(()=>{
        gameState = PLAY;
        characterNumber = 2;
        changeGamestateToPlay();
    })

    button5 = createButton("Among Us");
    button5.position(1100,100);
    amongUs1 = createSprite(1150,250,100,100);
    amongUs1.addAnimation("running imposter",amongUsimg);
    amongUs1.scale = 1.4
    button5.mousePressed(()=>{
        gameState = PLAY;
        characterNumber = 4;
        changeGamestateToPlay();
    })

    button6 = createButton("Elda");
    button6.position(1300,100);
    female1 = createSprite(1315,250,100,100);
    female1.addAnimation("running female character",femaleimg);
    female1.scale = 2.3
    button6.mousePressed(()=>{
        gameState = PLAY;
        characterNumber = 1;
        changeGamestateToPlay();
    })
}

function Obstacles(){
    if(frameCount%200 === 0){
        var obstacle = createSprite(1650,349,10,40);
        obstacle.velocityX = Math.round(random(-20,-9));
        obstacle.lifeTime = 20

        rand = Math.round(random(1,4))
        switch(rand){
            case 1: obstacle.addImage(obstacle1)
            break;
            case 2: obstacle.addImage(obstacle2)
            break;
            case 3: obstacle.addImage(obstacle3)
            break;
            case 4: obstacle.addImage(obstacle4)
            break;
            default: break;
        }
        obstacleGroup.add(obstacle);
    }
}

function coins(){
    if(frameCount%220 === 0){
        var coins = createSprite(1650,Math.round(random(150,300)),10,40);
        coins.velocityX = -12;
        coins.addImage(coinimg);
        coins.scale = 0.35
        coinsGroup.add(coins);
    }
}

function Boots(){
    if(frameCount%1500 === 0){
        var Boots = createSprite(1650,Math.round(random(150,300)),10,40);
        Boots.velocityX = -15;
        Boots.addImage(bootimg);
        Boots.scale = 0.35
        bootsGroup.add(Boots);
    }
}

function theEnd(){
    textSize(70);
    fill("Red");

    text("Your Score: " + Score, 100, 50);
    text("Coins Collected " + CoinsCollected, 800, 50);

    fill("White");
    text("Great Job!!", 550, 300);
}
