class Game{

    constructor(){

    }
    
    
    getState(){
      var stateref = database.ref("gameState");
      stateref.on("value",function(data){
      gameState = data.val();
      })
    }

    updateState(gameState){
    database.ref("/").update({
    gameState:gameState
    })
    }
    
    async start(){
      if(gameState == 0){
        player = new Player();
         var playerCountref = await database.ref("playerCount").once("value");
        if(playerCountref.exists()){
          playerCount = playerCountref.val()
             player.getCount();
         }
        
        form = new Form();
        form.display();
        }
        let y = 0;
        let x = 0;
        for(var i=0;i<maxTiles;i++){
          
      tiles[i] = createSprite(width/4+50*x+10,height/4+y,40,50);
         x = x + 1;
          if((i+1)%5 == 0){
            y = y+ 60;
            x = 0;
          }
      }
      


        
  
      
    }
    play()
    {
    
      form.hide();
      
      drawSprite();
    }
    
    updateTurn(turn){
      database.ref('/').update({
        turn : turn
      })
    }

    getTurn(){
      var turnRef = database.ref("turn");
      turnRef.on("value",function(data){
        turn = data.val();
      })
    }
}