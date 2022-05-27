var blueBin, greenBin, yellowBin, redBin;
var blueBinImg, greenBinImg, yellowBinImg, redBinImg
var batteryImg, mobileImg, newspaperImg, crumpledpaperImg;
var breadImg, fishImg, polybagImg, boxImg, bottleImg, paperImg;
var appleImg, eggImg, gbottleImg;
var bg2Img, bg, bg1Img;
var sprite;
var gameState = "start";
var score = 0;
var egg1,apple1;

var button
function preload() {
  blueBinImg = loadImage("./images/bluebin.png");
  greenBinImg = loadImage("./images/greenbin.png");
  yellowBinImg = loadImage("./images/yellowbin.png");
  redBinImg = loadImage("./images/redbin.png");
  bg2Img = loadImage("./images/bg2.jpg");
  bg1Img = loadImage("./images/bg1.png");
  appleImg = loadImage("./images/apple.png");
  mobileImg = loadImage("./images/mobile.png");
  boxImg = loadImage("./images/box.png");
  newspaperImg = loadImage("./images/newspaper.png");
  fishImg = loadImage("./images/fish.png");
  polybagImg = loadImage("./images/polybag.png");
  bottleImg = loadImage("./images/bottle.png");
  crumpledpaperImg = loadImage("./images/crumpledpaper.png");
  eggImg = loadImage("./images/egg.png");
  breadImg = loadImage("./images/bread.png");
  paperImg = loadImage("./images/paper.png");
  gbottleImg = loadImage("./images/gbottle.png");
  
};

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  wasteGroup=new Group()
  
  bg1 = createSprite(width/2, height/2, windowWidth, windowHeight);
  bg1.addImage(bg1Img);
  bg1.scale = 1.1;
  bg1.visible =false

  bg2 = createSprite(width/2, height/2, windowWidth, windowHeight);
  bg2.addImage(bg2Img);
  bg2.scale = 1.5;
  bg2.visible =false

  greenBin = createSprite(width/2-400,height-200, 100, 100);
  greenBin.addImage(greenBinImg);
  greenBin.scale = 1;
  greenBin.visible =false

  blueBin = createSprite(width/2-150,height-200, 100, 100);
  blueBin.addImage(blueBinImg);
  blueBin.scale = 1;
  blueBin.visible =false

  yellowBin = createSprite(width/2+150,height-200, 100, 100);
  yellowBin.addImage(yellowBinImg);
  yellowBin.scale = 1;
  yellowBin.visible =false

  redBin = createSprite(width/2+400,height-200, 100, 100);
  redBin.addImage(redBinImg);
  redBin.scale = 1;
  redBin.visible =false
  /*apple = createSprite(width/2, height/2, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.2;

  banana = createSprite(width/2-350, height/2-80, 10, 10);
  banana.addImage(bananaImg);
  banana.scale = 0.2;

  egg = createSprite(width/2+400, height/2, 10, 10);
  egg.addImage(eggImg);
  egg.scale = 0.2;*/

 

 
 
};

function draw() {
  background("black");  
  
  drawSprites();

  if(gameState === "start") {
   bg1.visible=true

  

  if(keyDown("space")) {
    
    gameState= "play";
  
  }
  }

  if(gameState === "play") {
    bg2.visible=true
    addSprites(eggImg,0.15,width/2-250, height/2);
    addSprites(bottleImg,0.15,width/2-100, height/2);
    addSprites(paperImg,0.7,width/2-130, height/2+300);
    addSprites(gbottleImg,0.2,width/2+240, height/2+330);
    addSprites(appleImg,0.15,width/2+600, height/2+40);
    addSprites(polybagImg,0.5,width/2-80, height/2+260);
    addSprites(crumpledpaperImg,0.2,width/2+70, height/2-50);
    addSprites(boxImg,0.45,width/2+600, height/2+220);
    addSprites(fishImg,0.35,width/2-600, height/2+250);
    addSprites(newspaperImg,0.8,width/2-460, height/2+130);
    addSprites(breadImg,0.45,width/2-580, height/2+100);
    addSprites(mobileImg,0.6,width/2+350, height/2);

    greenBin.visible = true;
    blueBin.visible = true;
    redBin.visible = true;
    yellowBin.visible = true;
    gameState="new"
  }  
 
};

function addSprites(spriteImage, scale, posX, posY,) { 
  sprite = createSprite(posX, posY); 
  sprite.addImage("sprite", spriteImage);
  sprite.scale = scale;
 
  sprite.debug=true
  wasteGroup.add(sprite)
  
  
}

function go() {
  gameState= "play";
}

function mouseDragged()
{
  if(gameState==="new")
  {
    for(var x=0;x<wasteGroup.length;x++)
    {
      if(mousePressedOver(wasteGroup[x]))
      {
        wasteGroup[x].x=mouseX;
        wasteGroup[x].y=mouseY;
      }
    }
  }
}