class BOB{
    constructor(x,y,r,fill){
        var options = {
            isStatic:false,
            restitution:0,
            friction:0.5,
            density:1.2,
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.fill = fill
        this.body=Matter.Bodies.circle(this.x, this.y, this.r/2, options); 
        World.add(world, this.body);
    }
    display(){
        var paperpos=this.body.position;

        push();
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER);
        strokeWeight(1);
        fill(this.fill);
        circle(this.x, this.y, this.r);
        pop();
    }
}