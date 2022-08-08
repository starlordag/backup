class Box{
    constructor(x,y,width, height,fill){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width
        this.height = height
        this.fill=fill
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        fill(this.fill)
        rect(0, 0, this.width, this.height);
        pop();
      }
}
