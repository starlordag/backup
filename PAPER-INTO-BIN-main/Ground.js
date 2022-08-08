class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            density: 1,
        }
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.body= Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world, this.body);
    }
    display(){
        push();
        rectMode(CENTER);
        fill("green");
        rect(this.body.position.x, this.body.position.y,this.width,this.height);
        pop();
    }
}