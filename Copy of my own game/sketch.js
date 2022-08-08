var bg,bgImg;
var ninjaimg, rockMonsterimg, amongUsimg, Alienimg, Sonicimg, femaleimg;
var ninja, rockMonster, amongUs, Alien, Sonic, female;
var characterNumber = 6;
var PLAY = 1
var END = 2
var START = 0
var gameState = START;
var character;

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

}

function setup(){
    createCanvas(1600,400);
        if(gameState === START){
        var bg1 = createSprite(1300,0,1600,200);
        bg1.scale = 0.8
        bg1.addImage(bgImg);
        bg1.velocityX = -3
        if(bg1.x<70){
            bg1.x=1500;
        }

        var button = createButton("Ninja");
        button.position(300,100);
        var ninja1 = createSprite(300,250,100,100);
        ninja1.addAnimation("running ninja",ninjaimg);
        ninja1.scale = 0.5
        button.mousePressed(()=>{
            gameState = PLAY;
            characterNumber = 6;
        })

        var button2 = createButton("Alien");
        button2.position(500,100);
        var Alien1 = createSprite(530,250,100,100);
        Alien1.addAnimation("running alien",Alienimg);
        Alien1.scale = 1.4
        button2.mousePressed(()=>{
            gameState = PLAY;
            characterNumber = 3;
        })

        var button3 = createButton("Rock M.");
        button3.position(700,100);
        var rockMonster1 = createSprite(720,240,100,100);
        rockMonster1.addAnimation("running monster",rockMonsterimg);
        rockMonster1.scale = 2.8
        button3.mousePressed(()=>{
            gameState = PLAY;
            characterNumber = 5;
        })

        var button4 = createButton("Sonic");
        button4.position(900,100);
        var Sonic1 = createSprite(910,250,100,100);
        Sonic1.addAnimation("as fast as light",Sonicimg);
        Sonic1.scale = 3.8
        button4.mousePressed(()=>{
            gameState = PLAY;
            characterNumber = 2;
        })

        var button5 = createButton("Among Us");
        button5.position(1100,100);
        var amongUs1 = createSprite(1150,250,100,100);
        amongUs1.addAnimation("running imposter",amongUsimg);
        amongUs1.scale = 1.4
        button5.mousePressed(()=>{
            gameState = PLAY;
            characterNumber = 4;
        })

        var button6 = createButton("Elda");
        button6.position(1300,100);
        var female1 = createSprite(1315,250,100,100);
        female1.addAnimation("running female character",femaleimg);
        female1.scale = 2.3
        button6.mousePressed(()=>{
            gameState = PLAY;
            characterNumber = 1;
        })
    }
}

function draw(){
    background("Black");

    if(gameState === PLAY){
        bg = createSprite(1300,0,1600,200);
        bg.scale = 0.8
        bg.addImage(bgImg);
        bg.velocityX = -11

        if(bg.x<70){
            bg.x=1500;
        }
        if(characterNumber === 6){
            ninja = createSprite(200,300,100,100);
            ninja.addAnimation("running ninja",ninjaimg);
            ninja.scale = 0.5
            character = ninja
        }
        if(characterNumber === 5){
            rockMonster = createSprite(200,300,100,100);
            rockMonster.addAnimation("running monster",rockMonsterimg);
            rockMonster.scale = 2.8
            character = rockMonster  

        }
        if(characterNumber === 4){
            amongUs = createSprite(200,300,100,100);
            amongUs.addAnimation("running imposter",amongUsimg);
            amongUs.scale = 1.4
            character = amongUs
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
        }
        if(characterNumber === 1){
            female = createSprite(200,300,100,100);
            female.addAnimation("running female character",femaleimg);
            female.scale = 2.3
            character = female
        }
    }

    drawSprites();
    if(gameState === START){    
        fill("red");
        textSize(50)
        text("CHOOSE YOUR CHARACTER", 450,60);
    }

}

function selectCharacter(){
    
}
