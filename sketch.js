var startImg,start
  
var road,roadImage;
 var player1,player2;
 var player1Img,player2Img;
 var obstacle1,obstacle2,obstacle1Image,obstacle2Image;
 var fuel,goldcoin,fuelImage,goldcoinImage;
 
 function preload(){
  startImg = loadImage("startflag.jpg")
  roadImage = loadImage("track.jpg");
  player1Img = loadImage("player1.png");
  player2Img = loadImage("player2.png");
  obstacle1Image = loadImage("obstacle1.png");
  obstacle2Image = loadImage("obstacle2.png");
   fuelImage = loadImage("fuel.png");
   goldcoinImage = loadImage("goldcoin.png");
  
  
 }

 function setup(){
  createCanvas(800,1000)
  start = createSprite(400,300,400,400);
  start.addImage(startImg);
  start.scale = 2;
  road = createSprite(400,300,800,600);
  road.addImage(roadImage);
  road.scale = 1;
  player1 = createSprite(350,525,50,200);
  player2 = createSprite(450,525,50,200);
  player1.addImage(player1Img);
  player1.scale = 0.2;
  player2.addImage(player2Img);
  player2.scale = 0.2;
 }

 function draw(){
  background(startImg);
  road.velocityY=5
  console.log(road.y)
  if(road.y>400){
    road.y = road.height/2;
  }
  if(keyDown("UP_ARROW")){player1.y-=3}
  fuels = new Group();
    powerCoins = new Group();
    obstacle1 = new Group(); 
    obstacle2 = new Group(); 
    var obstacle1Positions = [
      { x: width / 2 - 150, y: height - 1300, image: obstacle1Image },
      { x: width / 2 + 250, y: height - 1800, image: obstacle1Image },
      { x: width / 2 - 180, y: height - 3300, image: obstacle1Image },
     
      { x: width / 2 - 150, y: height - 4300, image: obstacle1Image },
      { x: width / 2, y: height - 5300, image: obstacle1Image },
    ];

    var obstacle2Positions = [
      { x: width / 2 + 250, y: height - 800, image: obstacle2Image },
      { x: width / 2 - 180, y: height - 2300, image: obstacle2Image },
      { x: width / 2, y: height - 2800, image: obstacle2Image },
     
      { x: width / 2 + 180, y: height - 3300, image: obstacle2Image },
      { x: width / 2 + 250, y: height - 3800, image: obstacle2Image },
      { x: width / 2 + 250, y: height - 4800, image: obstacle2Image },
      { x: width / 2 - 180, y: height - 5500, image: obstacle2Image }
    ];

    // Adding fuel sprite in the game
    this.addSprites(fuels, 4, fuelImage, 0.02);

    // Adding coin sprite in the game
    this.addSprites(powerCoins, 18, powerCoinImage, 0.09);

    //Adding obstacles sprite in the game
    this.addSprites(
      obstacle1,
      obstacle1Positions.length,
      obstacle1Image,
      0.04,
      obstacle1Positions
    );
    this.addSprites(
      obstacle2,
      obstacle2Positions.length,
      obstacle2Image,
      0.04,
      obstacle2Positions
    );
  

  //C41 //SA
  addSprites(spriteGroup, numberOfSprites, spriteImage, scale, positions = []) {
    for (var i = 0; i < numberOfSprites; i++) {
      var x, y;

      //C41 //SA
      if (positions.length > 0) {
        x = positions[i].x;
        y = positions[i].y;
        spriteImage = positions[i].image;
      } else {
        x = random(width / 2 + 150, width / 2 - 150);
        y = random(-height * 4.5, height - 400);
      }
      var sprite = createSprite(x, y);
      sprite.addImage("sprite", spriteImage);

      sprite.scale = scale;
      spriteGroup.add(sprite);
    }
  }

  drawSprites();
}
