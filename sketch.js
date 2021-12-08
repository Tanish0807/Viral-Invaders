var gun, gunImage;
var virus1,virus2,virus3,virus4,virus5;
var virusGroup;
var backgroundImg;
var gamestate
var bullets,bulletImage
var hearts;
var earth;
var score;
var gameov;
var winso;
var lifel;

function setup(){
  createCanvas(400,600)
  gun = createSprite(200,350,50,50)
  virusGroup = new Group()
  createVector(mouseX,mouseY)
  bullets = createSprite(mouseX,mouseY,10,10)
    bullets.setVelocity(0,-3)
  hearts = 3
  gamestate = "play"
  earth = createSprite(200,600,5000,240)
  
  virus1 = loadImage("virus1.png")
  virus2 = loadImage("virus2.png")
  virus3 = loadImage("virus3.png")
  virus4 = loadImage("virus4.png")
  virus5 = loadImage("virus5.png")
  
  gunImage = loadImage("gun.png")
  bulletImage = loadImage("bullet.png");
  earthImage = loadImage("earth.png");
  bg = loadImage("bgf.png");
  gameov = loadSound("gameo.mp3")
  winso = loadSound("Coin.mp3")
  lifel = loadSound("Pew.mp3")
  score = 0;
}

function draw(){
  background(bg)
  textSize(20)
  fill("white")
  text("Score: "+score,50,40)
  text("Lives: "+hearts,250,40)
  gun.addImage("gunImg",gunImage);
  gun.scale = 0.1
  bullets.addImage("bulletImg", bulletImage)
  bullets.scale = 0.1
  earth.addImage("Eimg",earthImage)
  earth.scale = 3
  //x = gun.positionX
  
  
  if(mouseY<466 && mouseY>133){
   gun.x = mouseX
   //gun.y = mouseY
  if(mouseWentDown()){
    //bullets = createSprite(mouseX,mouseY-25,15,15)
    bullets = createSprite(mouseX,325,15,15)
    bullets.setVelocity(0,-3)
  }
  }
   
  if(bullets.isTouching(virusGroup)){
    bullets.remove()
    virusGroup[0].remove()
    score = score + 1;
    winso.play()
  }
  
  
  if(hearts === 0){
    gamestate="end"
  }
  
  spawnVirus();
  if(gamestate==="play"){
  drawSprites();
  }
  
  if(earth.isTouching(virusGroup)){
    hearts = hearts - 1
    virusGroup[0].remove()
    lifel.play()
    lifel.loop=false;
  }
  
  if(gamestate==="end"){
    textSize(30)
    fill("white")
    //text("Press q or click the restart button",80,300);
    text("GAME OVER",100,300);
    //gameov.play()
    //gameov.loop=false;
    //break;
  }

}

function spawnVirus(){
  if(frameCount%60===0){
    var virus = createSprite(Math.round(random(20,380)),-20,20,20);
    virus.setVelocity(0,10);
    virusGroup.add(virus);
    virus.lifetime=55
    virus.scale = 0.1
    
    var virIm = Math.round(random(1,5))
    switch(virIm){
      case 1: virus.addImage("virus1",virus1)
        break;
      case 2: virus.addImage("virus2",virus2)
        break;
      case 3: virus.addImage("virus3",virus3)
        break;
      case 4: virus.addImage("virus4",virus4)
        break;
      case 5: virus.addImage("virus5",virus5)
        break;
        
    }
  }
}