
function preload() {
    //load the images here
 cat2img=loadAnimation("images/cat2.png","images/cat3.png");
 cat1img=loadAnimation("images/cat1.png")
 gardenimg=loadImage("images/garden.png");
 mouse2img=loadAnimation("images/mouse2.png","images/mouse3.png");
 mouse1img=loadAnimation("images/mouse1.png")
 mouse3img=loadAnimation("images/mouse4.png")
 cat3img=loadAnimation("images/cat4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

 
 tom=createSprite(700,500)
 tom.addAnimation("abcde",cat1img)
 tom.scale=0.2;

 mouse=createSprite(200,500)
 mouse.addAnimation("abcdef",mouse1img)
 mouse.scale=0.2
 background(0);
}

function draw() {

    background(gardenimg);
    //Write condition here to evalute if tom and jerry collide
 if(tom.isTouching(mouse)){
  tom.velocityX=0;
  tom.addAnimation("abc",cat3img);
  tom.changeAnimation("abc");
  tom.x=300;
  tom.scale=0.2;
  mouse.addAnimation("abcd",mouse3img);
  mouse.changeAnimation("abcd");
  mouse.scale=0.2;
 }



    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode===LEFT_ARROW){
 tom.velocityX=-5;
 tom.addAnimation("ab",cat2img);
 tom.changeAnimation("ab")
 mouse.addAnimation("sdj",mouse2img);
 mouse.frameDelay=25;
 mouse.changeAnimation("sdj")
 }

}
