class Chain{
    constructor(body1, body2, offsetx, offsety){
        this.offsetx = offsetx
        this.offsety = offsety
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetx, y:this.offsety}
        }
        console.log(options)
        this.chain = Constraint.create(options)
        World.add(world, this.chain)
    }

    display(){
        if(this.chain.bodyA){
            var pointA = this.bodyA;
            var pointB = this.bodyB;
            fill('black');
            push();
            
            pop();
        }
    }
    
}