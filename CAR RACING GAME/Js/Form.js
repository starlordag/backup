class Form{
    constructor(){
        this.title = createElement("h2");
        this.input = createInput("Default Name");
        this.button = createButton("Continue");

        this.greeting = createElement("h5");
        this.greeting2 = createElement("h5");

        this.button2 = createButton("Max 4 Players");

        this.resetButtn = createButton("reset");
    }

    hide(){
        this.title.hide();
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.greeting2.hide();
        this.button2.hide();
    }

    display(){
        this.title.html("Car Racing Game");
        this.title.position(width/2+650,height/2-200);
        
        this.input.position(width/2+650,height/2-100);

        this.button.position(width/2+650,height/2);

        this.button2.position(width/2+650,height/2+100);

        this.resetButtn.position(displayWidth+550,displayHeight-750);
        this.resetButtn.size(50,50)
        this.resetButtn.mousePressed(()=>{
            player.updateCount(0);
            game.updateState(0);
            Player.updateRankNum(0);
            var playersCheck = database.ref("players")
            playersCheck.remove();
        });

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.button2.hide();

            player.name = this.input.value()
            playerCount++;
            player.index = playerCount;
            player.updatePlayer();
            player.updateCount(playerCount);

            this.greeting.html("Welcome "+player.name + ", Welcome to the Car Racing Game where you can race");
            this.greeting.position(width/2+600,height/2-20);
            this.greeting2.html("your family and friends");
            this.greeting2.position(width/2+630,height/2+20);
        });
    }
}