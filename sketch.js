var fixedRect,movingRect;
var ob1,ob2;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  ob1=createSprite(100,200,50,50);
  ob2=createSprite(200,100,50,50);
  ob1.shapeColor="green";
}

function draw() {
  background(255,255,255); 
  if(isTouching(movingRect,ob1)){
    movingRect.shapeColor="orange";
    ob1.shapeColor="orange";
  }
  else{
    movingRect.shapeColor="green";
   ob1.shapeColor="green";
  }
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2&&object2.x-object1.x<object2.width/2+object1.width/2&&object2.y-object1.y<object2.height/2+object1.height/2&&object1.y-object2.y<object1.height/2+object2.height/2)
  {
return true;
}
else{
return false;
}
}