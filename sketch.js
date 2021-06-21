var level;
var boy,boyRightImg,boyLeftImg;

var hall,hallimg;
var bedroom,bedroomimg;
var kitchen,kitchenimg;
var computeroom,computeroomimg;
var ups,upsimg;
var fruitbasket,fruitbasketimg;
var cushin,cushinimg,cushin2,cushin3;
var gameState=0;
var levelbg;
var edges;
//variables for the dog
var dogs,dogRightImg,dogleftImg;

function preload(){

boyRightImg=loadAnimation("images/by1.png","images/by2.png","images/by3.png");
boyLefttImg=loadAnimation("images/by1_flipped.png","images/by2_flipped.png","images/by3_flipped.png");

dogRightImg=loadAnimation("images/d4.png","images/d5.png")
dogLeftImg=loadAnimation("images/d4_flipped.png","images/d5_flipped.png");
hallimg=loadImage("images/hall.jpg");
cushinimg=loadImage("images/cushin1.png");

}


function setup(){
  canvas = createCanvas(displayWidth-100,displayHeight-100);

  levelbg=createSprite((displayWidth-100)/2,(displayHeight-100)/2,10,10);

boy=createSprite(250,400,10,10);
boy.addAnimation("boyr",boyRightImg);
boy.addAnimation("boyl",boyLeftImg);
boy.scale=0.4;

dogs=createSprite(50,400,10,10);
dogs.velocityX=random(-6,6);
dogs.addAnimation("dogr",dogRightImg);
dogs.addAnimation("dogl",dogLeftImg);
dogs.scale=0.4;

edges=createEdgeSprites();

hallSetup();

boy.debug=true;
dogs.debug=true;
dogs.setCollider("rectangle",0,0,250,220);
}


function draw(){
  drawSprites()
if (gameState===0){
  hallPlay();

}
else
if (gameState===-1){
  fill("black");
  textSize(25);
  text("Try Again",700,280);
}
 
}
