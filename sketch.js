

var obstacle1,obstacle2;
var bg,kid;

function preload() {
  obstacle1=loadImage("snow4.png");
  bg=loadImage("snow3.jpg");
  kid=loadImage("kid.png");
}
function setup() {
  createCanvas(800,400);

obstacle2=createSprite(600,250,70,70);
obstacle2.addImage("kid1",kid);
obstacle2.velocityX=-2;

}

function draw() {
  background(bg);  

  spawnObstacles();

  drawSprites();

}
function spawnObstacles(){
  if (frameCount % 10 === 0){
    var obstacle = createSprite(1,1 ,50,50);
    obstacle.x = Math.round(random(10,800));
    obstacle.scale=0.1; 
    obstacle.velocityY = 2;
    obstacle.addImage("snow",obstacle1);
     }
    
     //assign scale and lifetime to the obstacle           
    
   
    
 
   
  }
 


