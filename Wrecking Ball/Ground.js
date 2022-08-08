class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.body = Matter.Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
    }

    display(){
        push();
        rectMode(CENTER);
        fill("green")
        rect(this.x,this.y,this.width,this.height);
        pop();
    }
}