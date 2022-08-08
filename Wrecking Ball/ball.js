class ball{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            density: 1.5,
            friction: 1
        }
        this.x=x
        this.y=y
        this.r=r
        this.body=Matter.Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }

    display(){
        pop();
        ellipseMode(CENTER);
        fill("red");
        ellipse(this.body.position.x,this.body.position.y,this.r);
        push();
    }
}