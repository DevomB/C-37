class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
   form.hideForm();
   Player.getPlayerInfo();
   console.log("All players" + allPlayers)
   if(keyIsDown(UP_ARROW)){
     player.distance+=50;
     player.update();
   }
  }
}
