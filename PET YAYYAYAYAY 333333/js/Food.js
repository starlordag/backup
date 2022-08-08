class Foods{
    constructor(foods,lastFed){
        this.image = loadImage("images/Milk.png");
        this.foods = foods;
        this.lastFed = lastFed;
    }

    display(){
        var x=80;
        var y=150;
        imageMode(CENTER);
        if(foods!==0){
            for(var i = 1;i<=foods;i++){
                image(this.image,x,y,50,50);
                x = x+20;
                if(i%10===0){
                    x=80
                    y=y+50;
                }
            }
        }
;    }
}