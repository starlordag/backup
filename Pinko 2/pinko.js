class pinko{
    constructor(x,y,r){
        var options = {
            isStatic: true
        }
        this.r=r
        this.body = Matter.Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        noStroke();
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}