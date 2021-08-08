var garden,rabbit;
var gardenImg,rabbitImg;
var redL,greenL,OrangeL,GL,RL,OL;
var apple,fruit;
var dice = 1;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  GL = loadImage('leaf.png');
  OL = loadImage('orangeleaf.png');
  RL = loadImage('redImage.png');
  fruit = loadImage('apple.png');
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);




}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
  
 
  if(rabbit.x>366){
    rabbit.x = 365;
  }

  if(rabbit.x<35){
    rabbit.x = 36;
  }
     if(frameCount%80 === 0 ){
       if(dice === 1){
         leafdrop();
       }else{
         feed();
       }
     }
    
  drawSprites();
  //console.log(rabbit.x);
}

function leafdrop(){
  
  redL = createSprite(300,40,20,20);
  redL.addImage(RL);
  redL.scale = 0.09;
  redL.x = Math.round(random(40,360));
  redL.velocityY = 2;
  
  greenL = createSprite(40,40,20,20);
  greenL.addImage(GL);
  greenL.scale = 0.09;
  greenL.x = Math.round(random(40,360));
  greenL.velocityY = 1.6;
  
  OrangeL = createSprite(260,40,20,20);
  OrangeL.addImage(OL);
  OrangeL.scale = 0.09;
  OrangeL.x = Math.round(random(40,360));
  OrangeL.velocityY = 3;
  dice = 2;
}


function feed(){
  apple = createSprite(random(40,360),40,20,20);
  apple.addImage(fruit);
  apple.scale = 0.09;
  //apple.x = Math.round(random(40,360));
  apple.velocityY = 2;
  if(apple.isTouching(rabbit)){
    apple.destroy;
  }
  dice = 1;
}
  
