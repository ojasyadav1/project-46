var towerImg, tower;
var doorImg, door, doorsgroup;
var climber, climberImg;
var ghost, ghostImg;
var gamestate = "play";

function preload(){
towerImg = loadImage("tower.png");
doorImg = loadImage("door.png");
climberImg = loadImage("climber.png");
ghostImg = loadImage("ghost-standing.png");
spookySound = loadSound("spooky.wav");

}

function setup(){
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower", towerImg);
  tower.velocityY = 1;

  ghost = createSprite(200,100);
  ghost.addImage("ghost", ghostImg);
  ghost.velocityY = 3;
  ghost.scale = 0.5;

doorsgroup = new Group()
  
}



function draw(){
  background(0);
  if(keyDown("space")){
    ghost.velocityY=-10;
  } 
  ghost.velocityY=ghost.velocityY+0.8;
  if(tower.y>400){
    tower.y=300;
  }
  spawnDoors()
if(doorsgroup.isTouching(ghost)){
  ghost.destroy();
}
drawSprites();
}

function spawnDoors() {
  //write code here to spawn the doors in the tower
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    
    
    door.x = Math.round(random(120,400));
    
    door.addImage(doorImg);
    
    
    door.velocityY = 1;
    
    
    ghost.depth = door.depth;
    ghost.depth +=1;
   
    //assign lifetime to the variable
    door.lifetime = 800;
    

    
    //add each door to the group
    doorsgroup.add(door);
   
  }
}

