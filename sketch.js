var engine, world;
var ball,ballimage,goal,goalimage,obstacle,obstacleimage,obstacle1,constrainedpoint,chain1,button,kick,aim,aimimg;//sling

function preload(){
  ballimage = loadImage("ball.png");
  goalimage = loadImage("goal.jpg");
  obstacleimage = loadImage("obstacle.jpg");
  kick = loadImage("kick.png");
  aimimg = loadImage("aim.png")
}

function setup() {
  createCanvas(800,800);
  ball = createSprite(400, 500, 50, 50);
  ball.addImage("ball",ballimage);
  ball.scale = 0.4;
  obstacle = createSprite(540,180,40,40);
  obstacle.addImage("obstacle",obstacleimage)
  obstacle.scale = 0.4;
  obstacle1 = createSprite(280,340,40,40);
  obstacle1.addImage("obstacle1",obstacleimage);
  obstacle1.scale = 0.4;
  aim = createSprite(255,200,20,20);
  aim.addImage("aim",aimimg);
  aim.scale = 0.5;
}

function draw() {
  background(goalimage);
  text(" X " + World.mouseX + "Y " + World.mouseY, World.mouseX,World.mouseY);
  if (keyIsDown(UP_ARROW)) {
    ball.velocityY = -1;
  }
  if (keyIsDown(DOWN_ARROW)){ 
    ball.velocityY = 1;
  }
  if (keyIsDown(LEFT_ARROW)){
    ball.velocityX = -1;
  }
  if (keyIsDown(RIGHT_ARROW)){
    ball.velocityX = 1;
  }
  if (aim.isTouching(ball)){
    textSize(80);
    fill("aqua");
    text("GOAL",300,100);
    ball.velocityX = 0;
    ball.velocityY = 0;
  }
  if (obstacle1.isTouching(ball) || obstacle.isTouching(ball)){
    textSize(80);
    fill("black");
    text("MISSED",300,100);
    ball.velocityY = 0;
    ball.velocityX = 0;
  }
  aim.setCollider("circle",0,0,10)
  obstacle.setCollider("rectangle",0.00001,0.00001);
  obstacle1.setCollider("rectangle",0.00001,0.00001);
  obstacle.collider.visible = true
  drawSprites();
}