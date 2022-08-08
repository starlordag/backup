class Chain{
    constructor(body1, body2, offsetx, offsety){
        this.offsetx = offsetx
        this.offsety = offsety
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetx, y:this.offsety},
            isStatic: true,
            length:200
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){        
        var pointA = this.chain.bodyA.position;
        var pointb = this.chain.bodyB.position;
        
        this.chainx = pointb.x+this.offsetx;
        this.chainy = pointb.y+this.offsety; 
        
        strokeWeight(4);
        //line(pointA.x+130+this.offsety,pointA.y+270, this.chainx, this.chainy);
        line(pointA.x,pointA.y, this.chainx, this.chainy);
    }

    
}