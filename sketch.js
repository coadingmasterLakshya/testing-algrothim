var rectiangle1
var rectiangle2

function setup() {
  createCanvas(800,400);
  rectiangle1 = createSprite(75, 200, 75, 50);
  rectiangle2 = createSprite(750, 200, 75, 50);
  
  rectiangle1.shapeColor = "green";
  rectiangle2.shapeColor = "green";

  rectiangle1.velocityX = 5;
  rectiangle2.velocityX = -5;

}

function draw() {
  background(255,255,255);  
  
  //rectiangle2.x = mouseX;
  //rectiangle2.y = mouseY;

  if ( rectiangle2.x - rectiangle1.x <= rectiangle1.width/2 + rectiangle2.width/2 && 
    rectiangle1.x - rectiangle2.x <= rectiangle1.width/2 + rectiangle2.width/2 &&
    rectiangle2.y - rectiangle1.y <= rectiangle1.height/2 + rectiangle2.height/2 &&
    rectiangle1.y - rectiangle2.y <= rectiangle1.height/2 + rectiangle2.height/2
  ) {

  //  rectiangle1.shapeColor = "red";
  //  rectiangle2.shapeColor = "red";
  
  rectiangle1.velocityX = rectiangle1.velocityX * (-1);
  rectiangle2.velocityX = rectiangle2.velocityX * (-1);

  }
  else {

    rectiangle1.shapeColor = "green";
    rectiangle2.shapeColor = "green";
  
  }





  drawSprites();




}