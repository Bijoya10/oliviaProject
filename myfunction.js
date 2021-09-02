function suppandiMovement() {
  if (keyDown("up")) {
    suppandi.y = suppandi.y - 5;
  }

  if (keyDown("down")) {
    suppandi.y = suppandi.y + 5;
  }

  if (keyDown("left")) {
    suppandi.x = suppandi.x - 5;
  }

  if (keyDown("right")) {
    suppandi.x = suppandi.x + 5;
  }
}

function createObstacles(x,y) {
  var obstacle = createSprite(x, y, 20, 20);
  obstacle.addImage("ob", obstacleImage);
  obstacle.scale = 0.08;
  obstacleGroup.add(obstacle);
}

function createMazeWalls() {
  var wall1 = createSprite(50, 100, 90, 10);
  wall1.shapeColor = "purple";
  wallGroup.add(wall1)

  var wall2 = createSprite(125, 150, 10, 90);
  wall2.shapeColor = "yellow";
  wallGroup.add(wall2)

  var wall3 = createSprite(200, 230, 10, 90);
  wall3.shapeColor = "purple";
  wallGroup.add(wall3)

  var wall4 = createSprite(90, 20, 90, 10);
  wall4.shapeColor = "yellow";
  wallGroup.add(wall4)

  var wall5 = createSprite(180, 75, 90, 10);
  wall5.shapeColor = "purple";
  wallGroup.add(wall5)

  var wall6 = createSprite(50, 200, 90, 10);
  wall6.shapeColor = "yellow";
  wallGroup.add(wall6)

  var wall7 = createSprite(350, 100, 10, 90);
  wall7.shapeColor = "purple";
  wallGroup.add(wall7)

  var wall8 = createSprite(250, 190, 90, 10);
  wall8.shapeColor = "yellow";
  wallGroup.add(wall8)

  var wall9 = createSprite(300, 100, 90, 10);
  wall9.shapeColor = "purple";
  wallGroup.add(wall9)

  var wall10 = createSprite(175, 140, 90, 10);
  wall10.shapeColor = "yellow";
  wallGroup.add(wall10)

  var wall11 = createSprite(100, 250, 90, 10);
  wall11.shapeColor = "purple";
  wallGroup.add(wall11)

  var wall12 = createSprite(300, 270, 10, 90);
  wall12.shapeColor = "yellow";
  wallGroup.add(wall12)

  var wall13 = createSprite(150, 300, 90, 10);
  wall13.shapeColor = "purple";
  wallGroup.add(wall13)

  var wall14 = createSprite(250, 350, 10, 90);
  wall14.shapeColor = "yellow";
  wallGroup.add(wall14)

  var wall15 = createSprite(50, 330, 10, 90);
  wall15.shapeColor = "purple";
  wallGroup.add(wall15)

  var wall16 = createSprite(100, 350, 90, 10);
  wall16.shapeColor = "yellow";
  wallGroup.add(wall16)

  var wall17 = createSprite(350, 250, 90, 10);
  wall17.shapeColor = "purple";
  wallGroup.add(wall17)

  var wall18 = createSprite(250, 30, 90, 10);
  wall18.shapeColor = "yellow";
  wallGroup.add(wall18)

  var wall19 = createSprite(300, 350, 90, 10);
  wall19.shapeColor = "purple";
  wallGroup.add(wall19)

  var wall20 = createSprite(80, 40, 10, 50);
  wall20.shapeColor = "yellow";
  wallGroup.add(wall20)

  var wall21 = createSprite(50, 90, 10, 30);
  wall21.shapeColor = "purple";
  wallGroup.add(wall21)

  var wall22 = createSprite(175, 70, 10, 20);
  wall22.shapeColor = "yellow";
  wallGroup.add(wall22)

  var wall23 = createSprite(165, 20, 10, 50);
  wall23.shapeColor = "purple";
  wallGroup.add(wall23)

  var wall24 = createSprite(80, 160, 90, 10);
  wall24.shapeColor = "yellow";
  wallGroup.add(wall24)

  var wall25 = createSprite(160, 220, 90, 10);
  wall25.shapeColor = "purple";
  wallGroup.add(wall25)

  var wall26 = createSprite(300, 350, 90, 10);
  wall26.shapeColor = "yellow";
  wallGroup.add(wall26)

  var wall27 = createSprite(55, 190, 10, 20);
  wall27.shapeColor = "purple";
  wallGroup.add(wall27)

  var wall28 = createSprite(9, 140, 10, 80);
  wall28.shapeColor = "yellow";
  wallGroup.add(wall28)

  var wall29 = createSprite(100, 140, 10, 40);
  wall29.shapeColor = "purple";
  wallGroup.add(wall29)

  var wall30 = createSprite(8, 70, 10, 80);
  wall30.shapeColor = "yellow";
  wallGroup.add(wall30)

  var wall31 = createSprite(300, 350, 90, 10);
  wall31.shapeColor = "purple";
  wallGroup.add(wall31)

  var wall32 = createSprite(30, 50, 50, 10);
  wall32.shapeColor = "yellow";
  wallGroup.add(wall32)

  var wall33 = createSprite(200, 90, 10, 40);
  wall33.shapeColor = "purple";
  wallGroup.add(wall33)

  var wall34 = createSprite(265, 50, 10, 30);
  wall34.shapeColor = "yellow";
  wallGroup.add(wall34)

  var wall35 = createSprite(375, 80, 50, 10);
  wall35.shapeColor = "purple";
  wallGroup.add(wall35)

  var wall36 = createSprite(290, 160, 10, 50);
  wall36.shapeColor = "yellow";
  wallGroup.add(wall36)

  var wall37 = createSprite(50, 250, 10, 40);
  wall37.shapeColor = "purple";
  wallGroup.add(wall37)

  var wall38 = createSprite(5, 250, 10, 80);
  wall38.shapeColor = "yellow";
  wallGroup.add(wall38)

  var wall39 = createSprite(20, 310, 60, 10);
  wall39.shapeColor = "purple";
  wallGroup.add(wall39)

  var wall40 = createSprite(85, 310, 10, 80);
  wall40.shapeColor = "yellow";
  wallGroup.add(wall40)

  var wall41 = createSprite(180, 390, 100, 10);
  wall41.shapeColor = "purple";
  wallGroup.add(wall41)

  var wall42 = createSprite(190, 360, 10, 50);
  wall42.shapeColor = "yellow";
  wallGroup.add(wall42)

  var wall43 = createSprite(375, 210, 10, 90);
  wall43.shapeColor = "purple";
  wallGroup.add(wall43)

  var wall44 = createSprite(270, 270, 70, 10);
  wall44.shapeColor = "yellow";
  wallGroup.add(wall44)

  var wall45 = createSprite(155, 160, 10, 40);
  wall45.shapeColor = "yellow";
  wallGroup.add(wall45)

  var wall46 = createSprite(145, 270, 10, 50);
  wall46.shapeColor = "purple";
  wallGroup.add(wall46)

  var wall47 = createSprite(250, 160, 10, 70);
  wall47.shapeColor = "yellow";
  wallGroup.add(wall47)

  var wall48 = createSprite(315, 50, 10, 100);
  wall48.shapeColor = "purple";
  wallGroup.add(wall48)

  var wall49 = createSprite(340, 270, 10, 50);
  wall49.shapeColor = "yellow";
  wallGroup.add(wall49)
}
