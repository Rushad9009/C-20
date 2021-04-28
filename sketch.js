var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  

  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(400,200,60,120);
  wall.shapeColor=rgb(80,80,80);
}

function draw() {
  background("black");  

  car.velocityX=speed;

if(wall.x-car.x< wall.width/2 + car/width/2){
  car.velocityX=0
  deformation =0.5*weight*speed*speed/22509;
  console.log(deformation)
  if(deformation>180){
    car.shapeColor=rgb(250,0,0);
  }
  if(deformation<180 && deformation >100){
    car.shapeColor=rgb(230,230,0);
  }
  if(deformation<100){
    car.shapeColor=rgb(0,255,0)
  }

}
  
 


  drawSprites();
}