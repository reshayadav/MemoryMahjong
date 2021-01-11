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
        
  
      
    }
    play()
    {
      console.log("hi");
      form.hide();
      
      drawSprites();
    }
    
}