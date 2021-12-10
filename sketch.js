//GitHub test

var gun, gunImage;
var virus1,virus2,virus3,virus4,virus5;
var virusGroup;
var backgroundImg;
var gamestate
var bullets,bulletImage
var hearts, score, highscore;
var earth;
var gameov, winso, lifel;
var button, lbutton, rbutton, buttoni, restart_button;


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
  buttoni = loadImage("fire.png")
  buttonr = loadImage("RB.png")
  buttonl = loadImage("LB.png")
  score = 0;
  highscore = 0;
  button = createSprite(200,550,20,20)
  button.addImage("FImg",buttoni);
  button.scale=0.5
  lbutton = createSprite(80,550,20,20)
  lbutton.addImage("LImg",buttonl);
  lbutton.scale=0.4
  rbutton = createSprite(320,550,20,20)
  rbutton.addImage("RImg",buttonr);
  rbutton.scale=0.4
  buttonrps = loadImage("R.png")
  restart_button = createSprite(200,350,70,40)
  //restart_button.visible = false;
  restart_button.addImage("RB",buttonrps)
  restart_button.scale = 0.7
}

function draw(){
  background(bg)
  touches[0] = mouseX
  touches[1] = mouseY
  textSize(20)
  fill("white")
  text("Score: "+score,25,40)
  text("High Score: "+highscore,135,40)
  text("Lives: "+hearts,300,40)
  
  gun.addImage("gunImg",gunImage);
  gun.scale = 0.1
  bullets.addImage("bulletImg", bulletImage)
  bullets.scale = 0.1
  earth.addImage("Eimg",earthImage)
  earth.scale = 3
  //x = gun.positionX
  
  if(mousePressedOver(button)){
    bullets = createSprite(gun.x-7,gun.y-15,15,15)
    bullets.setVelocity(0,-3)
  }
  if(mousePressedOver(lbutton)){
    gun.x = gun.x - 15
  }
  if(mousePressedOver(rbutton)){
    gun.x = gun.x + 15
  }
  if(mouseY<466 && mouseY>133){
   gun.x = mouseX
   //gun.y = mouseY
  if(mouseWentDown() && gamestate==="play"){
    //bullets = createSprite(mouseX,mouseY-25,15,15)
    bullets = createSprite(mouseX,325,15,15)
    bullets.setVelocity(0,-2)
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
    restart_button.visible= false;
    gun.visible = true;
    button.visible = true;
    lbutton.visible = true;
    rbutton.visible = true;
  }
  
  if(earth.isTouching(virusGroup)){
    hearts = hearts - 1
    virusGroup[0].remove()
    lifel.play()
    lifel.loop=false;
  }
  
  if(gamestate==="end"){
    textSize(18)
    fill("white")
    text("Game Over! Click the Restart Button to Replay.",10,300);
    drawSprites()
    restart_button.visible= true;
    gun.visible = false;
    button.visible = false;
    lbutton.visible = false;
    rbutton.visible = false;
    //gameov.play()
    //gameov.loop=false;
    //break;
    virusGroup.destroyEach()
    if(score>highscore){
      highscore = score 
    }
  }

  if(mousePressedOver(restart_button)){
    gamestate="play"
    score = 0;
    hearts = 3;
  }

function spawnVirus(){
  if(gamestate==="play"){
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
}
}
