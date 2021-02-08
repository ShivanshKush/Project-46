const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform,ground,grond;
var soldier1,soldier2,plane1,plane2,plane3;
var array = [];
var bullets,bullets1;



function preload() {
    backgroundImg = loadImage("sprites/military base.jpg");
}

function setup(){
    var canvas = createCanvas(1350,650);
    engine = Engine.create();
    world = engine.world;

    soldier1 = new Soldiers(100,600);
    soldier2 = new Soldiers(100,400);
    
    ground = new Ground(130,660,2990,20);
    grond = new Ground(100,450,100,10);

    
    randomValue();
}



function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
   soldier1.display();
   soldier2.display();

   ground.display();
   grond.display();
  
   for (var j = 0;j< 3; j++){
       array[j]
    array[j].display();
   }

   if (keyDown(RIGHT_ARROW)){
      bullets  = new Bullets(100,600,10,10);
      bullets.x = bullets.x + 5
   }
   if (keyDown(UP_ARROW)){
    bullets1  = new Bullets(100,600,10,10);
    bullets1.x = bullets1.x + 5;
 }

 /*if (bullets.isTouching(Planes)){
     Planes.visibility = 0
 }*/
}   


function randomValue(){
   /* i = Math.round(random(1,3));
    plane = new Planes(400,450,i);
    console.log(plane)
    Array[]
    plane.display();*/

    for (var j = 0; j < 3; j++) {
        i = Math.round(random(1,3));
        console.log(i)
    array[j] = new Planes(1270,Math.round(random(100,300)),i);
    }
    
}
function keyPressed(){
    if (keyCode == 77){
        bullets  = new Bullets(100,600,10,10);
        bullets.x = bullets.x + 5
    }
    if (keyCode == 32){
        bullets1  = new Bullets(100,400,10,10);

        console.log(bullets1);
     }
}
function isTouching(){

}
