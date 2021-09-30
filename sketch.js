var retMovendo;
var retFixo;
var abc
var abc2
function setup() {
  createCanvas(800,400);
  retMovendo = createSprite(200,200,50,70);
  retMovendo.shapeColor="yellow";
  retMovendo.debug = true;

  retFixo = createSprite(300,30,80,90);
  retFixo.shapeColor="blue";
  retFixo.debug = true;

  abc = createSprite(200,30,80,90);
  abc.shapeColor="blue";
  abc.debug = true;
  abc.velocityY = 2;

  abc2 = createSprite(200,300,80,90);
  abc2.shapeColor="blue";
  abc2.debug = true;
  abc2.velocityY = -2;
  


}

function draw() {
  background("black"); 
  retMovendo.x = World.mouseX;
  retMovendo.y = World.mouseY; 

  if(retMovendo.x - retFixo.x < retFixo.width/2 + retMovendo.width/2 && 
    retFixo.x - retMovendo.x < retFixo.width/2 + retMovendo.width/2 &&
    retMovendo.y - retFixo.y < retFixo.height/2 + retMovendo.height/2 &&
    retFixo.y - retMovendo.y < retFixo.height/2 + retMovendo.height/2){
    retFixo.shapeColor="red";
    retMovendo.shapeColor="purple";
  }else{
    retMovendo.shapeColor="yellow";
    retFixo.shapeColor="blue";
  }
  if (abc.x - abc2.x <abc.width/2 + abc2.width/2 &&
    abc2.x - abc.x <abc.width/2 + abc2.width/2 ){
    abc.velocityX = abc.velocityX * (-1);
    abc2.velocityX = abc2.velocityX * (-1);
  }
  if (abc.y - abc2.y <abc.height/2 + abc2.height/2 &&
    abc2.y - abc.y <abc.height/2 + abc2.height/2 ){
    abc.velocityY = abc.velocityY * (-1);
    abc2.velocityY = abc2.velocityY * (-1);
  }
  
  drawSprites();
}