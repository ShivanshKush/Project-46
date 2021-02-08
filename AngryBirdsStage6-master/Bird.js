class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png");
    this.arr = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if (this.body.velocity.x > 10 && this.body.position.x > 200){

    var posi = [this.body.position.x,this.body.position.y];
    this.arr.push(posi);
    }
    for (var i = 0; i < this.arr.length; i++){
      image(this.smokeimage,this.arr[i][0],this.arr[i][1])

    }

  }
}