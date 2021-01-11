class Player{

    constructor()
    {
      this.index = null;
      this.name = null;
    }

    getCount(){
        var countref =database.ref("playerCount");
        countref.on("value", function(data){
            playerCount = data.val();
        });
    }

    updateCount(count){
      database.ref("/").update({
          playerCount:count
      })
    }

    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name : this.name
           
        })
    }
    static getPlayerDetails(){
        var inforef = database.ref("players");
        inforef.on("value",function(data){
        allPlayers = data.val();
    })
    }
}
