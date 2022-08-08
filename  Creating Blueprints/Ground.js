class Ground{
    constructor(x,y,width,height){
        var ground_properties = {
            isStatic: true
        }
        this.ground = Bodies.rectangle(x,y,width,height,ground_properties)
        this.width = width
        this.height = height
        World.add(world,this.ground)
    }

    display(){
        push();
        rectMode(CENTER);
        fill("green")
        rect(this.ground.position.x,this.ground.position.y,this.width,this.height); 
        pop(); 
    }
} 