class Chain{
    constructor(bodya, bodyb){
        var options = {
            length: 100,
            stiffness: 1,
            bodyA: bodya, 
            bodyB: bodyb,
        }   
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        push();
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }
}