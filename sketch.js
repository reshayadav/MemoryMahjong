var database;
var form,game,player,allPlayers;
var bg;
var gameState =0;
var playerCount=0;
var tiles=[];
var maxTiles = 20;

function preload(){
bg = loadImage("Images/bg.jpg")
}

function setup()
{
  createCanvas(displayWidth,displayHeight);

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
    clear();
    game.play();
        
  }
   
  
 /* if(gameState === 2){
    game.end();
  }*/

 
 
}
