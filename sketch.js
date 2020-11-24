
var bullet,wall;
var s,w ,th;
function setup() {
  createCanvas(1600,400);
s=random(223,321)
w=random(30,52)
th=random(22,83)
bullet=  createSprite(50, 200, 10, 50);
bullet.velocityX=s;
bullet.shapeColor=(225)

wall= createSprite(1500, 200, th,height/2);
wall.shapeColor= color (80,80,80)
}

function draw() {
  background(255,255,255); 
 if (hasCollided(bullet,wall)){
   bullet .velocityX = 0;
   var damage= 0.5*w*s*s/(th*th*th);

   if(damage>10){
     wall.shapeColor=color(255,0,0);
   }
   if(damage<10)
   wall.shapeColor=color(0,255,0);
 }
  drawSprites();
}
function hasCollided (b,wall){
bulletRightEdge=b.x+b.width;
wallLeftEdge=wall.x
if(RightEdge>=wallLeftEdge){
  return true 
}
return false 

}