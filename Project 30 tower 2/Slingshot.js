class slingshoot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20,
            density: 0.7,
            restitution: 0
        }
        this.bodyA = bodyA
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null
    }

    display(){
        push();
        stroke("white");
        if(gameState !== "launched"){
            line(this.bodyA.position.x, this.bodyA.position.y, 
                this.pointB.x, this.pointB.y);
        }
        pop();
    }
}