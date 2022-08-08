class Game{
    constructor(){}

    getState(){
        var ref = database.ref("gameState");
        ref.on("value",function(data){
            gameState = data.val();
        })
    }

    updateState(state){
        database.ref("/").update({
            gameState: state
        });
    }

    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();

            form = new Form();
            form.display();
        }

        car1 = createSprite(100,200);
        car1.addImage("car1",car1img);
        car2 = createSprite(300,200);
        car2.addImage("car2",car2img);
        car3 = createSprite(500,200);
        car3.addImage("car3",car3img);
        car4 = createSprite(700,200);
        car4.addImage("car4",car4img);
        cars = [car1,car2,car3,car4];
    }

    play(){
        form.hide();
        Player.getPlayerInfo();
        player.getRankNum();
        if(allPlayers !== undefined){
           // var yPos = 150;
           background("#E0BE91");
           image(trackImg,0,-displayHeight*24,displayWidth,displayHeight*25);
           var xPos = 100;
           var yPos = 0;
           var carIndex = 0;
            for(var plr in allPlayers){
                carIndex++
                xPos+=250;
                yPos = displayHeight-allPlayers[plr].distance;
                cars[carIndex-1].x = xPos;
                cars[carIndex-1].y = yPos;

                if(carIndex === player.index){
                    //cars[carIndex-1].shapeColor = "green";
                    noFill();
                    strokeWeight(2);
                    stroke("grey");
                    rectMode(CENTER);
                    rect(xPos,yPos,80,120);
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[carIndex-1].y;
                }
                /*if(plr === "player" + player.index){
                    fill("green");
                }
                else{
                    fill("red");
                }
                yPos+=50;
                textSize(15);
                text(allPlayers[plr].name+" : "+allPlayers[plr].distance, 150,yPos);*/
            }
        }

        if(keyDown(UP_ARROW) && player.index !== null){
            player.distance+=40;
            player.updatePlayer();
        }

        if(player.distance >= 21540){
            gameState = 2;
            player.rank+=1;
            Player.updateRankNum(player.rank);
        }

        drawSprites();
    }

    end(){
        console.log("game Ended");
    }
}