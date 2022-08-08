class slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 250
        }
        this.bodyA = bodyA
        this.pointB = pointB
        this.body = Constraint.create(options)
        World.add(world,this.body)
    }

    display(){
        push();
        stroke("green")
        line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y);
        pop();
    }
}