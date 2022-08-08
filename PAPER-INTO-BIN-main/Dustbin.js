class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            density: 1,
        }
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.image = loadImage("sprites/dustbingreen.png");
        this.bottumbody= Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        this.leftwall= Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        this.rightwall= Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world, this.bottumbody);
        World.add(world, this.leftwall);
        World.add(world, this.rightwall);
    }
    display(){
        push();
        rectMode(CENTER);
        fill("green");
        translate(this.rightwall.position.x, this.rightwall.position.y);
        rect(this.image, 0, -100,this.width,this.height);
        pop();
        push();
        rectMode(CENTER);
        fill("green");
        translate(this.leftwall.position.x, this.leftwall.position.y);
        rect(this.image, 0, -100,this.width,this.height);
        pop();
        push();
        rectMode(CENTER);
        fill("green");
        translate(this.bottumbody.position.x, this.bottumbody.position.y);
        image(this.image, 0, -100,this.width,this.height);
        pop();
    }
}