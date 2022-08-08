class blocks{
    constructor(x,y,width,height){
        var options = {
            density: 1,
            friction: 1,
            restitution: 0.4
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
        fill("blue")
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}