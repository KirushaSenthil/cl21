var wall, thickness;
var bullet, sped, weight;

function setup() {
  createCanvas(1600,400);
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor(80,80,80)
  thickness=random(22,83)
  sped=random(223,321)
  weight=random(30,52)
 
}

function draw() {
  background(0); 
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapeColor=color(255,0,0)
    }
    if(damage<10){
      wall.shapeColor(0,255,0)
    }
  }
  
 hasCollided()
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+bullet.width;
  wallLeftEdge=lwall.x
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}
  


