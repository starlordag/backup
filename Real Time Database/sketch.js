var database = firebase.database();
var ballPosition, position;
var ball;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    ballPosition = database.ref("ball/position");
    ballPosition.on("value",readPosition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(xPos,yPos){
    ballPosition.set({
        x: position.x + xPos,
        y: position.y + yPos
    });
}

function readPosition(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;                                                       
}