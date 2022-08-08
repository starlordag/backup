class Box{
    constructor(x,y,width, height,fill){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.visibility = 255;
        this.width = width
        this.height = height
        this.fill=fill
        World.add(world, this.body);
    }
    display(){
        console.log(this.body.speed);
        fill(this.fill);
        if(this.body.speed<3){
            var angle = this.body.angle;
            var pos = this.body.position;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.visibility = this.visibility -1
            tint(255,this.visibility);
            rect(this.x,this.y,this,50,50)
            pop();
        }
      }
}
