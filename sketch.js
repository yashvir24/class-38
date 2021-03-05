var canvas,bgimage;
var gameState = 0;

var database,playerCount,form,player,game;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
if(playerCount===4){
    game.update(1);
}
if(gameState===1){
clear ();
game.play();
}
}




