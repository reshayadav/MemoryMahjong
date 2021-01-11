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
        this.title.position(displayWidth/2-250, 20);
        this.title.style('color','black');
        this.title.style('font-size','80px')
        this.title.style('background','lightpink')
        
        this.input.position(displayWidth/2 -40,displayHeight/2 -60);
        this.input.style('width','180px');
        this.input.style('height','50px');
        this.input.style('font-size','50px');
        this.input.style('background','red')
       
        this.button.position(displayWidth/2 +5, displayHeight/2);
        this.button.style('width','100px');
        this.button.style('height','50px');
        this.button.style('font-size','40px');
        this.button.style('background','blue');
        this.button.style('color','white');

        this.button.mousePressed(()=>{
            console.log(this);
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount +=1;
            player.index = playerCount;
            player.update()
            player.updateCount(playerCount);

            this.greeting.html("Hello "+ player.name);
            this.greeting.position(displayWidth/2 -70, displayHeight/3);
            this.greeting.style('color','black');
            this.greeting.style('font-size','80px')
        });

    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }
}
        
    
  
