//GitHub test

var gun, gunImage;
var virus1, virus2, virus3, virus4, virus5;
var virusGroup, virusscoreImg;
var backgroundImg;
var gamestate;
var bullets, bulletImage;
var hearts, score, highscore;
var earth;
var gameov, winso, lifel, dkgkso, loseso;
var button, lbutton, rbutton, buttoni, restart_button;
var goodbGroup;
var money;
var logoimg;
var startbutton, startimg;
var level, nextlevel;
var homescreen, homescpn;
var powerup, powerImg;
var next_level, nextlevimg;
var pre_score;
var powerShow, powerscore;
var dontkillgroup, preven1, preven2, preven3, prevenscore;
var marketbutton, marketimg;
var bullvelo;
var backbutton, upgradebullet, upgradepowerup;
var powerupfreq
var bulletmarket, powermarket;
var coinicon;
var buttonSpam;


function setup() {
  powerupfreq = 240
  money = 0;
  level = 1;
  createCanvas(420, 600);
  bullvelo=-7
  gun = createSprite(200, 350, 50, 50);
  powerup = "";
  virusGroup = new Group();
  nextlevel = false;
  createVector(mouseX, mouseY);
  bullets = createSprite(mouseX, mouseY, 10, 10);
  bullets.setVelocity(0, bullvelo);
  goodbGroup = new Group();
  dontkillgroup = new Group();
  hearts = 3;
  gamestate = "start";
  earth = createSprite(200, 600, 5000, 240);
  virus1 = loadImage("virus1.png");
  virus2 = loadImage("virus2.png");
  virus3 = loadImage("virus3.png");
  virus4 = loadImage("virus4.png");
  virus5 = loadImage("virus5.png");
  preven1 = loadImage("mask.png");
  preven2 = loadImage("syringe.png");
  preven3 = loadImage("sanitize.png");
  gunImage = loadImage("gun.png");
  bulletImage = loadImage("bullet.png");
  earthImage = loadImage("earth.png");
  bg = loadImage("bgf.png");
  gameov = loadSound("gameo.mp3");
  winso = loadSound("Coin.mp3");
  loselo = loadSound('Lose.wav')
  dkgkso = loadSound('Door.wav')
  
  
  lifel = loadSound("Pew.mp3");
  buttoni = loadImage("fire.png");
  buttonr = loadImage("RB.png");
  buttonl = loadImage("LB.png");
  virusscoreImg = loadImage("virusscore.png")
  powerscore = loadImage('powerupimg.png')
  prevenscore = loadImage('preventiveimg.png')
  homescpn = loadImage('homescreen.png')
  startimg = loadImage('start.png')
  marketimg = loadImage('market.png')
  bulletmarket = loadImage('bulletupgrade.png')
  powermarket = loadImage('powermarket.png')  
  score = 0;
  pre_score = 0;
  highscore = 0;
  buttonSpam = 0
  button = createSprite(200, 550, 20, 20);
  button.addImage("FImg", buttoni);
  button.scale = 0.2;
  lbutton = createSprite(80, 550, 20, 20);
  lbutton.addImage("LImg", buttonl);
  lbutton.scale = 0.1;
  rbutton = createSprite(320, 550, 20, 20);
  startbutton = createSprite(120, 530, 40, 40);
  startbutton.addImage("StaGamIm", startimg)
  startbutton.scale = 0.135
  marketbutton = createSprite(280, 530, 40, 40)
  marketbutton.addImage('markim', marketimg)
  marketbutton.scale = 0.4
  
  rbutton.addImage("RImg", buttonr);
  rbutton.scale = 0.1;
  buttonrps = loadImage("R.png");

  coinicon = loadImage('coin.png')
  backbutton = createSprite(350, 530, 40, 40);
  backbutton.addImage('bbi',homescpn)
  backbutton.scale = 0.25
  upgradebullet = createSprite(100, 200, 40, 40);
  upgradebullet.addImage('bulletmarimg',bulletmarket)
  upgradebullet.scale = 0.7
  upgradepowerup = createSprite(100, 450, 40, 40);
  upgradepowerup.addImage('powermarimg',powermarket)
  upgradepowerup.scale = 0.7
  
  
  nextlevimg = loadImage('Nexlev.png')
  homescreen = createSprite(100, 350, 40, 40);
  homescreen.addImage('hsimg', homescpn)
  homescreen.scale = 0.2
  next_level = createSprite(180, 410, 40, 40);
  next_level.addImage("nlImg", nextlevimg)
  next_level.scale = 0.25;
  restart_button = createSprite(250, 350, 70, 40);
  restart_button.visible = true;
  restart_button.addImage("RB", buttonrps);
  restart_button.scale = 0.1;
  logoimg = loadImage("logo.png");
  powerImg = loadImage("power.png");
  //logoimg = loadImage("point.png")
}

function draw() {
  background(bg);
  
  touches[0] = mouseX;
  touches[1] = mouseY;
  requirescore = 40 + 10*level;

  if (bullets.isTouching(goodbGroup)) {
    winso.play();
    bullets.remove();
    goodbGroup[0].remove();
    var randomg = Math.round(random(1, 3));
    switch (randomg) {
      case 1:
        powerup = "Increase Bullet speed";
        break;
      case 2:
        powerup = "Decrease Virus speed";
        break;
      case 3:
        powerup = "+2 points";
    }

    powerShow = 400;
  }

  if (powerShow <= 400 && powerShow >= 200) {
    textSize(20);
    fill('lightblue')
    text(powerup, 100, 400)
    powerShow = powerShow - 10;
  }

  gun.addImage("gunImg", gunImage);
  gun.scale = 0.1;
  bullets.addImage("bulletImg", bulletImage);
  bullets.scale = 0.1;
  earth.addImage("Eimg", earthImage);
  earth.scale = 3;
  //x = gun.positionX

  if (score >= requirescore) {
    gamestate = "end";
    nextlevel = true;
    money = money + score;
    score = 0;
  }
  

  if (bullets.isTouching(virusGroup)) {
    bullets.remove();
    virusGroup[0].remove();
    score = score + 10;
    winso.play();
  }
  if (bullets.isTouching(dontkillgroup)) {
    bullets.remove();
    dontkillgroup[0].remove();
    score = score - 10;
    dkgkso.play()
  }

  if (hearts === 0 && score < requirescore) {
    //loselo.play()
    gamestate = "end";
    nextlevel = false;
    
  }

  if (gamestate === "start") {
    image(logoimg, 100, 10, 200, 85);
    image(virusscoreImg, 5, 130, 220, 170);
    image(powerscore, 100, 280, 230, 180);
    image(prevenscore, 210, 150, 210, 135);
    drawSprites();
    restart_button.visible = false;
    homescreen.visible = false;
    next_level.visible = false;
    gun.visible = false;
    button.visible = false;
    lbutton.visible = false;
    rbutton.visible = false;
    startbutton.visible = true;
    marketbutton.visible = true;
    marketbutton.disable = false;
    earth.visible = false;
    backbutton.visible = false
    upgradebullet.visible = false
    upgradepowerup.visible = false
    upgradebullet.disable = true
    upgradepowerup.disable = true
    
  }
  

  if(startbutton.touched){gamestate = 'play';}
  if (mousePressedOver(startbutton)) {
    gamestate = "play";
  }
  if (mousePressedOver(marketbutton)) {
    gamestate = "market";
  }
  if (mousePressedOver(backbutton)) {
    gamestate = "start";
  }
  if (mousePressedOver(upgradebullet) && (gamestate=='market')) {
    if (money >= 1000){
      bullvelo = -50
      money = money - 1000
      textSize(30);
      fill('white')
      text('Coins: ' + money, 170, 50)
      textSize(20);
      fill('yellow')
      text('Powerup Added Successfully!', 50, 320)
    } else {
      textSize(20);
      fill('yellow')
      text('Invalid Purchase! Not enough coins', 50, 320)
    }
  }
  if (mousePressedOver(upgradepowerup) && (gamestate=='market')) {
    if (money >= 3000){
      powerupfreq = 180;
      money -= 3000
      textSize(30);
      fill('white')
      text('Coins: ' + money, 170, 50)
      textSize(20);
      fill('yellow')
      text('Powerup Added Successfully!', 50, 320)
    } else {
      textSize(20);
      fill('yellow')
      text('Invalid Purchase! Not enough coins', 50, 320)
    }
    
  }


  spawnVirus();
  spawngoodb();
  spawndontkill();
  if (gamestate === "play") {
    buttonSpam = buttonSpam + 1
    if(buttonSpam>10){
    if (mousePressedOver(button)) {
    bullets = createSprite(gun.x - 7, gun.y - 25, 15, 15);
    //bullets.setVelocity(0, bullvelo);
    bullets.lifetime = 90;
      if (powerup == "Increase Bullet Speed") {
        bullets.setVelocity(0, bullvelo - 40);
      } else {
        bullets.setVelocity(0, bullvelo);
      }
      var cooldown = 0;
      cooldown = cooldown + 1;
      if (cooldown >= 400) {
        bullets = createSprite(gun.x, 325, 15, 15);
        if (powerup == "Increase Bullet speed") {
          bullets.velocityY = -15;
        } else {
          bullets.setVelocity(0, bullvelo);
        }
        cooldown = 0;
      }
  }
      buttonSpam = 0
    }
  if (mousePressedOver(lbutton)) {
    gun.x = gun.x - 15;
  }
  if (mousePressedOver(rbutton)) {
    gun.x = gun.x + 15;
  }
  if (mouseY < 466 && mouseY > 0) {
    gun.x = mouseX;
    //gun.y = mouseY
    if (mouseWentDown() && gamestate === "play") {
      bullets = createSprite(mouseX, gun.y - 25, 15, 15);
      bullets.lifetime = 90;
      if (powerup == "Increase Bullet Speed") {
        bullets.setVelocity(0, bullvelo - 40);
      } else {
        bullets.setVelocity(0, bullvelo);
      }
      var cooldown = 0;
      cooldown = cooldown + 1;
      if (cooldown >= 400) {
        bullets = createSprite(gun.x, 325, 15, 15);
        if (powerup == "Increase Bullet speed") {
          bullets.velocityY = -15;
        } else {
          bullets.setVelocity(0, bullvelo);
        }
        cooldown = 0;
      }
    }
  }
    textSize(15);
    fill("white");
    text("Level: " + level, 20, 40);
    text("Score: " + pre_score, 95, 40);
    text("Required score: " + requirescore, 170, 40);
    text("Lives: " + hearts, 310, 40);
    pre_score = score;
    drawSprites();
    restart_button.visible = false;
    upgradebullet.visible = false
    upgradepowerup.visible = false
    upgradebullet.disable = true
    upgradepowerup.disable = true
    
    homescreen.visible = false;
    next_level.visible = false;
    gun.visible = true;
    button.visible = true;
    lbutton.visible = true;
    rbutton.visible = true;
    earth.visible = true;
    startbutton.visible = false;
    backbutton.visible = false
    marketbutton.visible = false
    marketbutton.disable = true;
  }
  
  
  if (gamestate === "market") {
    drawSprites();
    
    textSize(18)
    fill('white')
    text("Increase the Bullet's Speed",180, 200)
    text("Increase no. of power ups",180, 450)
    restart_button.visible = false;
    homescreen.visible = false;
    next_level.visible = false;
    gun.visible = false;
    button.visible = false;
    lbutton.visible = false;
    rbutton.visible = false;
    earth.visible = false;
    startbutton.visible = false;
    backbutton.visible = true
    upgradebullet.visible = true
    upgradepowerup.visible = true
    upgradebullet.disable = false
    upgradepowerup.disable = false
    startbutton.visible = false;
    marketbutton.visible = false
    image(coinicon, 170, 21, 40, 40);
    image(marketimg, 60, 17, 90, 90)
    marketbutton.disable = true;
    textSize(30);
    fill('white')
    text('Coins: ' + money, 220, 50)
    
    
  }

  if (earth.isTouching(virusGroup)) {
    hearts = hearts - 1;
    virusGroup[0].remove();
    lifel.play();
    lifel.loop = false;
    if (hearts === 0) {
      money = money + score;
    }
  }
  if (earth.isTouching(dontkillgroup)) {
    score = score + 5
    dontkillgroup[0].remove();
    //lifel.play();
    //lifel.loop = false;
  }
  if (powerup == "+2 points") {
    pre_score += 2;
    powerup = "";
  }

  if (gamestate === "end") {
    textSize(15);
    fill("white");
    text("Level: " + level, 20, 40);
    text("Score: " + pre_score, 95, 40);
    text("Required score: " + requirescore, 170, 40);
    text("Lives: " + hearts, 310, 40);
  
    textSize(18);
    fill("white");
    if (nextlevel == true) {
      text(
        "You Win ! You're eligible for next level.",
        15,
        300
      );
    }
    if (nextlevel == false) {
      text("You Lose ! You could not make the required score.", 15, 280);
    }
    image(coinicon, 80, 155, 40, 40);
    textSize(22)
    text("Coins: " + money, 135, 180);
    drawSprites();
    restart_button.visible = true;
    homescreen.visible = true;
    if (nextlevel == true) {
      next_level.visible = true;
    }
    marketbutton.disable = true;
    gun.visible = false;
    marketbutton.visible = false
    button.visible = false;
    lbutton.visible = false;
    startbutton.visible = false;
    backbutton.visible = false
    rbutton.visible = false;
    upgradebullet.visible = false
    upgradepowerup.visible = false
    upgradebullet.disable = true
    upgradepowerup.disable = true
    
    //gameov.play()
    //gameov.loop=false;
    //break;
    virusGroup.destroyEach();
    if (score > highscore) {
      highscore = score;
    }
    if (mousePressedOver(restart_button)) {
      gamestate = "play";
      score = 0;
      hearts = 3;
    }
    if (mousePressedOver(next_level)) {
      gamestate = "play";
      score = 0;
      hearts = 3;
      level = level + 1;
    }
    if (mousePressedOver(homescreen)) {
      gamestate = "start";
      score = 0;
      hearts = 3;
      if (nextlevel == true) {
        level += 1
      }
    }
  }
}

function spawnVirus() {
  if (gamestate === "play") {
    frames = 60 - level;
    if ((frameCount % 60) - level === 0) {
      var virus = createSprite(Math.round(random(20, 380)), -20, 20, 20);
      if (powerup == "Decrease Virus speed") {
        virus.velocityY = 7;
      } else {
        virus.velocityY = 10;
      }
      virusGroup.add(virus);
      virus.scale = 0.1;

      var virIm = Math.round(random(1, 5));
      switch (virIm) {
        case 1:
          virus.addImage("virus1", virus1);

          break;
        case 2:
          virus.addImage("virus2", virus2);
          break;
        case 3:
          virus.addImage("virus3", virus3);
          break;
        case 4:
          virus.addImage("virus4", virus4);
          break;
        case 5:
          virus.addImage("virus5", virus5);
          break;
      }
    }
  }
}
function spawngoodb() {
  if (gamestate === "play") {
    if (frameCount % 200 === 0) {
      var goodb = createSprite(Math.round(random(20, 380)), -20, 20, 20);
      goodb.addImage("powerImg", powerImg);
      goodb.scale = 0.03;
      goodb.setVelocity(0, 10);
      goodbGroup.add(goodb);
      goodb.lifetime = 55;
      //goodb.scale = 0.01;
    }
  }
}
function spawndontkill() {
  if (gamestate === "play") {
    if (frameCount % powerupfreq === 0) {
      var dontkill = createSprite(Math.round(random(20, 380)), -20, 20, 20);

      dontkill.setVelocity(0, 10);
      dontkillgroup.add(dontkill);
      dontkill.lifetime = 55;
      var prevenIm = Math.round(random(1, 3));
      switch (prevenIm) {
        case 1:
          dontkill.addImage("one", preven1);
          dontkill.scale = 0.3;
          break;
        case 2:
          dontkill.addImage("two", preven2);
          dontkill.scale = 0.1;
          break;
        case 3:
          dontkill.addImage("three", preven3);
          dontkill.scale = 0.05;
          break;
      }
    }
  }
}


