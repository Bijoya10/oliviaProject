var bg, bgImage, bgImage2, gameState;
var suppandi, goal, goalImage;
var obstacleImage;
var wallGroup

function preload() {
  bgImage = loadImage("images/bg.gif");
  bgImage2 = loadImage("images/bg2.gif");
  goalImage = loadImage("images/goal.gif");
  obstacleImage = loadImage("images/obstacle.gif");
}

function setup() {
  createCanvas(400, 400);
  bg = createSprite(200, 200, 400, 400);
  bg.addImage("background", bgImage);
  bg.addImage("background2", bgImage2);
  bg.scale = 0.63;

  suppandi = createSprite(200, 380, 10, 10);
  goal = createSprite(200, 30, 10, 10);
  goal.addImage("goal", goalImage);
  goal.scale = 0.1;
  obstacleGroup = new Group()
  wallGroup= new Group()

  for (var i = 0; i < 6; i = i + 1) {
    createObstacles(random(20+i*70,80+i*70),random(80,320));
  }

  gameState = "play";
}

function draw() {
  background("yellow");

  if (gameState === "play" || gameState === "world1") {
    suppandiMovement();
  }

  if (suppandi.isTouching(obstacleGroup)||suppandi.isTouching(wallGroup)) {
    gameState = "end";
  }
  drawSprites();

  if (gameState === "end") {
    text("GAME OVER", 200, 200);
  }

  if (suppandi.isTouching(goal)) {
    gameState = "world1";
    suppandi.x = 10;
    suppandi.y = 380;
  }

  if (gameState === "world1") {
    bg.changeImage("background2", bgImage2);
    bg.scale = 2;
    obstacleGroup.destroyEach();

    createMazeWalls();
  }
}
