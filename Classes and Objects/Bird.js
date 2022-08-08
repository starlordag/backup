class Bird{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50
        this.height = 50

        World.add(world, this.body);
    }

    display(){
        push();
        rect(CENTER);
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        fill("red")
        rect(0,0,this.width,this.height)
        pop();
    }
}