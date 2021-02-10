var database;
var form,game,player,allPlayers;
var bg,bg1,bg2;
var gameState =0;
var turn;
var playerCount=0;
var tiles=[];
var maxTiles = 20;
var tileImages = [];
var tileCover;
var matchingTiles = {};
var allowClick = false;
var clickMouse = true;
var click = 0;
var matchedSprites = [];
var clickSound, click2Sound, applauseSound;
var playerWon;
var matchNum1;
var matchNum2;

function preload(){
bg = loadImage("Images/bg.jpg");
bg1 = loadImage("Images/bg1.jfif");
bg2 = loadImage("Images/bg3.jpg")
tileCover = loadImage("Images/CardCover.png");
clickSound = loadSound("soundEffect/Click1.mp3");
click2Sound = loadSound("soundEffect/Click2.mp3")
applauseSound = loadSound("soundEffect/Applause.mp3");
  for(let i=0;i<10;i++){
    tileImages[i] = loadImage("Images/bam" + i + ".jpg");
  }
}

function setup()
{
  createCanvas(displayWidth-25,displayHeight-160);

database = firebase.database();

game = new Game();
game.getState();
game.start();


}

function draw() {
  background(bg);  

  
  // if(gameState === 0){
  //    background(bg);
  // }

  if(playerCount === 2){
    game.updateState(1);
  }
  if(gameState === 1){
    game.getTurn();
    clear();
    game.play();
  }
   
  
  if(gameState ===2){
    game.end();
}



}
function mouseClicked(){
  clickMouse = true;
}