class Chain{
    constructor(bodyA, bodyB, offsetx, offsety){
        this.offsetx = offsetx
        this.offsety = offsety
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetx, y:this.offsety},
            isStatic:true,
            length:300
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);

    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointb = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointb.x+this.offsetx,pointb.x+this.offsety);
    }

    
}