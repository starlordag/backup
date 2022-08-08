class Player{
    constructor(){
        this.name = null;
        this.distance = 0;
        this.index = null;
        this.rank = null;
    }

    getCount(){
        var ref = database.ref("playerCount");
        ref.on("value",function(data){
            playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount: count
        });
    }

    updatePlayer(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name: this.name,
          distance: this.distance
        })
    }

    getRankNum(){
        var ref = database.ref("carsAtEnd");
        ref.on("value",(data)=>{
            this.rank = data.val();
        });
    }

    static updateRankNum(number){
        database.ref("/").update({
            carsAtEnd: number
        });
    }

    static getPlayerInfo(){
        var ref = database.ref("players");
        ref.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
}