class Bullets {
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,h);
        this.image = loadImage('smoke.png');
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
       image(this.image,pos.x,pos.y,10,10);
       pos.x = pos.x+5
    }

}