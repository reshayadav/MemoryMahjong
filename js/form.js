class Form{

    constructor()
    {
        
        this.input = createInput ("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h2");
        this.title = createElement ("h1");

    }
    display(){
       
        this.title.html("Memory Mahjong");
        this.title.position(displayWidth/2-300, 20);
        this.title.style('color','#06878E');
        this.title.style('font-size','80px')
       
        
        this.input.position(displayWidth/2 -90,displayHeight/2 -60);
        this.input.style('width','180px');
        this.input.style('height','50px');
        this.input.style('font-size','50px');
        this.input.style('background','#E87C7D')
       
        this.button.position(displayWidth/2 -45, displayHeight/2);
        this.button.style('width','100px');
        this.button.style('height','50px');
        this.button.style('font-size','40px');
        this.button.style('color','black');
        this.button.style('background','#E88C7D')

        this.button.mousePressed(()=>{
            click2Sound.play();
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount +=1;
            player.index = playerCount;
            player.update()
            player.updateCount(playerCount);

            this.greeting.html("Hello "+ player.name);
            this.greeting.position(displayWidth/2-180, displayHeight/3);
            this.greeting.style('color','black');
            this.greeting.style('font-size','80px')
        });

        
    var restart = createButton("RESTART");
    restart.position(displayWidth-100, 10);
    restart.mousePressed(()=>{
      player.updateCount(0);
      game.updateState(0);
      location.reload();
      game.updateTurn(1);
      database.ref("/").update({
          players : null
      });
      database.ref("/").update({
        matchedSprites : null
    });
    })

    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }
}
        
    
  
