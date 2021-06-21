
function hallSetup(){
   

    levelbg.addImage(hallimg);
    levelbg.scale=2;

cushin=createSprite(1080,380,10,10);
cushin.addImage(cushinimg);
cushin.scale=0.3;

cushin2=createSprite(190,380,10,10);
cushin2.addImage(cushinimg);
cushin2.scale=0.25;

cushin3=createSprite(1150,380,10,10);
cushin3.addImage(cushinimg);
cushin3.scale=0.3;
}

function hallPlay(){
    if(keyDown("right") && boy.x < 1400) {
        boy.x = boy.x + 10;
      }
      dogs.bounceOff(edges[0]);
      dogs.bounceOff(edges[1]);
      dogs.bounceOff(edges[2]);
      dogs.bounceOff(edges[3]);
     
if(dogs.velocityX<0){
  dogs.changeAnimation("dogl",dogleftImg);
}
else{
  dogs.changeAnimation("dogr",dogRightImg);
}
      if(boy.isTouching(dogs)){
        boy.velocityX=0;
        boy.velocityY=0;
        dogs.velocityX=0;
        dogs.velocityY=0;

       

        gameState===-1;
      }
      console.log(dogs.velocityX);
    
      if(keyDown("left") && boy.x > 50) {
        boy.changeAnimation()
        boy.x = boy.x - 10;
        
      }
      else
      if(keyDown("up")) {
        boy.y = boy.y - 10;
        
      }
      else
      if(keyDown("down")) {
        boy.y = boy.y + 10;
        
      }
    
      
}