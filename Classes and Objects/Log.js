class Log{
    constructor(x,y,height,angle){
        var options = {
            'restitution':0.8,
            'friction':1,
            'density':2.0
        }
        this.body = Bodies.rectangle(x,y,20,height,options);
        this.width = 20
        this.height = height
        Matter.Body.setAngle(this.body,angle);
        World.add(world, this.body)
    }

    display(){
        push();
        rect(CENTER)
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("brown")
        rect(0,0,this.width,this.height)
        pop();
    }
}